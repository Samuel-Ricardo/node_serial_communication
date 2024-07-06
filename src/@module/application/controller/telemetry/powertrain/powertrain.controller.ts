import { inject, injectable } from 'inversify';
import { IPowertrainService } from '../../../../domain/service/telemetry/powertrain/powertrain.service';
import { MODULE } from '../../../../app.registry';

@injectable()
export class PowertrainController {
  constructor(
    @inject(MODULE.APPLICATION.SERVICE.TELEMETRY.POWERTRAIN)
    private readonly service: IPowertrainService,
  ) {}

  async getPowertrainTelemetry() {
    const powertrain = (await this.service.read()).toDTO();
    return { powertrain };
  }
}
