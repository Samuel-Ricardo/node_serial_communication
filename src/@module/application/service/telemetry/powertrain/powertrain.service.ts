import { inject, injectable } from 'inversify';
import { IPowertrainService } from '../../../../domain/service/telemetry/powertrain/powertrain.service';
import { ReadPowertrainTelemetryUseCase } from '../../../use_case/telemetry/powertrain/read_powertrain_telemetry.use_case';
import { MODULE } from '../../../../app.registry';

@injectable()
export class PowertrainService implements IPowertrainService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.TELEMETRY.POWERTRAIN.READ)
    private readonly readTelemetry: ReadPowertrainTelemetryUseCase,
  ) {}

  async read() {
    return await this.readTelemetry.execute();
  }
}
