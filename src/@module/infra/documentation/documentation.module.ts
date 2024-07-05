import { Container } from 'inversify';

export const DOCUMENTATION_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});
