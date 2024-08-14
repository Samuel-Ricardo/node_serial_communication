import { injectable } from 'inversify';
import { IReadGyroscopeTelemetryUseCase } from '../../../../domain/use_case/telemetry/gyroscope/read_gyroscope_telemetry.use_case';
import { GyroscopeSerialPortGatewaySupport } from '../../../support/gateway/serial/telemetry/gyroscope.support';

@injectable()
export class ReadGyroscopeTelemetryUseCase
  extends GyroscopeSerialPortGatewaySupport
  implements IReadGyroscopeTelemetryUseCase
{
  async execute() {
    return await this.gateway.readGyroscopeTelemetry();
  }
}
