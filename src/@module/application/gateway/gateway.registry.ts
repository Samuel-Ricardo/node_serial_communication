import { SERIAL_GATEWAY_REGISTRY } from './serial/serial.registry';
import { SERIAL_TELEMETRY_GATEWAY_REGISTRY } from './telemetry/telemetry.registy';

export const GATEWAY_REGISTRY = {
  SERIAL: SERIAL_GATEWAY_REGISTRY,
  TELEMETRY: SERIAL_TELEMETRY_GATEWAY_REGISTRY,
};
