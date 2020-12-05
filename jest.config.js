module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^presentational/(.*)': '<rootDir>/src/presentational/$1',
    '^container/(.*)': '<rootDir>/src/container/$1',
    '^_redux/(.*)': '<rootDir>/src/redux/$1',
    '^data/(.*)': '<rootDir>/src/data/$1',
    '^service/(.*)': '<rootDir>/src/service/$1',
    '\\.(gpx)$': '<rootDir>/__mocks__/fileMock.js',
  },

};
