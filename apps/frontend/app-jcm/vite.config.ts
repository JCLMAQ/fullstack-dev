import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    external: ['@prisma/client', '@db/prisma', 'node:url', 'node:path', 'node:process', 'node:fs'],
    noExternal: [],
  },
  optimizeDeps: {
    exclude: ['@prisma/client', '@db/prisma'],
  },
});
