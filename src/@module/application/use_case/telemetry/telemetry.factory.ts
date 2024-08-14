import { IReadBatteryTelemetryUseCase } from '../../../domain/use_case/telemetry/battery/read_battery_telemetry.use_case';
import { IReadGeographyTelemetryUseCase } from '../../../domain/use_case/telemetry/geography/read_geography_telemetry.use_case';
import { IReadGyroscopeTelemetryUseCase } from '../../../domain/use_case/telemetry/gyroscope/read_gyroscope_telemetry.use_case';
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

  GEOGRAPHY: {
    READ: () =>
      TELEMETRY_USE_CASE_MODULE.get<IReadGeographyTelemetryUseCase>(
        TELEMETRY_USE_CASE_REGISTRY.GEOGRAPHY.READ,
      ),
  },

  GYROSCOPE: {
    READ: () =>
      TELEMETRY_USE_CASE_MODULE.get<IReadGyroscopeTelemetryUseCase>(
        TELEMETRY_USE_CASE_REGISTRY.GYROSCOPE.READ,
      ),
  },
};
