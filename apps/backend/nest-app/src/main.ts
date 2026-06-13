/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { ClsMiddleware } from 'nestjs-cls';
import { AppModule } from './app/app.module';
// import { PrismaClientService } from '@db/prisma-client';

const getRequiredString = (value: string | undefined, fallback: string): string => {
  return value ?? fallback;
};


async function bootstrap() {

const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'], // Activez tous les niveaux de log
  });

  // Configure class-validator to use NestJS DI container
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configuration des limites de taille pour les uploads Base64
  app.use(require('express').json({ limit: '10mb' }));
  app.use(require('express').urlencoded({ limit: '10mb', extended: true }));

  // Ne PAS servir les fichiers statiques directement pour permettre la vérification de sécurité
  // Les fichiers seront servis via UploadsController qui vérifie les permissions
  // app.useStaticAssets(join(process.cwd(), 'uploads'), {
  //   prefix: '/uploads/',
  // });

  // Configuration CORS pour permettre les requêtes depuis le frontend
  const corsOrigins = [
    process.env.API_FRONTEND_URL,
    process.env.API_FRONTEND_URL_IP,
  ].filter((origin): origin is string => Boolean(origin));

  app.enableCors({
    origin: corsOrigins,
    // origin: ['http://localhost:4100', 'http://127.0.0.1:4100'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-custom-lang'],
    credentials: true,
  });
 // Enable shutdown hooks for Prisma
  // const prismaClientService = app.get(PrismaClientService);
  // await prismaClientService.enableShutdownHooks(app);


    /* Nestjs has a built-in validation pipe: The ValidationPipe provides a convenient approach
      to enforce validation rules for all incoming client payloads,
      where the validation rules are declared with decorators from the class-validator package.
    */
    app.useGlobalPipes(new ValidationPipe({  // see https://www.notion.so/jclmaq5510/Validation-and-Transformation-9a2da8a694004fc8a0f2e64445ae3892
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));

    /* NestJS has a built-in ClassSerializerInterceptor that can be used to transform objects.
      You will use this interceptor to remove the password field from the response object.
      The ClassSerializerInterceptor uses the class-transformer package to define how to transform objects.
      Use the @Exclude() decorator to exclude the password field in the UserEntity class
    */
    app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector))
    );


    // NestJS CLS - create and mount the middleware manually here
    app.use(
      new ClsMiddleware({
          /* useEnterWith: true */
      }).use,
  );

 // Utilisez .env (NEST_SERVER_SWAGGER_ENABLE) pour contrôler l'exposition en dev seulement.
  if (process.env.NEST_SERVER_SWAGGER_ENABLE === '1') {
    const config = new DocumentBuilder()
      .setTitle(getRequiredString(process.env.SET_APP_TITLE, 'API'))
      .setDescription(
        getRequiredString(process.env.SET_APP_DESCRIPTION, 'API documentation')
      )
      .setVersion(getRequiredString(process.env.SET_APP_VERSION, '1.0.0'))
      .addTag(getRequiredString(process.env.SET_APP_ADDTAG, 'default'))
      .build();
    /*
    Bug avec circular dependency for Roles....
    */
    const document = SwaggerModule.createDocument(app, config, {
      ignoreGlobalPrefix: false
    });
    SwaggerModule.setup('/api/doc', app, document);
  }

  const globalPrefix = process.env.API_BACKEND_PREFIX || 'api';
  app.setGlobalPrefix(globalPrefix, {
    exclude: ['uploads/(.*)'], // Exclure /uploads du prefix global pour servir les fichiers directement
  });
  const port = process.env.API_BACKEND_PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on: ${await app.getUrl()}`);

}

bootstrap();
