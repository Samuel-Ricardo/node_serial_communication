import { Powertrain } from '../../../entity/telemetry/powertrain.entity';

export interface IPowertrainGateway {
  readPowertrainTelemetry(): Promise<Powertrain>;
}
