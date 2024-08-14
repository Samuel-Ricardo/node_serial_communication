import { BatteryController } from './battery/battery.controller';
import { GeographyController } from './geography/geography.controller';
import { GyroscopeController } from './gyroscope/gyroscope.controller';
import { PowertrainController } from './powertrain/powertrain.controller';
import { TELEMETRY_CONTROLLER_MODULE } from './telemetry.module';
import { TELEMETRY_CONTROLLER_REGISTRY } from './telemetry.registry';

export const TELEMETRY_CONTROLLER_FACTORY = {
  POWERTRAIN: () =>
    TELEMETRY_CONTROLLER_MODULE.get<PowertrainController>(
      TELEMETRY_CONTROLLER_REGISTRY.POWERTRAIN,
    ),

  BATTERY: () =>
    TELEMETRY_CONTROLLER_MODULE.get<BatteryController>(
      TELEMETRY_CONTROLLER_REGISTRY.BATTERY,
    ),

  GEOGRAPHY: () =>
    TELEMETRY_CONTROLLER_MODULE.get<GeographyController>(
      TELEMETRY_CONTROLLER_REGISTRY.GEOGRAPHY,
    ),

  GYROSCOPE: () =>
    TELEMETRY_CONTROLLER_MODULE.get<GyroscopeController>(
      TELEMETRY_CONTROLLER_REGISTRY.GYROSCOPE,
    ),
};
