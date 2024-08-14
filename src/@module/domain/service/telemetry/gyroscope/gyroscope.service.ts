import { Gyroscope } from '../../../entity/telemetry/gyroscope.entity';

export interface IGyroscopeService {
  read(): Promise<Gyroscope[]>;
}
