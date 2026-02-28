import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const proxyConfigPath = path.resolve(__dirname, '../../../../proxy.config.json');
const proxyConfig = JSON.parse(readFileSync(proxyConfigPath, 'utf-8')) as Record<string, unknown>;

export default defineConfig({
  server: {
    proxy: proxyConfig,
  },
  ssr: {
    external: ['@prisma/client', '@db/prisma', 'node:url', 'node:path', 'node:process', 'node:fs'],
    noExternal: [],
  },
  optimizeDeps: {
    exclude: ['@prisma/client', '@db/prisma'],
  },
});
