import { Container } from 'inversify';
import { EXPRESS_HTTP_MIDDLEWARE_REGISTRY } from './express.registry';
import { ERROR_MIDDLEWARE } from './error/error.middleware';
import { LOGGER_MIDDLEWARE } from './log/logger.middleware';
import { ERROR_LOGGER_MIDDLEWARE } from './log/error/logger.middleware';
import { ZOD_VALIDATION_MIDDLEWARE } from './validation/zod/validation.middleware';

export const EXPRESS_HTTP_MIDDLEWARE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.ERROR,
).toConstantValue(ERROR_MIDDLEWARE);

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.LOGGER.APP,
).toConstantValue(LOGGER_MIDDLEWARE);

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.LOGGER.ERROR,
).toConstantValue(ERROR_LOGGER_MIDDLEWARE);

EXPRESS_HTTP_MIDDLEWARE_MODULE.bind(
  EXPRESS_HTTP_MIDDLEWARE_REGISTRY.VALIDATOR.ZOD,
).toConstantValue(ZOD_VALIDATION_MIDDLEWARE);
