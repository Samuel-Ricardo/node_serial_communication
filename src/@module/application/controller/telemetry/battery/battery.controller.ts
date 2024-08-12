import { inject, injectable } from 'inversify';
import { IBatteryService } from '../../../../domain/service/telemetry/battery/batteey.service';
import { MODULE } from '../../../../app.registry';

@injectable()
export class BatteryController {
  constructor(
    @inject(MODULE.APPLICATION.SERVICE.TELEMETRY.BATTERY)
    private readonly service: IBatteryService,
  ) {}

  async getBatteryTelemetry() {
    const battery = (await this.service.read()).map((s) => s.toDTO());
    return { battery };
  }
}
