import { Router } from 'express';
import { interfaces } from 'inversify';
import { AppError } from '../../../../../../@lib/error/app.error';
import { MODULE } from '../../../../../app.registry';
import { GyroscopeController } from '../../../../controller/telemetry/gyroscope/gyroscope.controller';

export const EXPRESS_GYROSCOPE_ROUTER = ({ container }: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);
  const CONTROLLER = container.get<GyroscopeController>(
    MODULE.APPLICATION.CONTROLLER.TELEMETRY.GEOGRAPHY,
  );
  const PREFIX = '/telemetry/gyroscope';

  ROUTER.get('/telemetry/gyroscope', async (req, res) => {
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
