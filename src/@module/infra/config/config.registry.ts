export const CONFIG_REGISTRY = {
  CONFIG: Symbol.for('MODULE::INFRA::CONFIG'),
  ENV: Symbol.for('MODULE::INFRA::CONFIG::ENV'),
  PORT: Symbol.for('MODULE::INFRA::CONFIG::PORT'),
  SERIAL: {
    PORT: Symbol.for('MODULE::INFRA::CONFIG::DATABASE::URL'),
    BAUD_RATE: Symbol.for('MODULE::INFRA::CONFIG::DATABASE::PORT'),
  },
};
