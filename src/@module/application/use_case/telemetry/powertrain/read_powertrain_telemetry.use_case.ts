import { injectable } from 'inversify';
import { IReadPowertrainTelemetryUseCase } from '../../../../domain/use_case/telemetry/powertrain/read_powertrain_telemetry.use_case';
import { PowertrainSerialGatewaySupport } from '../../../support/gateway/serial/telemetry/powertrain.support';

@injectable()
export class ReadPowertrainTelemetryUseCase
  extends PowertrainSerialGatewaySupport
  implements IReadPowertrainTelemetryUseCase
{
  async execute() {
    return await this.gateway.readPowertrainTelemetry();
  }
}
