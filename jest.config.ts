import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  verbose: true,
};

export default config;