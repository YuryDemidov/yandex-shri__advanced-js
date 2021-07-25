import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  extensionsToTreatAsEsm: ['.ts'],
  transform: {},
  verbose: true,
};

export default config;
