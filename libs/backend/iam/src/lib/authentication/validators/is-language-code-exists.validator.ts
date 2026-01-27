import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsLanguageCodeExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaClientService) {}

  async validate(code: string): Promise<boolean> {
    if (!code) return true; // handled by @IsOptional
    const language = await this.prisma.language.findUnique({ where: { code } });
    return !!language;
  }

  defaultMessage(args: ValidationArguments) {
    return `Language code '${args.value}' does not exist`;
  }
}

export function IsLanguageCodeExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsLanguageCodeExistsConstraint,
    });
  };
}
