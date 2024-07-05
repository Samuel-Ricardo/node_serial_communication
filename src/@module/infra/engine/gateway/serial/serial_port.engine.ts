import { SerialPort } from 'serialport';
import { ENV } from '../../../config/env/env.config';

const SERIAL_PORT_GATEWAY_ENGINE = new SerialPort({
  path: ENV.SERIAL.PORT,
  baudRate: ENV.SERIAL.BAUD_RATE as number,
});
