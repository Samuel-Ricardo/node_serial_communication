import { Container } from 'inversify';
import { SERIAL_TELEMETRY_GATEWAY_REGISTRY } from './telemetry.registy';
import { SerialPortPowertrainGateway } from './powertrain/powertrain.gateway';

export const SERIAL_GATEWAY_TELEMETRY_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

SERIAL_GATEWAY_TELEMETRY_MODULE.bind(
  SERIAL_TELEMETRY_GATEWAY_REGISTRY.POWERTRAIN,
).to(SerialPortPowertrainGateway);
