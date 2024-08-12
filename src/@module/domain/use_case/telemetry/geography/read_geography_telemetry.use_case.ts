import { Geography } from '../../../entity/telemetry/geography.entity';

export interface IReadGeographyTelemetryUseCase {
  execute(): Promise<Geography[]>;
}
