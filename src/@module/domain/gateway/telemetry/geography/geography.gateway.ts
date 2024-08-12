import { Geography } from '../../../entity/telemetry/geography.entity';

export interface IGeographyGateway {
  readGeographyTelemetry(): Promise<Geography[]>;
}
