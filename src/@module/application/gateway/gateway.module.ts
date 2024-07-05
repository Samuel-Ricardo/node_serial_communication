import { Container } from 'inversify';
import { SERIAL_GATEWAY_MODULE } from './serial/serial.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const GATEWAY_MODULE = Container.merge(_MODULE, SERIAL_GATEWAY_MODULE);
