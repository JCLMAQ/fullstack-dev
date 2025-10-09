// Create the "environment files" for the Angular app
import dotenv from 'dotenv';
import { writeFile } from 'fs';
import path from 'path';
// Use require for dotenv-expand to avoid type dependency
const dotenvExpand = require('dotenv-expand');

// Resolve env file: prefer .env at repo root, fallback to copy.env
const repoRoot = process.cwd();
const explicitPath = process.env.DOTENV_CONFIG_PATH;
const candidatePaths = [
  explicitPath,
  path.join(repoRoot, '.env'),
  path.join(repoRoot, 'copy.env'),
].filter(Boolean) as string[];

let loadedPath: string | undefined;
for (const p of candidatePaths) {
  const result = dotenv.config({ path: p });
  if (!result.error) {
    dotenvExpand.expand(result);
    loadedPath = p;
    break;
  }
}

if (!loadedPath) {
  console.warn('No .env found. Create a .env at repo root or provide DOTENV_CONFIG_PATH. Using current process.env values.');
}

const environment = process.env.NODE_ENV || 'dev';
const isProduction = environment === 'prod';

const required = [
  'API_FRONTEND',
  'API_FRONTEND_PORT',
  'API_BACKEND_URL',
  'API_BACKEND_PREFIX',
  'API_BACKEND',
  'API_BACKEND_PORT',
  'API_SECRET',
  'AUTO_REGISTRATION_ENABLE',
  'REGISTRATION_VALIDATION',
  'PWDLESS_LOGIN_ENABLE',
  'DEFAULT_LANGUAGE',
  'SUPPORTED_LANGUAGE',
];

const missing = required.filter((k) => !(k in process.env));
if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  if (loadedPath) console.error(`Loaded from: ${loadedPath}`);
  process.exit(-1);
}

const targetPath = isProduction
  ? `./apps/frontend/dev-app/environments/environment.prod.ts`
  : `./apps/frontend/dev-app/environments/environment.ts`;

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

writeFile(targetPath, environmentFileContent, function (err?: NodeJS.ErrnoException | null) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(`Wrote variables to ${targetPath}${loadedPath ? ` (from ${loadedPath})` : ''}`);
});
