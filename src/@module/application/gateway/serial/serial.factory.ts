import { SerialPort } from 'serialport';
import { SERIAL_GATEWAY_MODULE } from './serial.module';
import { SERIAL_GATEWAY_REGISTRY } from './serial.registry';

export const SERIAL_GATEWAY_FACTORY = {
  SERIAL_PORT: () =>
    SERIAL_GATEWAY_MODULE.get<SerialPort>(SERIAL_GATEWAY_REGISTRY.SERIAL_PORT),
};
