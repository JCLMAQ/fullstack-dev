

/*
https://docs.nestjs.com/exception-filters#exception-filters-1
*/

import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    console.log('🚨 Exception caught by AllExceptionsFilter:');
    console.log('  - URL:', request.url);
    console.log('  - Method:', request.method);
    console.log('  - Exception:', exception);

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    console.log('  - Status:', status);
    console.log('  - Message:', message);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}


// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class ExceptionFilterService {}
