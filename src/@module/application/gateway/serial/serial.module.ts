import { Container } from 'inversify';
import { ENGINE_MODULE } from '../../../infra/engine/engine.module';
import { SERIAL_GATEWAY_REGISTRY } from './serial.registry';
import { SerialPortGateway } from './serial_port/serial.gateway';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const SERIAL_GATEWAY_MODULE = Container.merge(_MODULE, ENGINE_MODULE);

SERIAL_GATEWAY_MODULE.bind(SERIAL_GATEWAY_REGISTRY.SERIAL_PORT).to(
  SerialPortGateway,
);
