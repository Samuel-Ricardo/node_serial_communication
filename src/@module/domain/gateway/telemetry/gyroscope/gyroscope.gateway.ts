import { Gyroscope } from '../../../entity/telemetry/gyroscope.entity';

export interface IGyroscopeGateway {
  readGyroscopeTelemetry(): Promise<Gyroscope[]>;
}
