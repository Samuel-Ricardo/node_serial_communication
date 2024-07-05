import { Container } from 'inversify';
import { GATEWAY_ENGINE_REGISTRY } from './gateway.registry';
import { SERIAL_PORT_GATEWAY_ENGINE } from './serial/serial_port.engine';

export const GATEWAY_ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

GATEWAY_ENGINE_MODULE.bind(
  GATEWAY_ENGINE_REGISTRY.SERIAL.SERIAL_PORT,
).toConstantValue(SERIAL_PORT_GATEWAY_ENGINE);
