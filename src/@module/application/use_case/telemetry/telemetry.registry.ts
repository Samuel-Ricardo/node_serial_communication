export const TELEMETRY_USE_CASE_REGISTRY = {
  POWERTRAIN: {
    READ: Symbol.for(
      'MODULE::APPLICATION::USE_CASE::TELEMETRY::POWERTRAIN::READ',
    ),
  },
  BATTERY: {
    READ: Symbol.for('MODULE::APPLICATION::USE_CASE::TELEMETRY::BATTERY::READ'),
  },
  GEOGRAPHY: {
    READ: Symbol.for(
      'MODULE::APPLICATION::USE_CASE::TELEMETRY::GEOGRAPHY::READ',
    ),
  },
  GYROSCOPE: {
    READ: Symbol.for(
      'MODULE::APPLICATION::USE_CASE::TELEMETRY::GYROSCOPE::READ',
    ),
  },
};
