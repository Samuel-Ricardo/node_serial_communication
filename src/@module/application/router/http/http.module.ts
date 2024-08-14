import { Container } from 'inversify';
import { HTTP_ROUTER_REGISTRY } from './http.registry';
import { EXPRESS_APP_ROUTER } from './express/app.router';
import { SERVER_MODULE } from '../../../infra/server/server.module';
import { EXPRESS_DOCS_ROUTER } from './express/docs.router';
import { DOCUMENTATION_MODULE } from '../../../infra/documentation/documentation.module';
import { EXPRESS_POWERTRAIN_ROUTER } from './express/telemetry/powertrain.router';
import { CONTROLLER_MODULE } from '../../controller/controller.module';
import { SSE_EXPRESS_POWERTRAIN_ROUTER } from './sse/express/telemetry/powertrain.router';
import { EXPRESS_BATTERY_ROUTER } from './express/telemetry/battery.router';
import { SSE_EXPRESS_BATTERY_ROUTER } from './sse/express/telemetry/battery.router';
import { EXPRESS_GEOGRAPHY_ROUTER } from './express/telemetry/geography.router';
import { SSE_EXPRESS_GEOGRAPHY_ROUTER } from './sse/express/telemetry/geography.router';
import { EXPRESS_GYROSCOPE_ROUTER } from './express/telemetry/gyroscope.router';
import { SSE_EXPRESS_GYROSCOPE_ROUTER } from './sse/express/telemetry/gyroscope.router';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const HTTP_ROUTER_MODULE = Container.merge(
  _MODULE,
  SERVER_MODULE,
  DOCUMENTATION_MODULE,
  CONTROLLER_MODULE,
);

HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.APP).toDynamicValue(
  EXPRESS_APP_ROUTER,
);

HTTP_ROUTER_MODULE.bind(HTTP_ROUTER_REGISTRY.EXPRESS.DOCS).toDynamicValue(
  EXPRESS_DOCS_ROUTER,
);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.EXPRESS.TELEMETRY.POWERTRAIN,
).toDynamicValue(EXPRESS_POWERTRAIN_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.EXPRESS.TELEMETRY.BATTERY,
).toDynamicValue(EXPRESS_BATTERY_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.EXPRESS.TELEMETRY.GEOGRAPHY,
).toDynamicValue(EXPRESS_GEOGRAPHY_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.EXPRESS.TELEMETRY.GYROSCOPE,
).toDynamicValue(EXPRESS_GYROSCOPE_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.SSE.EXPRESS.TELEMETRY.POWERTRAIN,
).toDynamicValue(SSE_EXPRESS_POWERTRAIN_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.SSE.EXPRESS.TELEMETRY.BATTERY,
).toDynamicValue(SSE_EXPRESS_BATTERY_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.SSE.EXPRESS.TELEMETRY.GEOGRAPHY,
).toDynamicValue(SSE_EXPRESS_GEOGRAPHY_ROUTER);

HTTP_ROUTER_MODULE.bind(
  HTTP_ROUTER_REGISTRY.SSE.EXPRESS.TELEMETRY.GYROSCOPE,
).toDynamicValue(SSE_EXPRESS_GYROSCOPE_ROUTER);
