import { inject, injectable } from 'inversify';
import { IGeographyService } from '../../../../domain/service/telemetry/geography/geography.service';
import { MODULE } from '../../../../app.registry';
import { IReadGeographyTelemetryUseCase } from '../../../../domain/use_case/telemetry/geography/read_geography_telemetry.use_case';
import { Geography } from '../../../../domain/entity/telemetry/geography.entity';

@injectable()
export class GeographyService implements IGeographyService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.TELEMETRY.GEOGRAPHY.READ)
    private readonly readTelemetry: IReadGeographyTelemetryUseCase,
  ) {}

  async read(): Promise<Geography[]> {
    return await this.readTelemetry.execute();
  }
}
