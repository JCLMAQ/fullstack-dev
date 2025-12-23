#!/usr/bin/env node

import { execSync } from 'child_process';

/**
 * Script de nettoyage des ports utilisés par l'application
 * Libère les ports occupés par le backend, frontend et base de données
 */

interface PortConfig {
  port: number;
  name: string;
}

const PORTS: PortConfig[] = [
  { port: 3000, name: 'Backend NestJS' },
  { port: 4000, name: 'Frontend Angular' },
  { port: 5432, name: 'PostgreSQL' },
  { port: 5555, name: 'Prisma Studio' },
];

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function findProcessOnPort(port: number): string | null {
  try {
    const output = execSync(`lsof -ti :${port}`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();
    return output || null;
  } catch {
    return null;
  }
}

function killProcess(pid: string): boolean {
  try {
    execSync(`kill -9 ${pid}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function getProcessInfo(pid: string): string {
  try {
    const output = execSync(`ps -p ${pid} -o comm=`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();
    return output || 'Unknown';
  } catch {
    return 'Unknown';
  }
}

function cleanupPort(portConfig: PortConfig): boolean {
  const { port, name } = portConfig;
  const pid = findProcessOnPort(port);

  if (!pid) {
    log(`✓ Port ${port} (${name}) est libre`, 'green');
    return false;
  }

  const processName = getProcessInfo(pid);
  log(`⚠ Port ${port} (${name}) occupé par PID ${pid} (${processName})`, 'yellow');

  if (killProcess(pid)) {
    log(`✓ Processus ${pid} terminé avec succès`, 'green');
    return true;
  } else {
    log(`✗ Échec de la terminaison du processus ${pid}`, 'red');
    return false;
  }
}

function killAllNodeProcesses(): void {
  try {
    log('\n🔪 Terminaison de tous les processus Node.js...', 'yellow');
    execSync('pkill -9 node', { stdio: 'ignore' });
    log('✓ Tous les processus Node.js ont été terminés', 'green');
  } catch {
    log('✓ Aucun processus Node.js en cours d\'exécution', 'green');
  }
}

function main() {
  const args = process.argv.slice(2);
  const forceKillAll = args.includes('--all') || args.includes('-a');

  log('\n🧹 Nettoyage des ports...', 'cyan');
  log('━'.repeat(50), 'cyan');

  if (forceKillAll) {
    killAllNodeProcesses();
    return;
  }

  let cleaned = 0;

  for (const portConfig of PORTS) {
    if (cleanupPort(portConfig)) {
      cleaned++;
    }
  }

  log('━'.repeat(50), 'cyan');
  if (cleaned > 0) {
    log(`\n✓ Nettoyage terminé : ${cleaned} processus terminé(s)`, 'green');
  } else {
    log('\n✓ Tous les ports sont libres', 'green');
  }

  log('\n💡 Utilisation :', 'blue');
  log('  pnpm cleanup          - Nettoie les ports du projet', 'reset');
  log('  pnpm cleanup --all    - Termine tous les processus Node.js', 'reset');
}

main();
