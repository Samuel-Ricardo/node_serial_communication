import { inject, injectable } from 'inversify';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { MODULE } from '../../../../app.registry';
import { IBatteryDTO } from '../../../../domain/DTO/telemetry/battery/battery.dto';
import { Battery } from '../../../../domain/entity/telemetry/battery.entity';
import { serialize } from '../../../../../@lib/serializar/json/json.serializer';
import { IBatteryGateway } from '../../../../domain/gateway/telemetry/battery/battery.gateway';

@injectable()
export class SerialPortBatteryGateway implements IBatteryGateway {
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.SERIAL.SERIAL_PORT)
    private readonly gateway: ISerialPortGateway,
  ) {}

  async readBatteryTelemetry() {
    const telemetry = this.gateway
      .read()
      .toString('utf-8')
      .split('\r\n')
      .map((value) => serialize(value))
      .filter((value) => value !== null) as IBatteryDTO[];

    return Battery.fromDTOArray(telemetry);
  }
}
