import { inject, injectable } from 'inversify';
import { IReadBatteryTelemetryUseCase } from '../../../../domain/use_case/telemetry/battery/read_battery_telemetry.use_case';
import { IBatteryGateway } from '../../../../domain/gateway/telemetry/battery/battery.gateway';
import { MODULE } from '../../../../app.registry';

@injectable()
export class ReadBatteryTelemetryUseCase
  implements IReadBatteryTelemetryUseCase
{
  constructor(
    @inject(MODULE.APPLICATION.GATEWAY.TELEMETRY.BATTERY)
    private readonly gateway: IBatteryGateway,
  ) {}

  async execute() {
    return await this.gateway.readBatteryTelemetry();
  }
}
