export const EXPRESS_HTTP_MIDDLEWARE_REGISTRY = {
  ERROR: Symbol('MODULE::APPLICATION::MIDDLEWARE::HTTP::EXPRESS::ERROR'),
  LOGGER: {
    APP: Symbol('MODULE::APPLICATION::MIDDLEWARE::HTTP::EXPRESS::LOGGER::APP'),
    ERROR: Symbol(
      'MODULE::APPLICATION::MIDDLEWARE::HTTP::EXPRESS::LOGGER::ERROR',
    ),
  },
  VALIDATOR: {
    ZOD: Symbol(
      'MODULE::APPLICATION::MIDDLEWARE::HTTP::EXPRESS::VALIDATOR::ZOD',
    ),
  },
};
