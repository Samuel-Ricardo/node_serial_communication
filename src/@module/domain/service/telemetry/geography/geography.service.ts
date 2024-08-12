import { Geography } from '../../../entity/telemetry/geography.entity';

export interface IGeographyService {
  read(): Promise<Geography[]>;
}
