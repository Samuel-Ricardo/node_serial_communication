export const TELEMETRY_CONTROLLER_REGISTRY = {
  POWERTRAIN: Symbol.for(
    'MODULE::APPLICATION::CONTROLLER::TELEMETRY::POWERTRAIN',
  ),
  BATTERY: Symbol.for('MODULE::APPLICATION::CONTROLLER::TELEMETRY::BATTERY'),
  GEOGRAPHY: Symbol.for(
    'MODULE::APPLICATION::CONTROLLER::TELEMETRY::GEOGRAPHY',
  ),
  GYROSCOPE: Symbol.for(
    'MODULE::APPLICATION::CONTROLLER::TELEMETRY::GYROSCOPE',
  ),
};
