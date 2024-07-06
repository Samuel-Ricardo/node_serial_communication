import { SERIAL_GATEWAY_FACTORY } from './serial/serial.factory';
import { SERIAL_TELEMETRY_GATEWAY_FACTORY } from './telemetry/telemetry.factory';

export const GATEWEAY_FACTORY = {
  SERIAL: SERIAL_GATEWAY_FACTORY,
  TELEMETRY: SERIAL_TELEMETRY_GATEWAY_FACTORY,
};
