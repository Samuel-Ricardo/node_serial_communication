import { CONFIG_REGISTRY } from './config/config.registry';
import { DOCUMETNATION_REGISTRY } from './documentation/documentation.registry';
import { ENGINE_REGISTRY } from './engine/engine.registry';
import { SERVER_REGISTRY } from './server/server.registry';

export const INFRA_REGIYSTRY = {
  SERVER: SERVER_REGISTRY,
  CONFIG: CONFIG_REGISTRY,
  ENGINE: ENGINE_REGISTRY,
  DOCS: DOCUMETNATION_REGISTRY,
};
