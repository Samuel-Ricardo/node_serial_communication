import { Powertrain } from '../../../entity/telemetry/powertrain.entity';

export interface IReadPowertrainTelemetryUseCase {
  execute(): Promise<Powertrain>;
}
