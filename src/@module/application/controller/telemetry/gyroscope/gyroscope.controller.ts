import { inject, injectable } from 'inversify';
import { IGyroscopeService } from '../../../../domain/service/telemetry/gyroscope/gyroscope.service';
import { MODULE } from '../../../../app.registry';

@injectable()
export class GyroscopeController {
  constructor(
    @inject(MODULE.APPLICATION.SERVICE.TELEMETRY.GYROSCOPE)
    private readonly service: IGyroscopeService,
  ) {}

  async getTelemetry() {
    const gyroscope = (await this.service.read()).map((s) => s.toDTO());
    return { gyroscope };
  }
}
