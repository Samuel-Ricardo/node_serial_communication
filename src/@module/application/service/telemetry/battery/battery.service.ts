import { inject, injectable } from 'inversify';
import { IBatteryService } from '../../../../domain/service/telemetry/battery/batteey.service';
import { IReadBatteryTelemetryUseCase } from '../../../../domain/use_case/telemetry/battery/read_battery_telemetry.use_case';
import { MODULE } from '../../../../app.registry';

@injectable()
export class BatteryService implements IBatteryService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.TELEMETRY.BATTERY.READ)
    private readonly readTelemetry: IReadBatteryTelemetryUseCase,
  ) {}

  async read() {
    return await this.readTelemetry.execute();
  }
}
