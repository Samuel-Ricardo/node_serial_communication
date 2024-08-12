import { Battery } from '../../../entity/telemetry/battery.entity';

export interface IBatteryGateway {
  readBatteryTelemetry(): Promise<Battery[]>;
}
