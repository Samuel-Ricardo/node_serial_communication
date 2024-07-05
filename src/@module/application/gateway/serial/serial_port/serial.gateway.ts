import { inject, injectable } from 'inversify';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { SerialPort } from 'serialport';
import { MODULE } from '../../../../app.registry';
import { logger } from '../../../../../@lib/log/logger.lib';

@injectable()
export class SerialPortGateway implements ISerialPortGateway {
  constructor(
    @inject(MODULE.INFRA.ENGINE.GATEWEAY.SERIAL.SERIAL_PORT)
    private readonly engine: SerialPort,
  ) {
    this.engine.setEncoding('utf-8');
  }

  async open() {
    if (!this.engine.isOpen)
      this.engine.open(
        (e) =>
          e ??
          logger.error({
            context: 'SERIAL_PORT_GATEWAY',
            message: 'Error opening serial port',
            error: e,
          }),
      );
  }

  async close() {
    if (this.engine.isOpen)
      this.engine.close(
        (error) =>
          error ??
          logger.error({
            context: 'SERIAL_PORT_GATEWAY',
            message: 'Error closing serial port',
            error,
          }),
      );
  }

  onOpen(callback: () => void) {
    this.engine.on('open', callback);
  }

  onClose(callback: () => void) {
    this.engine.on('close', callback);
  }

  async read(size?: number) {
    await this.open();
    const result = this.engine.read() as string;
    await this.close();
    return result;
  }

  write(buffer: Buffer): Promise<void> {
    throw new Error('Method not implemented.');
  }
  stream(read: Function): NodeJS.ReadWriteStream {
    throw new Error('Method not implemented.');
  }
}
