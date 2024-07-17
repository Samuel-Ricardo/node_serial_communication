export const HTTP_ROUTER_REGISTRY = {
  EXPRESS: {
    APP: Symbol.for('MODULE::APPLICATION::ROUTER::HTTP::EXPRESS::APP'),
    DOCS: Symbol.for('MODULE::APPLICATION::ROUTER::HTTP::EXPRESS::DOCS'),
    TELEMETRY: {
      POWERTRAIN: Symbol.for(
        'MODULE::APPLICATION::ROUTER::HTTP::EXPRESS::TELEMETRY::POWERTRAIN',
      ),
    },
  },
  SSE: {
    EXPRESS: {
      TELEMETRY: {
        POWERTRAIN: Symbol.for(
          'MODULE::APPLICATION::ROUTER::HTTP::SSE::EXPRESS::TELEMETRY::POWERTRAIN',
        ),
      },
    },
  },
};
