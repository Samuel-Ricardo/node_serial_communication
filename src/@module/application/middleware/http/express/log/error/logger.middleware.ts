import { ErrorRequestHandler } from 'express';
import { logger } from '../../../../../../../@lib/log/logger.lib';

export const ERROR_LOGGER_MIDDLEWARE: ErrorRequestHandler = (
  err: Error,
  req,
  res,
  next,
) => {
  logger.error({ context: 'APP', message: err.message, error: err });
  next(err);
};
