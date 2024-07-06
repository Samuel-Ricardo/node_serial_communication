import { CONTROLLER_REGISTRY } from './controller/controller.registry';
import { GATEWAY_REGISTRY } from './gateway/gateway.registry';
import { MIDDLEWARE_REGISTRY } from './middleware/middleware.registry';
import { ROUTER_REGISTRY } from './router/router.registry';
import { SERVICE_REGISTRY } from './service/service.registry';
import { USE_CASE_REGISTRY } from './use_case/use_case.registry';

export const APPLICATION_REGISTRY = {
  ROUTER: ROUTER_REGISTRY,
  MIDDLEWARE: MIDDLEWARE_REGISTRY,
  GATEWAY: GATEWAY_REGISTRY,
  USE_CASE: USE_CASE_REGISTRY,
  SERVICE: SERVICE_REGISTRY,
  CONTROLLER: CONTROLLER_REGISTRY,
};
