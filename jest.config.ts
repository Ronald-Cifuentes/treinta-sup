import nextJest from 'next/jest';

const createJestCofig = nextJest({dir: '.'});

const customJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [],
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.(tsx|ts)',
    '!<rootDir>/pages/**/*.test.(tsx|ts)',
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  testResultsProcessor: 'jest-sonar-reporter',
};

module.exports = createJestCofig(customJestConfig);
