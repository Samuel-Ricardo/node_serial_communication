import { CONFIG_TYPE } from '../../../@types/module/infra/config/app/config.type';
import { ENV_TYPE } from '../../../@types/module/infra/config/env/config.type';
import { CONFIG_MODULE } from './config.module';
import { CONFIG_REGISTRY } from './config.registry';

export const CONFIG_FACTORY = {
  CONFIG: CONFIG_MODULE.get<CONFIG_TYPE>(CONFIG_REGISTRY.CONFIG),
  ENV: CONFIG_MODULE.get<ENV_TYPE>(CONFIG_REGISTRY.ENV),
  PORT: CONFIG_MODULE.get<number>(CONFIG_REGISTRY.PORT),
  SERIAL: {
    PORT: CONFIG_MODULE.get<number>(CONFIG_REGISTRY.SERIAL.PORT),
    BAUD_RATE: CONFIG_MODULE.get<string | undefined>(
      CONFIG_REGISTRY.SERIAL.BAUD_RATE,
    ),
  },
};
