import { Container } from 'inversify';
import { TELEMETRY_USE_CASE_REGISTRY } from './telemetry.registry';
import { ReadPowertrainTelemetryUseCase } from './powertrain/read_powertrain_telemetry.use_case';

export const TELEMETRY_USE_CASE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

TELEMETRY_USE_CASE_MODULE.bind(TELEMETRY_USE_CASE_REGISTRY.POWERTRAIN.READ).to(
  ReadPowertrainTelemetryUseCase,
);
