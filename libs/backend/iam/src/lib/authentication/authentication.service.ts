import { ActiveUserData, HashingService } from '@be/common';
import jwtConfig from '@be/jwtconfig';
import { Gender, Role, User } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import {
    ConflictException,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { ApiKeysService } from './api-keys/api-keys.service';
import { RefreshTokenDto } from './dto/refresh-token.dto/refresh-token.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { OtpAuthenticationService } from './otp-authentication/otp-authentication.service';
import { InvalidatedRefreshTokenError } from './refresh-token-ids.storage/invalid-refresh-token.error';
import { RefreshTokenIdsStorage } from './refresh-token-ids.storage/refresh-token-ids.storage';

type PgError = {
  code?: string;
};

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenIdsStorage: RefreshTokenIdsStorage,
    private readonly invalidatedRefreshTokenError: InvalidatedRefreshTokenError,
    private readonly apiKeysService: ApiKeysService,
    private readonly otpAuthService: OtpAuthenticationService,
    private readonly prisma: PrismaClientService,
  ) {}

  /**
   * Invalide le refresh token pour l'utilisateur (déconnexion)
   */
  async logout(userId: string): Promise<void> {
    await this.refreshTokenIdsStorage.invalidate(userId);
  }


  async emailCheck(email: string): Promise<boolean> {
      try {
        console.log('🔎 [AuthService] Recherche email:', email);
        const user = await this.prisma.user.findUnique({
          where: { email: email.toLowerCase() }
        });
        console.log('👤 [AuthService] User trouvé:', user ? `Oui (id: ${user.id})` : 'Non');
        const exists = !!user;
        console.log('✅ [AuthService] Résultat:', exists);
        return exists;
      } catch (error) {
        console.error('❌ [AuthService] Erreur lors de la recherche:', error);
        return false;
      }
    }

  async signUp(signUpDto: SignUpDto) {
    try {
      const password = await this.hashingService.hash(signUpDto.password);
      // Create the UserApiKey
      const uuid = randomUUID();
      const payload = await this.apiKeysService.createAndHash(uuid);
      const key = payload.hashedKey;

      const data = {
        email: signUpDto.email,
        userSecret: {
          create: {
            pwdHash: password,
          },
        },
        ApiKeys: {
          create: {
            key: key,
            uuid: uuid,
          },
        },
      };
      await this.prisma.user.create({ data });
      const apiUserKey = payload.apiKey;
      return { apiUserKey };
    } catch (err: unknown) {
      const pgUniqueViolationErrorCode = '23505';
      if ((err as PgError).code === pgUniqueViolationErrorCode) {
        throw new ConflictException();
      }
      throw err;
    }
  }

  /**
   * Extended sign up with additional profile information (compatible with AUTHS)
   */
  async signUpExtended(signUpDto: {
    email: string;
    password: string;
    verifyPassword: string;
    lastName?: string;
    firstName?: string;
    nickName?: string;
    Gender?: Gender;
    languageCode?: string;
    Roles?: Role[];
  }) {
    try {
      // Verify password confirmation
      if (signUpDto.password !== signUpDto.verifyPassword) {
        throw new ConflictException('Passwords do not match');
      }

      const password = await this.hashingService.hash(signUpDto.password);
      // Create the UserApiKey
      const uuid = randomUUID();
      const payload = await this.apiKeysService.createAndHash(uuid);
      const key = payload.hashedKey;

      // Find language by code if provided
      let languageId: number | undefined;
      if (signUpDto.languageCode) {
        const language = await this.prisma.language.findUnique({
          where: { code: signUpDto.languageCode },
        });
        if (language) {
          languageId = language.id;
        }
      }

      const data = {
        email: signUpDto.email.toLowerCase(),
        lastName: signUpDto.lastName || null,
        firstName: signUpDto.firstName || null,
        nickName: signUpDto.nickName || null,
        Gender: signUpDto.Gender || null,
        languageId: languageId || null,
        userSecret: {
          create: {
            pwdHash: password,
          },
        },
        ApiKeys: {
          create: {
            key: key,
            uuid: uuid,
          },
        },
      };

      // TODO: Add Roles after implementing proper role assignment

      const user = await this.prisma.user.create({ data });
      const apiUserKey = payload.apiKey;

      return {
        user: user.id,
        apiUserKey,
        success: true,
      };
    } catch (err: any) {
      const pgUniqueViolationErrorCode = '23505';
      if (err.code === pgUniqueViolationErrorCode) {
        throw new ConflictException('User already exists');
      }
      throw err;
    }
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: signInDto.email },
      include: {
        userSecret: true, // Return all fields
      },
    });
    if (!user) {
      throw new UnauthorizedException('User does not exists');
    }
    if (!user.userSecret?.pwdHash) {
      throw new UnauthorizedException('Password is not configured for this user');
    }
    const isEqual = await this.hashingService.compare(
      signInDto.password,
      user.userSecret.pwdHash,
    );

    if (!isEqual) {
      throw new UnauthorizedException('Password does not match');
    }

    if (user.isTfaEnable) {
      if (!signInDto.tfaCode || !user.tfaSecret) {
        throw new UnauthorizedException('2FA code is required');
      }
      const isValid = this.otpAuthService.verifyCode(
        signInDto.tfaCode,
        user.tfaSecret,
      );
      if (!isValid) {
        throw new UnauthorizedException('Invalid 2FA code');
      }
    }
    return await this.generateTokens(user);
  }

  async verifyPassword(signInDto: SignInDto): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email: signInDto.email },
      include: {
        userSecret: true, // Return all fields
      },
    });
    if (!user) {
      console.log('❌ [AuthService] User does not exist for email:', signInDto.email);
      return false;
    }
    if (!user.userSecret?.pwdHash) {
      console.log('❌ [AuthService] User has no password hash for email:', signInDto.email);
      return false;
    }
    const isEqual = await this.hashingService.compare(
      signInDto.password,
      user.userSecret.pwdHash,
    );

    if (!isEqual) {
      console.log('❌ [AuthService] Password does not match for email:', signInDto.email);
      return false;
    }

    console.log('✅ [AuthService] Password verified successfully for email:', signInDto.email);
    return true;
  }

  async generateTokens(user: User) {
    const refreshTokenId = randomUUID();
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        { email: user.email, role: user.Roles },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl, {
        refreshTokenId,
      }),
    ]);
    await this.refreshTokenIdsStorage.insert(user.id, refreshTokenId);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    try {
      const { sub, refreshTokenId } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'> & { refreshTokenId: string }
      >(refreshTokenDto.refreshToken, {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      });
      const user = await this.prisma.user.findUnique({
        where: { id: sub },
      });
      const isValid = await this.refreshTokenIdsStorage.validate(
        user!.id,
        refreshTokenId,
      );
      if (isValid) {
        await this.refreshTokenIdsStorage.invalidate(user!.id);
      } else {
        throw new Error('Refresh token is invalid');
      }
      return this.generateTokens(user!);
    } catch (err) {
      if (err instanceof InvalidatedRefreshTokenError) {
        // Take action: notify user that his refresh token might have been stolen?
        throw new UnauthorizedException(
          'Access denied, contact the Adminitrator',
        );
      }
      throw new UnauthorizedException(
        'Refresh token problem, contact the Adminitrator',
      );
    }
  }

  private async signToken<T>(userId: string, expiresIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn,
      },
    );
  }
}
