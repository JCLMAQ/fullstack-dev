import { killPort } from '@nx/node/utils';

export default async function () {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  await killPort(port);
  console.log('\nTearing down...\n');
}
