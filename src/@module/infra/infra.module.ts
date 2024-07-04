import { Container } from 'inversify';
import { SERVER_MODULE } from './server/server.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const INFRA_MODULE = Container.merge(_MODULE, SERVER_MODULE);
