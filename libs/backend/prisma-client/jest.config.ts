export default {
  displayName: 'prisma-client',
  preset: '../../../jest.node.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { useESM: true, tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  coverageDirectory: '../../../coverage/libs/backend/prisma-client',
};
