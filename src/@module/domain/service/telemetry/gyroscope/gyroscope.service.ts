import { Gyroscope } from '../../../entity/telemetry/gyroscope.entity';

export interface IGyroscopeService {
  readTelemetry(): Promise<Gyroscope[]>;
}
