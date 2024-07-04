import { ErrorRequestHandler, RequestHandler } from 'express';
import { EXPRESS_HTTP_MIDDLEWARE_MODULE } from './express.module';
import { EXPRESS_HTTP_MIDDLEWARE_REGISTRY } from './express.registry';

export const EXPRESS_HTTP_MIDDLEWARE_FACTORY = {
  ERROR: EXPRESS_HTTP_MIDDLEWARE_MODULE.get<ErrorRequestHandler>(
    EXPRESS_HTTP_MIDDLEWARE_REGISTRY.ERROR,
  ),
  LOGGER: {
    APP: EXPRESS_HTTP_MIDDLEWARE_MODULE.get<RequestHandler>(
      EXPRESS_HTTP_MIDDLEWARE_REGISTRY.LOGGER.APP,
    ),
    ERROR: EXPRESS_HTTP_MIDDLEWARE_MODULE.get<ErrorRequestHandler>(
      EXPRESS_HTTP_MIDDLEWARE_REGISTRY.LOGGER.ERROR,
    ),
  },
};
