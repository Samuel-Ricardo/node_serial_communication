import { IReadBatteryTelemetryUseCase } from '../../../domain/use_case/telemetry/battery/read_battery_telemetry.use_case';
import { IReadPowertrainTelemetryUseCase } from '../../../domain/use_case/telemetry/powertrain/read_powertrain_telemetry.use_case';
import { TELEMETRY_USE_CASE_MODULE } from './telemetry.module';
import { TELEMETRY_USE_CASE_REGISTRY } from './telemetry.registry';

export const TELEMETRY_USE_CASE_FACTORY = {
  POWERTRAIN: {
    READ: () =>
      TELEMETRY_USE_CASE_MODULE.get<IReadPowertrainTelemetryUseCase>(
        TELEMETRY_USE_CASE_REGISTRY.POWERTRAIN.READ,
      ),
  },

  BATTERY: {
    READ: () =>
      TELEMETRY_USE_CASE_MODULE.get<IReadBatteryTelemetryUseCase>(
        TELEMETRY_USE_CASE_REGISTRY.BATTERY.READ,
      ),
  },
};
