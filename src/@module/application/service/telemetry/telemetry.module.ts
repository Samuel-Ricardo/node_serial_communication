import { Container } from 'inversify';
import { USE_CASE_MODULE } from '../../use_case/use_case.module';
import { TELEMETRY_SERVICE_REGISTRY } from './telemetry.registry';
import { PowertrainService } from './powertrain/powertrain.service';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const TELEMETRY_SERVICE_MODULE = Container.merge(
  _MODULE,
  USE_CASE_MODULE,
);

TELEMETRY_SERVICE_MODULE.bind(TELEMETRY_SERVICE_REGISTRY.POWERTRAIN).to(
  PowertrainService,
);
