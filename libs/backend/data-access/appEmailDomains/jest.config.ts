export default {
  displayName: 'appEmailDomains',
  preset: '../../../../jest.node.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { useESM: true, tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  coverageDirectory:
    '../../../../coverage/libs/backend/data-access/appEmailDomains',
};
