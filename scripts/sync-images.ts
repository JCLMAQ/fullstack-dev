#!/usr/bin/env ts-node
/**
 * Script pour synchroniser les images du dossier uploads/images avec la base de données
 * Usage: pnpm run sync-images
 */

import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '../libs/prisma/src/lib/generated/prisma/client';

if (!process.env['DATABASE_URL']) {
  console.error('❌ DATABASE_URL n\'est pas définie');
  process.exit(1);
}

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'],
});

const prisma = new PrismaClient({ adapter });

interface ImageMetadata {
  filename: string;
  originalName: string;
  mimeType: string;
  fileSize: number;
  width?: number;
  height?: number;
  storageType: string;
  storagePath: string;
  storageUrl: string;
  isPublic: boolean;
}

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.bmp': 'image/bmp'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

async function syncImages(): Promise<void> {
  const uploadsDir = path.join(process.cwd(), 'uploads', 'images');

  console.log('🔍 Vérification du répertoire:', uploadsDir);

  if (!fs.existsSync(uploadsDir)) {
    console.error('❌ Le répertoire uploads/images n\'existe pas');
    return;
  }

  const files = fs.readdirSync(uploadsDir);
  console.log(`📁 ${files.length} fichier(s) trouvé(s)`);

  let synced = 0;
  let skipped = 0;
  let errors = 0;

  for (const filename of files) {
    const filePath = path.join(uploadsDir, filename);
    const stats = fs.statSync(filePath);

    if (!stats.isFile()) {
      console.log(`⏭️  Ignoré (pas un fichier): ${filename}`);
      skipped++;
      continue;
    }

    try {
      // Vérifier si l'image existe déjà dans la base de données
      const existingImage = await prisma.image.findFirst({
        where: { filename }
      });

      if (existingImage) {
        console.log(`⏭️  Déjà en base: ${filename}`);
        skipped++;
        continue;
      }

      // Obtenir les métadonnées de l'image
      const mimeType = getMimeType(filename);

      // Créer l'entrée dans la base de données
      const imageData: ImageMetadata = {
        filename,
        originalName: filename,
        mimeType,
        fileSize: stats.size,
        storageType: 'local',
        storagePath: `/uploads/images/${filename}`,
        storageUrl: `/uploads/images/${filename}`,
        isPublic: true
      };

      // Chercher un utilisateur système ou le premier utilisateur disponible
      const systemUser = await prisma.user.findFirst({
        where: {
          OR: [
            { email: { contains: 'system' } },
            { email: { contains: 'admin' } }
          ]
        }
      });

      const firstUser = systemUser || await prisma.user.findFirst();

      if (!firstUser) {
        console.error('❌ Aucun utilisateur trouvé dans la base de données');
        console.log('💡 Créez au moins un utilisateur avant de synchroniser les images');
        return;
      }

      await prisma.image.create({
        data: {
          ...imageData,
          uploadedBy: {
            connect: { id: firstUser.id }
          }
        }
      });

      console.log(`✅ Synchronisé: ${filename} (${(stats.size / 1024).toFixed(2)} KB)`);
      synced++;

    } catch (error) {
      console.error(`❌ Erreur pour ${filename}:`, error instanceof Error ? error.message : error);
      errors++;
    }
  }

  console.log('\n📊 Résumé:');
  console.log(`  ✅ Synchronisées: ${synced}`);
  console.log(`  ⏭️  Ignorées: ${skipped}`);
  console.log(`  ❌ Erreurs: ${errors}`);
}

// Exécution du script
syncImages()
  .catch((error) => {
    console.error('❌ Erreur fatale:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
