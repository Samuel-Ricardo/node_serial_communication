import { Container } from 'inversify';
import { TELEMETRY_USE_CASE_MODULE } from './telemetry/telemetry.module';

import lazy from 'inversify-inject-decorators';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const USE_CASE_MODULE = Container.merge(
  _MODULE,
  TELEMETRY_USE_CASE_MODULE,
);

export const { lazyInject: injectUseCase } = lazy(USE_CASE_MODULE);
