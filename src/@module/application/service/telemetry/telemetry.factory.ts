import { IBatteryService } from '../../../domain/service/telemetry/battery/batteey.service';
import { IGeographyService } from '../../../domain/service/telemetry/geography/geography.service';
import { IPowertrainService } from '../../../domain/service/telemetry/powertrain/powertrain.service';
import { TELEMETRY_SERVICE_MODULE } from './telemetry.module';
import { TELEMETRY_SERVICE_REGISTRY } from './telemetry.registry';

export const TELEMETRY_SERVICE_FACTORY = {
  POWERTRAIN: () =>
    TELEMETRY_SERVICE_MODULE.get<IPowertrainService>(
      TELEMETRY_SERVICE_REGISTRY.POWERTRAIN,
    ),

  BATTERY: () =>
    TELEMETRY_SERVICE_MODULE.get<IBatteryService>(
      TELEMETRY_SERVICE_REGISTRY.BATTERY,
    ),

  GEOGRAPHY: () =>
    TELEMETRY_SERVICE_MODULE.get<IGeographyService>(
      TELEMETRY_SERVICE_REGISTRY.GEOGRAPHY,
    ),
};
