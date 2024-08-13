import { Container } from 'inversify';
import { SERIAL_TELEMETRY_GATEWAY_REGISTRY } from './telemetry.registy';
import { SerialPortPowertrainGateway } from './powertrain/powertrain.gateway';
import { SERIAL_GATEWAY_MODULE } from '../serial/serial.module';
import { SerialPortBatteryGateway } from './battery/battery.gateway';
import { SerialPortGeographyGateway } from './geography/geography.gateway';

const _MODULE = new Container({
  autoBindInjectable: true,
});

export const SERIAL_TELEMETRY_GATEWAY_MODULE = Container.merge(
  _MODULE,
  SERIAL_GATEWAY_MODULE,
);

SERIAL_TELEMETRY_GATEWAY_MODULE.bind(
  SERIAL_TELEMETRY_GATEWAY_REGISTRY.POWERTRAIN,
).to(SerialPortPowertrainGateway);

SERIAL_TELEMETRY_GATEWAY_MODULE.bind(
  SERIAL_TELEMETRY_GATEWAY_REGISTRY.BATTERY,
).to(SerialPortBatteryGateway);

SERIAL_TELEMETRY_GATEWAY_MODULE.bind(
  SERIAL_TELEMETRY_GATEWAY_REGISTRY.GEOGRAPHY,
).to(SerialPortGeographyGateway);
