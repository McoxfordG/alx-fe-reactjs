module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Load jest-dom matchers
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
