const {
  NODE_ENV: mode,
} = process.env;

const isDevelopment = typeof mode === 'string' && mode === 'development';

interface IConfig {
  isDevelopment: boolean;
  apiUrl: string;
  apiHost: string;
  gaKey: string;
}

let config: IConfig;

const app = {
  isDevelopment,
};

try {
  const envConfig = require(`./${mode}`).default;
  config = { ...app, ...envConfig };
} catch (e) {
  throw new Error('INVALID CONFIG FILE');
}

export default Object.freeze(config);
