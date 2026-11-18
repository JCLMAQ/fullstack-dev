module.exports = {
  displayName: 'files-jcm',
  preset: '../../../jest.node.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { useESM: true, tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  coverageDirectory: '../../../coverage/libs/backend/files-jcm',
};
