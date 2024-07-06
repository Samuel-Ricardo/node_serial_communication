import { Container } from 'inversify';
//import { SERIAL_GATEWAY_MODULE } from './serial/serial.module';

import lazy from 'inversify-inject-decorators';
import { SERIAL_TELEMETRY_GATEWAY_MODULE } from './telemetry/telemetry.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const GATEWAY_MODULE = Container.merge(
  _MODULE,
  //  SERIAL_GATEWAY_MODULE,
  SERIAL_TELEMETRY_GATEWAY_MODULE,
);

export const { lazyInject: injectGateway } = lazy(GATEWAY_MODULE);
