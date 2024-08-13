import { Container } from 'inversify';
import { TELEMETRY_USE_CASE_REGISTRY } from './telemetry.registry';
import { ReadPowertrainTelemetryUseCase } from './powertrain/read_powertrain_telemetry.use_case';
import { ReadBatteryTelemetryUseCase } from './battery/read_battery_telemetry.use_case';
import { ReadGeographyTelemetryUseCase } from './geography/read/telemetry/geography.use_case';

export const TELEMETRY_USE_CASE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

TELEMETRY_USE_CASE_MODULE.bind(TELEMETRY_USE_CASE_REGISTRY.POWERTRAIN.READ).to(
  ReadPowertrainTelemetryUseCase,
);

TELEMETRY_USE_CASE_MODULE.bind(TELEMETRY_USE_CASE_REGISTRY.BATTERY.READ).to(
  ReadBatteryTelemetryUseCase,
);

TELEMETRY_USE_CASE_MODULE.bind(TELEMETRY_USE_CASE_REGISTRY.GEOGRAPHY.READ).to(
  ReadGeographyTelemetryUseCase,
);
