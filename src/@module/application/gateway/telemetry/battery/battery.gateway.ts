import { inject, injectable } from 'inversify';
import { IBatteryService } from '../../../../domain/service/telemetry/battery/batteey.service';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { MODULE } from '../../../../app.registry';
import { IBatteryDTO } from '../../../../domain/DTO/telemetry/battery/battery.dto';
import { Battery } from '../../../../domain/entity/telemetry/battery.entity';
import { serialize } from '../../../../../@lib/serializar/json/json.serializer';

@injectable()
export class SerialPortBatteryGateway implements IBatteryService {
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.SERIAL.SERIAL_PORT)
    private readonly gateway: ISerialPortGateway,
  ) {}

  async read() {
    const telemetry = this.gateway
      .read()
      .toString('utf-8')
      .split('\r\n')
      .map((value) => serialize(value))
      .filter((value) => value !== null) as IBatteryDTO[];

    return Battery.fromDTOArray(telemetry);
  }
}
