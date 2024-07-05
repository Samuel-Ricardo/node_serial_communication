import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';
import { GATEWAY_ENGINE_FACTORY } from './gateway/gateway.factory';

export const ENGINE_FACTORY = {
  GATEWAY: GATEWAY_ENGINE_FACTORY,
  DOCS: {
    SWAGGER: () => ENGINE_MODULE.get(ENGINE_REGISTRY.DOCS.SWAGGER),
  },
};
