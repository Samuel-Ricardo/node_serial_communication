import { Router } from 'express';
import { HTTP_ROUTER_MODULE } from './http.module';
import { HTTP_ROUTER_REGISTRY } from './http.registry';

export const HTTP_ROUTER_FACTORY = {
  EXPRESS: {
    APP: () => HTTP_ROUTER_MODULE.get<Router>(HTTP_ROUTER_REGISTRY.EXPRESS.APP),
    DOCS: () =>
      HTTP_ROUTER_MODULE.get<Router>(HTTP_ROUTER_REGISTRY.EXPRESS.DOCS),
    TELEMETRY: {
      POWERTRAIN: () =>
        HTTP_ROUTER_MODULE.get<Router>(
          HTTP_ROUTER_REGISTRY.EXPRESS.TELEMETRY.POWERTRAIN,
        ),
    },
  },
  SSE: {
    EXPRESS: {
      TELEMETRY: {
        POWERTRAIN: () =>
          HTTP_ROUTER_MODULE.get<Router>(
            HTTP_ROUTER_REGISTRY.SSE.EXPRESS.TELEMETRY.POWERTRAIN,
          ),
      },
    },
  },
};
