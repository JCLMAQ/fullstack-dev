import { HashingService } from '@be/common';
import { MailsService } from '@be/mails';
import { TokenType } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable, Logger } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { I18nService } from 'nestjs-i18n';
import { AuthResponse } from '../dto/account-validation.dto/account-validation.dto';

@Injectable()
export class PasswordResetService {

   private readonly logger = new Logger(PasswordResetService.name);

  constructor(
    private readonly prisma: PrismaClientService,
    private readonly hashingService: HashingService,
    private readonly i18n: I18nService,
    private readonly mailService: MailsService,
  ) {}

  /**
   *
   * Send forgot password email
   */
  async sendForgotPasswordEmail(
  email: string,
  lang = 'en',
): Promise<AuthResponse> {

console.log('\n🔍 [SERVICE] ===== Starting sendForgotPasswordEmail =====');
console.log('🔍 [SERVICE] Email:', email);
console.log('🔍 [SERVICE] Lang:', lang);

  this.logger.debug(`[START] sendForgotPasswordEmail for email: ${email}`);

  // Find user by email
  console.log('🔍 [SERVICE] Searching for user in database...');
  const user = await this.prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });
  console.log('🔍 [SERVICE] User found:', user ? `ID: ${user.id}` : 'NO USER FOUND');

  if (!user) {
    this.logger.warn(`Password reset requested for non-existent email: ${email}`);
    return {
      success: false,
      message: await this.i18n.translate('auths.EMAIL_NOT_FOUND', { lang }),
    };
  }

  this.logger.debug(`User found: ${user.id}, isDeleted: ${user.isDeleted}`);

  // Check if user is active
  if (user.isDeleted || user.isDeletedDT) {
    this.logger.warn(`Password reset requested for deleted user: ${user.id}`);
    return {
      success: false,
      message: await this.i18n.translate('auths.USER_DELETED', { lang }),
    };
  }

  try {
    this.logger.debug('Invalidating existing tokens...');

    // Invalidate existing forgot password tokens
    const invalidatedCount = await this.prisma.token.updateMany({
      where: {
        userId: user.id,
        type: TokenType.FORGOT,
        valid: true,
      },
      data: { valid: false },
    });

    this.logger.debug(`Invalidated ${invalidatedCount.count} existing tokens`);

    // Generate new reset token
    const token = this.generateToken();
    this.logger.debug(`Generated token: ${token.substring(0, 10)}...`);

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 2);
    this.logger.debug(`Token expires at: ${expiresAt.toISOString()}`);

    // Save token to database
    this.logger.debug('Saving token to database...');
    const tokendata = await this.prisma.token.create({
      data: {
        tokenId: token,
        type: TokenType.FORGOT,
        userId: user.id,
        expiration: expiresAt,
        valid: true,
      },
    });

    this.logger.debug(`Token saved with ID: ${tokendata.id}`);

    if (!tokendata) {
      this.logger.error('Failed to create password reset token in database');
      return {
        success: false,
        message: await this.i18n.translate('auths.FORGOT_PWD_EMAIL_NOT_SENT', {
          lang,
        }),
      };
    }

    this.logger.log(`Generated forgot password token for user ${user.id}`);

    // Send email with reset link
    try {
      console.log('🔍 [SERVICE] About to call mailService.sendPasswordResetEmail');
      console.log('🔍 [SERVICE] Email:', user.email);
      console.log('🔍 [SERVICE] Token:', token.substring(0, 10) + '...');
      this.logger.debug(`Calling mailService.sendPasswordResetEmail for ${user.email}`);
      await this.mailService.sendPasswordResetEmail(user.email, token);
      console.log('✅ [SERVICE] Email sent successfully!');
      this.logger.log(`✅ Password reset email sent successfully to ${user.email}`);
    } catch (emailError) {
      console.error('❌ [SERVICE] Error sending email:', emailError);
      this.logger.error(
        `❌ Failed to send password reset email to ${user.email}`,
        emailError instanceof Error ? emailError.stack : String(emailError)
      );

      // Invalidate token since email failed
      await this.prisma.token.update({
        where: { id: tokendata.id },
        data: { valid: false },
      });

      return {
        success: false,
        message: await this.i18n.translate('auths.FORGOT_PWD_EMAIL_NOT_SENT', {
          lang,
        }),
      };
    }

    this.logger.debug('[END] sendForgotPasswordEmail - SUCCESS');
    return {
      success: true,
      message: await this.i18n.translate('auths.FORGOT_PWD_EMAIL_SENT', {
        lang,
      }),
    };
  } catch (error) {
    this.logger.error(
      '❌ Error in sendForgotPasswordEmail',
      error instanceof Error ? error.stack : String(error)
    );
    return {
      success: false,
      message: await this.i18n.translate('auths.FORGOT_PWD_EMAIL_NOT_SENT', {
        lang,
      }),
    };
  }
}

  /**
   * Verify reset token validity
   */
  async verifyResetToken(
    token: string,
    lang = 'en',
  ): Promise<{ valid: boolean; userId?: string; message: string }> {
    try {
      const tokenRecord = await this.prisma.token.findFirst({
        where: {
          tokenId: token,
          type: TokenType.FORGOT,
          valid: true,
          expiration: {
            gte: new Date(),
          },
        },
      });

      if (!tokenRecord) {
        return {
          valid: false,
          message: await this.i18n.translate('auths.FORGOT_PWD_BAD_TOKEN', {
            lang,
          }),
        };
      }

      return {
        valid: true,
        userId: tokenRecord.userId,
        message: 'Token valid',
      };
    } catch {
      return {
        valid: false,
        message: await this.i18n.translate('auths.FORGOT_PWD_ERROR', { lang }),
      };
    }
  }

  /**
   * Reset password using token
   */
  async resetPassword(
    token: string,
    newPassword: string,
    verifyPassword: string,
    lang = 'en',
  ): Promise<AuthResponse> {
    // Verify passwords match
    if (newPassword !== verifyPassword) {
      return {
        success: false,
        message: await this.i18n.translate('auths.FORGOT_PWD_BAD_PWD', {
          lang,
        }),
      };
    }

    // Verify token
    const tokenVerification = await this.verifyResetToken(token, lang);
    if (!tokenVerification.valid || !tokenVerification.userId) {
      return {
        success: false,
        message: tokenVerification.message,
      };
    }

    try {
      // Hash new password
      const hashedPassword = await this.hashingService.hash(newPassword);

      // Update user password
      await this.prisma.userSecret.update({
        where: { userId: tokenVerification.userId },
        data: { pwdHash: hashedPassword },
      });

      // Invalidate the token
      await this.prisma.token.updateMany({
        where: {
          tokenId: token,
          type: TokenType.FORGOT,
          valid: true,
        },
        data: { valid: false },
      });

      return {
        success: true,
        message: await this.i18n.translate('auths.FORGOT_PWD_NEW_PWD_OK', {
          lang,
        }),
      };
    } catch {
      return {
        success: false,
        message: await this.i18n.translate('auths.FORGOT_PWD_ERROR', { lang }),
      };
    }
  }

  /**
   * Change password for authenticated user
   */
  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
    verifyPassword: string,
    lang = 'en',
  ): Promise<AuthResponse> {
    // Verify passwords match
    if (newPassword !== verifyPassword) {
      return {
        success: false,
        message: await this.i18n.translate('auths.CHANGE_PWD_ERROR', { lang }),
      };
    }

    try {
      // Get user with current password
      const userSecret = await this.prisma.userSecret.findUnique({
        where: { userId },
      });

      if (!userSecret) {
        return {
          success: false,
          message: await this.i18n.translate('auths.USER_NOT_FOUND', { lang }),
        };
      }

      // Verify current password
      if (!userSecret.pwdHash) {
        return {
          success: false,
          message: await this.i18n.translate('auths.CHANGE_PWD_ERROR', {
            lang,
          }),
        };
      }

      const isCurrentPasswordValid = await this.hashingService.compare(
        oldPassword,
        userSecret.pwdHash,
      );

      if (!isCurrentPasswordValid) {
        return {
          success: false,
          message: await this.i18n.translate('auths.CHANGE_PWD_ERROR', {
            lang,
          }),
        };
      }

      // Hash new password
      const hashedPassword = await this.hashingService.hash(newPassword);

      // Update password
      await this.prisma.userSecret.update({
        where: { userId },
        data: { pwdHash: hashedPassword },
      });

      return {
        success: true,
        message: await this.i18n.translate('auths.CHANGE_PWD_SUCCESS', {
          lang,
        }),
      };
    } catch {
      return {
        success: false,
        message: await this.i18n.translate('auths.CHANGE_PWD_ERROR', { lang }),
      };
    }
  }

  /**
   * Generate secure random token
   */
  private generateToken(): string {
    return randomBytes(32).toString('hex');
  }
}
