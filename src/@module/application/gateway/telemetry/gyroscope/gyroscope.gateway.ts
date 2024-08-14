import { inject, injectable } from 'inversify';
import { Gyroscope } from '../../../../domain/entity/telemetry/gyroscope.entity';
import { IGyroscopeGateway } from '../../../../domain/gateway/telemetry/gyroscope/gyroscope.gateway';
import { MODULE } from '../../../../app.registry';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { serialize } from '../../../../../@lib/serializar/json/json.serializer';
import { IGyroscopeDTO } from '../../../../domain/DTO/telemetry/gyroscope/gyroscope.dto';

@injectable()
export class SerialPortGyroscopeGateway implements IGyroscopeGateway {
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.SERIAL.SERIAL_PORT)
    private readonly gateway: ISerialPortGateway,
  ) {}

  async readGyroscopeTelemetry() {
    return Gyroscope.fromDTOArray(
      this.gateway
        .read()
        .toString('utf-8')
        .split('\r\n')
        .map(serialize)
        .filter(this.notNull) as IGyroscopeDTO[],
    );
  }

  private notNull(value: any) {
    return value !== null;
  }
}
