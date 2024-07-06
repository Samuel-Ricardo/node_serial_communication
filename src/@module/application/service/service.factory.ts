import { IPowertrainService } from '../../domain/service/telemetry/powertrain/powertrain.service';
import { TELEMETRY_SERVICE_MODULE } from './telemetry/telemetry.module';
import { TELEMETRY_SERVICE_REGISTRY } from './telemetry/telemetry.registry';

export const TELEMETRY_SERVICE_FACTORY = {
  POWERTRAIN: () =>
    TELEMETRY_SERVICE_MODULE.get<IPowertrainService>(
      TELEMETRY_SERVICE_REGISTRY.POWERTRAIN,
    ),
};
