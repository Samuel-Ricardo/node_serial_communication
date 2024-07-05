import { Container } from 'inversify';
import { GATEWAY_ENGINE_MODULE } from './gateway/gateway.module';

import lazy from 'inversify-inject-decorators';
import { SWAGGER_ENGINE } from './documentation/swagger.engine';
import { ENGINE_REGISTRY } from './engine.registry';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ENGINE_MODULE = Container.merge(_MODULE, GATEWAY_ENGINE_MODULE);

ENGINE_MODULE.bind(ENGINE_REGISTRY.DOCS.SWAGGER).toConstantValue(
  SWAGGER_ENGINE,
);

export const { lazyInject: injectEngine } = lazy(ENGINE_MODULE);
