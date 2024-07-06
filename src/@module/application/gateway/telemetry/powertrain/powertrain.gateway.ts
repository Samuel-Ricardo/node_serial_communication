import { inject, injectable } from 'inversify';
import { IPowertrainGateway } from '../../../../domain/gateway/telemetry/powertrain/powertrain.gateway';
import { Powertrain } from '../../../../domain/entity/telemetry/powertrain.entity';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { MODULE } from '../../../../app.registry';
import { IPowertrainDTO } from '../../../../domain/DTO/telemetry/powertrain/powertrain.dto';

@injectable()
export class SerialPortPowertrainGateway implements IPowertrainGateway {
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.SERIAL.SERIAL_PORT)
    private readonly gateway: ISerialPortGateway,
  ) {}

  async readPowertrainTelemetry() {
    const result = await this.gateway.read();
    return Powertrain.fromDTO(
      JSON.parse(result.toString('utf-8')) as IPowertrainDTO,
    );
  }
}
