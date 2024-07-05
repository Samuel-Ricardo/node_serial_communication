import dotnev from 'dotenv';

dotnev.config();

export const ENV = {
  ...process.env,
  PORT: process.env.PORT || 3000,
  SERIAL: {
    PORT: process.env.SERIAL_PORT || '/dev/tty-usbserial1',
    BAUD_RATE: Number(process.env.BAUD_RATE) || 57600,
  },
};
