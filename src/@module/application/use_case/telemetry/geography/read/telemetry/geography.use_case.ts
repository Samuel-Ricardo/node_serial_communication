import { injectable } from 'inversify';
import { IReadGeographyTelemetryUseCase } from '../../../../../../domain/use_case/telemetry/geography/read_geography_telemetry.use_case';
import { GeographySerialPortGatewaySupport } from '../../../../../support/gateway/serial/telemetry/geography.support';
import { Geography } from '../../../../../../domain/entity/telemetry/geography.entity';

@injectable()
export class ReadGeographyTelemetryUseCase
  extends GeographySerialPortGatewaySupport
  implements IReadGeographyTelemetryUseCase
{
  async execute(): Promise<Geography[]> {
    return await this.gateway.readGeographyTelemetry();
  }
}
