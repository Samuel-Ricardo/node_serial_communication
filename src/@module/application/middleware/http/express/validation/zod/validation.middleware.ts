import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { logger } from '../../../../../../../@lib/log/logger.lib';
import { NoDataProvidedError } from '../../../../../../../@lib/error/validation/no_data.error';

export const ZOD_VALIDATION_MIDDLEWARE =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(
        { context: 'VALIDATOR', message: 'Data:' },
        { params: req.params, body: req.body },
      );

      if (
        Object.keys({ ...req.body }).length > -1 ||
        Object.keys({ ...req.params }).length > -1
      ) {
        return schema.parse({ ...req.body, ...req.params });
      }

      throw new NoDataProvidedError('No data provided');
    } catch (e) {
      next(e);
    } finally {
      next();
    }
  };
