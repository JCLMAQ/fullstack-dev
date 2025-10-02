// Create the "environment files" for the Angular app


// const { writeFile } = require('fs');
import { writeFile } from 'fs';
// const { argv } = require('yargs');
// read environment variables from .env file
// require('dotenv').config();
import dotenv from 'dotenv';
const config = dotenv.config()
// read the command line arguments passed with yargs
// const argv = yargs.environemnt;

const environment = process.env.NODE_ENV || 'dev';
const isProduction = environment === 'prod';

if ( !process.env.API_FRONTEND || !process.env.API_FRONTEND_PORT || !process.env.API_BACKEND_URL || !process.env.API_BACKEND_PREFIX || !process.env.API_BACKEND || !process.env.API_BACKEND_PORT || !process.env.API_SECRET || !process.env.AUTO_REGISTRATION_ENABLE || !process.env.REGISTRATION_VALIDATION || !process.env.PWDLESS_LOGIN_ENABLE || !process.env.DEFAULT_LANGUAGE || !process.env.SUPPORTED_LANGUAGE) {
  console.error('All the required environment variables were not provided!');
  process.exit(-1);
}

const targetPath = isProduction
    ? `./apps/frontend/devapp/environments/environment.prod.ts`
    : `./apps/frontend/dev-app/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
    export const ENVIRONMENT_DATA = {
        production: ${isProduction},
        API_BACKEND_URL: "http://${process.env.API_BACKEND}:${process.env.API_BACKEND_PORT}",
        API_BACKEND_PREFIX: "${process.env.API_BACKEND_PREFIX}",
        API_FRONTEND_URL: "http://${process.env.API_FRONTEND}:${process.env.API_FRONTEND_PORT}",
        API_FRONTEND: "${process.env.API_FRONTEND}",
        API_FRONTEND_PORT: "${process.env.API_FRONTEND_PORT}",
        API_SECRET: "${process.env.API_SECRET}",
        AUTO_REGISTRATION_ENABLE: "${process.env.AUTO_REGISTRATION_ENABLE}",
        REGISTRATION_VALIDATION: "${process.env.REGISTRATION_VALIDATION}",
        PWDLESS_LOGIN_ENABLE: "${process.env.PWDLESS_LOGIN_ENABLE}",
        defaultLanguage: "${process.env.DEFAULT_LANGUAGE}",
        supportedLanguages: ${process.env.SUPPORTED_LANGUAGE}
    };`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});
