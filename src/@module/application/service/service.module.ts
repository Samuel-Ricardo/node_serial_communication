import { Container } from 'inversify';
import { TELEMETRY_SERVICE_MODULE } from './telemetry/telemetry.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const SERVICE_MODULE = Container.merge(
  _MODULE,
  TELEMETRY_SERVICE_MODULE,
);
