import { GATEWAY_ENGINE_REGISTRY } from './gateway/gateway.registry';

export const ENGINE_REGISTRY = {
  GATEWEAY: GATEWAY_ENGINE_REGISTRY,
  DOCS: {
    SWAGGER: Symbol.for('MODULE::INFRA::ENGINE::DOCS::SWAGGER'),
  },
};
