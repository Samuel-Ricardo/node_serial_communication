import { BatteryController } from './battery/battery.controller';
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
};
