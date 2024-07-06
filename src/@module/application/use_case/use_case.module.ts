import { Container } from 'inversify';
import { TELEMETRY_USE_CASE_MODULE } from './telemetry/telemetry.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const USE_CASE_MODULE = Container.merge(
  _MODULE,
  TELEMETRY_USE_CASE_MODULE,
);
