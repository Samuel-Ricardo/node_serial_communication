import { IBatteryGateway } from '../../../domain/gateway/telemetry/battery/battery.gateway';
import { IGeographyGateway } from '../../../domain/gateway/telemetry/geography/geography.gateway';
import { IPowertrainGateway } from '../../../domain/gateway/telemetry/powertrain/powertrain.gateway';
import { SERIAL_TELEMETRY_GATEWAY_MODULE } from './telemetry.module';
import { SERIAL_TELEMETRY_GATEWAY_REGISTRY } from './telemetry.registy';

export const SERIAL_TELEMETRY_GATEWAY_FACTORY = {
  POWERTRAIN: () =>
    SERIAL_TELEMETRY_GATEWAY_MODULE.get<IPowertrainGateway>(
      SERIAL_TELEMETRY_GATEWAY_REGISTRY.POWERTRAIN,
    ),

  BATTERY: () =>
    SERIAL_TELEMETRY_GATEWAY_MODULE.get<IBatteryGateway>(
      SERIAL_TELEMETRY_GATEWAY_REGISTRY.BATTERY,
    ),

  GEOGRAPHY: () =>
    SERIAL_TELEMETRY_GATEWAY_MODULE.get<IGeographyGateway>(
      SERIAL_TELEMETRY_GATEWAY_REGISTRY.GEOGRAPHY,
    ),
};
