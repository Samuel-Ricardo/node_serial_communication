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
  ) {}

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

  close(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  onOpen(callback: Function): void {
    throw new Error('Method not implemented.');
  }
  onClose(callback: Function): void {
    throw new Error('Method not implemented.');
  }
  read(): Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  write(buffer: Buffer): Promise<void> {
    throw new Error('Method not implemented.');
  }
  stream(read: Function): NodeJS.ReadWriteStream {
    throw new Error('Method not implemented.');
  }
}
