import { Battery } from '../../../entity/telemetry/battery.entity';

export interface IReadBatteryTelemetryUseCase {
  execute(): Promise<Battery[]>;
}
