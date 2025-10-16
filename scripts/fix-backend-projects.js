#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration de base pour les targets de build
const buildTargets = {
  "build": {
    "executor": "@nx/js:tsc",
    "outputs": ["{options.outputPath}"],
    "options": {
      "outputPath": "",
      "main": "",
      "tsConfig": "",
      "assets": []
    }
  },
  "test": {
    "executor": "@nx/jest:jest",
    "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
    "options": {
      "jestConfig": "",
      "passWithNoTests": true
    },
    "configurations": {
      "ci": {
        "ci": true,
        "coverageReporters": ["text"]
      }
    }
  },
  "lint": {
    "executor": "@nx/eslint:lint",
    "outputs": ["{options.outputFile}"],
    "options": {
      "lintFilePatterns": []
    }
  }
};

// Fonction pour trouver tous les project.json récursivement
function findProjectJsonFiles(dir) {
  const results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...findProjectJsonFiles(filePath));
    } else if (file === 'project.json') {
      results.push(filePath);
    }
  }

  return results;
}

// Chercher tous les project.json des librairies backend
const backendProjects = [
  ...findProjectJsonFiles('libs/backend/data-access'),
  ...findProjectJsonFiles('libs/backend/utilities'),
  'libs/backend/prisma-client/project.json'
];

console.log(`Fixing ${backendProjects.length} backend projects...`);

backendProjects.forEach(projectPath => {
  try {
    const projectConfig = JSON.parse(fs.readFileSync(projectPath, 'utf8'));

    // Si les targets sont vides, ajouter la configuration
    if (!projectConfig.targets || Object.keys(projectConfig.targets).length === 0) {
      const projectDir = path.dirname(projectPath);
      const projectName = projectConfig.name;

      // Créer les nouveaux targets avec les bons chemins
      const newTargets = JSON.parse(JSON.stringify(buildTargets));

      newTargets.build.options.outputPath = `dist/${projectDir}`;
      newTargets.build.options.main = `${projectDir}/src/index.ts`;
      newTargets.build.options.tsConfig = `${projectDir}/tsconfig.lib.json`;

      newTargets.test.options.jestConfig = `${projectDir}/jest.config.ts`;

      newTargets.lint.options.lintFilePatterns = [`${projectDir}/**/*.ts`];

      // Mettre à jour la configuration
      projectConfig.targets = newTargets;

      // Écrire le fichier mis à jour
      fs.writeFileSync(projectPath, JSON.stringify(projectConfig, null, 2) + '\n');

      console.log(`✅ Fixed ${projectPath}`);
    } else {
      console.log(`⏭️  Skipped ${projectPath} (already has targets)`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${projectPath}:`, error.message);
  }
});

console.log('✨ Done!');
