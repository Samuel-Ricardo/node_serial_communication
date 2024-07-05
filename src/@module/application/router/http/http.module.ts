import { Container } from 'inversify';
import { HTTP_ROUTER_REGISTRY } from './http.registry';
import { EXPRESS_APP_ROUTER } from './express/app.router';
import { SERVER_MODULE } from '../../../infra/server/server.module';
import { EXPRESS_DOCS_ROUTER } from './express/docs.router';
import { DOCUMENTATION_MODULE } from '../../../infra/documentation/documentation.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const HTTP_ROUTER_MODULE = Container.merge(
  _MODULE,
  SERVER_MODULE,
  DOCUMENTATION_MODULE,
);

HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.APP).toDynamicValue(
  EXPRESS_APP_ROUTER,
);

HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.DOCS).toDynamicValue(
  EXPRESS_DOCS_ROUTER,
);
