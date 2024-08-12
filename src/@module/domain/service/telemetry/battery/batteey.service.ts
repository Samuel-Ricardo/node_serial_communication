import { Battery } from '../../../entity/telemetry/battery.entity';

export interface IBatteryService {
  read(): Promise<Battery[]>;
}
