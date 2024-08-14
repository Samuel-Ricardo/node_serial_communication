import { inject, injectable } from 'inversify';
import { IGyroscopeService } from '../../../../domain/service/telemetry/gyroscope/gyroscope.service';
import { IReadGyroscopeTelemetryUseCase } from '../../../../domain/use_case/telemetry/gyroscope/read_gyroscope_telemetry.use_case';
import { MODULE } from '../../../../app.registry';

@injectable()
export class GyroscopeService implements IGyroscopeService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.TELEMETRY.GYROSCOPE.READ)
    private readonly readTelemetry: IReadGyroscopeTelemetryUseCase,
  ) {}

  async read() {
    return await this.readTelemetry.execute();
  }
}
