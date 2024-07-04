import { Container } from 'inversify';
import { HTTP_SERVER_MODULE } from './http/http.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const SERVER_MODULE = Container.merge(_MODULE, HTTP_SERVER_MODULE);
