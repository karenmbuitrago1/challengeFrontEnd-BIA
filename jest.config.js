module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
  };
  