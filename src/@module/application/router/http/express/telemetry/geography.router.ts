import { Router } from 'express';
import { interfaces } from 'inversify';
import { AppError } from '../../../../../../@lib/error/app.error';
import { MODULE } from '../../../../../app.registry';
import { GeographyController } from '../../../../controller/telemetry/geography/geography.controller';

export const EXPRESS_GEOGRAPHY_ROUTER = ({ container }: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);
  const CONTROLLER = container.get<GeographyController>(
    MODULE.APPLICATION.CONTROLLER.TELEMETRY.GEOGRAPHY,
  );
  const PREFIX = '/telemetry/geography';

  ROUTER.get('/telemetry/geography', async (req, res) => {
    try {
      return res.status(200).send(await CONTROLLER.getTelemetry());
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.status).send(error);
      return res.status(500).send(error);
    }
  });

  return ROUTER;
};
