module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileTransformer.ts',
    '^__tests__/(.*)$': '<rootDir>/__tests__/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.husky/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/test-utils.tsx',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(tsx|ts)',
    '!<rootDir>/src/**/*.test.(tsx|ts)',
    '!<rootDir>/src/**/*.styled.ts',
    '!<rootDir>/src/**/*.types.ts',
    '!<rootDir>/__mocks__/',
    '!<rootDir>/__tests__/',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/config/',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['src', 'node_modules'],
};
