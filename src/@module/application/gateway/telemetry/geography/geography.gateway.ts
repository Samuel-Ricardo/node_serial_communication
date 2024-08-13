import { inject, injectable } from 'inversify';
import { MODULE } from '../../../../app.registry';
import { ISerialPortGateway } from '../../../../domain/gateway/serial/serial.gateway';
import { IGeographyGateway } from '../../../../domain/gateway/telemetry/geography/geography.gateway';
import { Geography } from '../../../../domain/entity/telemetry/geography.entity';
import { serialize } from '../../../../../@lib/serializar/json/json.serializer';
import { IGeographyDTO } from '../../../../domain/DTO/telemetry/geography/geography.dto';

@injectable()
export class SerialPortGeographyGateway implements IGeographyGateway {
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.SERIAL.SERIAL_PORT)
    private readonly gateway: ISerialPortGateway,
  ) {}

  async readGeographyTelemetry() {
    return Geography.fromDTOArray(
      this.gateway
        .read()
        .toString('utf-8')
        .split('\r\n')
        .map((value) => serialize(value))
        .filter((value) => value !== null) as IGeographyDTO[],
    );
  }
}
