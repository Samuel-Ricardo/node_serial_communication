import { Container } from 'inversify';
import { ROUTER_MODULE } from './router/router.module';
import { MIDDLEWARE_MODULE } from './middleware/middleware.module';
import { GATEWAY_MODULE } from './gateway/gateway.module';
import { USE_CASE_MODULE } from './use_case/use_case.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const APPLICATION_MODULE = Container.merge(
  _MODULE,
  ROUTER_MODULE,
  MIDDLEWARE_MODULE,
  GATEWAY_MODULE,
  USE_CASE_MODULE,
);
