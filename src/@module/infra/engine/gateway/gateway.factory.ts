import { SerialPort } from 'serialport';
import { GATEWAY_ENGINE_MODULE } from './gateway.module';
import { GATEWAY_ENGINE_REGISTRY } from './gateway.registry';

export const GATEWAY_ENGINE_FACTORY = {
  SERIAL: () =>
    GATEWAY_ENGINE_MODULE.get<SerialPort>(
      GATEWAY_ENGINE_REGISTRY.SERIAL.SERIAL_PORT,
    ),
};
