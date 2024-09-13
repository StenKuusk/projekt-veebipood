module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: ['<rootDir>/jest_tests/**/*.test.js'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/jest.mock.js'
      },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/',
    ],
  };
  