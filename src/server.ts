import { logger } from './@lib/log/logger.lib';
import { ENV } from './@module/infra/config/env/env.config';
import { APP } from './app';

APP.listen(ENV.PORT, () =>
  logger.info(
    { context: 'SERVER', message: 'Server started' },
    { url: `http://localhost:${ENV.PORT}`, port: ENV.PORT },
  ),
);
