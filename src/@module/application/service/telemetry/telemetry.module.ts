import { Container } from 'inversify';
import { USE_CASE_MODULE } from '../../use_case/use_case.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const TELEMETRY_SERVICE_MODULE = Container.merge(
  _MODULE,
  USE_CASE_MODULE,
);
