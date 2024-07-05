import { Container } from 'inversify';
import { GATEWAY_ENGINE_MODULE } from './gateway/gateway.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ENGINE_MODULE = Container.merge(_MODULE, GATEWAY_ENGINE_MODULE);
