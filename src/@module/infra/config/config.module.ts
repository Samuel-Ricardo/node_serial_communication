import { Container } from 'inversify';
import { CONFIG_REGISTRY } from './config.registry';
import { CONFIG } from './app/app.config';

export const CONFIG_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

CONFIG_MODULE.bind(CONFIG_REGISTRY.CONFIG).toConstantValue(CONFIG);
CONFIG_MODULE.bind(CONFIG_REGISTRY.ENV).toConstantValue(CONFIG.ENV);
CONFIG_MODULE.bind(CONFIG_REGISTRY.PORT).toConstantValue(CONFIG.ENV.PORT);

CONFIG_MODULE.bind(CONFIG_REGISTRY.SERIAL.BAUD_RATE).toConstantValue(
  CONFIG.ENV.SERIAL.BAUD_RATE,
);

CONFIG_MODULE.bind(CONFIG_REGISTRY.SERIAL.PORT).toConstantValue(
  CONFIG.ENV.SERIAL.PORT,
);
