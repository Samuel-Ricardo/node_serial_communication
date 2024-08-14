import { Gyroscope } from '../../../entity/telemetry/gyroscope.entity';

export interface IReadGyroscopeTelemetryUseCase {
  execute(): Promise<Gyroscope[]>;
}
