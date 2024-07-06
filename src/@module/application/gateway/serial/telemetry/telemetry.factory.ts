import { IPowertrainGateway } from '../../../../domain/gateway/telemetry/powertrain/powertrain.gateway';
import { SERIAL_TELEMETRY_GATEWAY_MODULE } from './telemetry.module';
import { SERIAL_TELEMETRY_GATEWAY_REGISTRY } from './telemetry.registy';

export const SERIAL_TELEMETRY_GATEWAY_FACTORY = {
  POWERTRAIN: () =>
    SERIAL_TELEMETRY_GATEWAY_MODULE.get<IPowertrainGateway>(
      SERIAL_TELEMETRY_GATEWAY_REGISTRY.POWERTRAIN,
    ),
};
