import { inject, injectable } from 'inversify';
import { IReadBatteryTelemetryUseCase } from '../../../../domain/use_case/telemetry/battery/read_battery_telemetry.use_case';
import { IBatteryGateway } from '../../../../domain/gateway/telemetry/battery/battery.gateway';
import { MODULE } from '../../../../app.registry';
import { BatterySerialGatewaySupport } from '../../../support/gateway/serial/telemetry/battery.support';

@injectable()
export class ReadBatteryTelemetryUseCase
  extends BatterySerialGatewaySupport
  implements IReadBatteryTelemetryUseCase
{
  async execute() {
    return await this.gateway.readBatteryTelemetry();
  }
}
