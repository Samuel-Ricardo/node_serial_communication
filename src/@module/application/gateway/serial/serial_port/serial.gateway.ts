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
    this.open();
    logger.info(
      {
        context: 'SERIAL_PORT_GATEWAY',
        message: 'Serial port gateway initialized',
      },
      {
        readable: this.engine.readable,
        open: this.engine.isOpen,
      },
    );
  }

  open() {
    if (!this.engine.isOpen) {
      this.engine.open((e) =>
        e
          ? logger.error({
              context: 'SERIAL_PORT_GATEWAY',
              message: 'Error opening serial port',
              error: e,
            })
          : logger.info(
              {
                context: 'SERIAL_PORT_GATEWAY',
                message: 'Serial port opened',
              },
              { readable: this.engine.readable },
            ),
      );
    }
  }

  close() {
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

  read(size?: number) {
    const result = Buffer.from(this.engine.read(size));
    return result;
  }

  write(data: Buffer) {
    this.engine.write(
      data,
      (error) =>
        error ??
        logger.error({
          context: 'SERIAL_PORT_GATEWAY',
          message: 'Error writing to serial port',
          error,
        }),
    );
  }
  stream(read: (chunk: Buffer) => void) {
    this.engine.on('data', read);
  }
}
