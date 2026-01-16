import { User } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { generateSecret, verify } from 'otplib';
@Injectable()
export class OtpAuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaClientService,
  ) {}

  async generateSecret(email: string) {
    const secret = generateSecret();
    const appName = this.configService.getOrThrow('TFA_APP_NAME');
    const uri = `otpauth://totp/${encodeURIComponent(appName)}:${encodeURIComponent(email)}?secret=${secret}&issuer=${encodeURIComponent(appName)}`;
    return {
      uri,
      secret,
    };
  }

  async verifyCode(code: string, secret: string) {
    const result = await verify({ secret, token: code });
    return result.valid;
  }

  async enableTfaForUser(email: string, secret: string) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { email },
      select: { id: true },
    });
    const userbis: User = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        tfaSecret: secret,
        isTfaEnable: true,
      },
    });
    userbis;
  }
}
