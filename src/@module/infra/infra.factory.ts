import { CONFIG_FACTORY } from './config/config.factory';
import { SERVER_FACTORY } from './server/server.factory';

export const INFRA_FACTORY = {
  SERVER: SERVER_FACTORY,
  CONFIG: CONFIG_FACTORY,
};
