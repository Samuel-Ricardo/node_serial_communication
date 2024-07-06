import { Container } from 'inversify';
import { TELEMETRY_CONTROLLER_MODULE } from './telemetry/telemetry.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const CONTROLLER_MODULE = Container.merge(
  _MODULE,
  TELEMETRY_CONTROLLER_MODULE,
);
