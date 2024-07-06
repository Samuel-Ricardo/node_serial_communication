import { GATEWEAY_FACTORY } from './gateway/gateway.factory';
import { MIDDLEWARE_FACTORY } from './middleware/middleware.factory';
import { ROUTER_FACTORY } from './router/router.factory';
import { SERVICE_FACTORY } from './service/service.factory';
import { USE_CASE_FACTORY } from './use_case/use_case.factory';

export const APPLICATION_FACTORY = {
  ROUTER: ROUTER_FACTORY,
  MIDDLEWARE: MIDDLEWARE_FACTORY,
  GATEWAY: GATEWEAY_FACTORY,
  USE_CASE: USE_CASE_FACTORY,
  SERVICE: SERVICE_FACTORY,
};
