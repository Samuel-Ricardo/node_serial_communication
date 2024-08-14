import { Container } from 'inversify';
import { SERVICE_MODULE } from '../../service/service.module';
import { TELEMETRY_CONTROLLER_REGISTRY } from './telemetry.registry';
import { PowertrainController } from './powertrain/powertrain.controller';
import { BatteryController } from './battery/battery.controller';
import { GeographyController } from './geography/geography.controller';
import { GyroscopeController } from './gyroscope/gyroscope.controller';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const TELEMETRY_CONTROLLER_MODULE = Container.merge(
  _MODULE,
  SERVICE_MODULE,
);

TELEMETRY_CONTROLLER_MODULE.bind(TELEMETRY_CONTROLLER_REGISTRY.POWERTRAIN).to(
  PowertrainController,
);

TELEMETRY_CONTROLLER_MODULE.bind(TELEMETRY_CONTROLLER_REGISTRY.BATTERY).to(
  BatteryController,
);

TELEMETRY_CONTROLLER_MODULE.bind(TELEMETRY_CONTROLLER_REGISTRY.GEOGRAPHY).to(
  GeographyController,
);

TELEMETRY_CONTROLLER_MODULE.bind(TELEMETRY_CONTROLLER_REGISTRY.GYROSCOPE).to(
  GyroscopeController,
);
