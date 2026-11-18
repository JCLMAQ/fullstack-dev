export default {
  displayName: 'time-util',
  preset: '../../../../jest.node.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { useESM: true, tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  coverageDirectory: '../../../../coverage/libs/backend/utilities/time-util',
};
