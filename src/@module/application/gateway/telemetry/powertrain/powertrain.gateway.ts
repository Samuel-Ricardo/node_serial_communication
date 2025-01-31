import { inject, injectable } from 'inversify';
import { IPowertrainGateway } from '../../../../domain/gateway/telemetry/powertrain/powertrain.gateway';
import { Powertrain } from '../../../../domain/entity/telemetry/powertrain.entity';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { MODULE } from '../../../../app.registry';
import { IPowertrainDTO } from '../../../../domain/DTO/telemetry/powertrain/powertrain.dto';
import { serialize } from '../../../../../@lib/serializar/json/json.serializer';

@injectable()
export class SerialPortPowertrainGateway implements IPowertrainGateway {
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.SERIAL.SERIAL_PORT)
    private readonly gateway: ISerialPortGateway,
  ) {}

  async readPowertrainTelemetry() {
    const telemetry = this.gateway
      .read()
      .toString('utf-8')
      .split('\r\n')
      .map((value) => serialize(value))
      .filter((value) => value !== null) as IPowertrainDTO[];

    return Powertrain.fromDTOArray(telemetry);
  }
}
