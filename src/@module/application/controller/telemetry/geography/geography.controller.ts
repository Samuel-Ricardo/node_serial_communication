import { inject, injectable } from 'inversify';
import { Geography } from '../../../../domain/entity/telemetry/geography.entity';
import { IGeographyService } from '../../../../domain/service/telemetry/geography/geography.service';
import { MODULE } from '../../../../app.registry';

@injectable()
export class GeographyController {
  constructor(
    @inject(MODULE.APPLICATION.SERVICE.TELEMETRY.GEOGRAPHY)
    private readonly service: IGeographyService,
  ) {}

  async read(): Promise<Geography[]> {
    return await this.service.read();
  }
}
