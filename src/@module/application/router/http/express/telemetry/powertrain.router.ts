import { interfaces } from 'inversify';
import { MODULE } from '../../../../../app.registry';
import { PowertrainController } from '../../../../controller/telemetry/powertrain/powertrain.controller';
import { Router } from 'express';
import { AppError } from '../../../../../../@lib/error/app.error';

export const EXPRESS_POWERTRAIN_ROUTER = ({
  container,
}: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);
  const CONTROLLER = container.get<PowertrainController>(
    MODULE.APPLICATION.CONTROLLER.TELEMETRY.POWERTRAIN,
  );
  const PREFIX = '/telemetry/powertrain';

  ROUTER.get('/telemetry/powertrain', async (req, res) => {
    try {
      return res.status(200).send(await CONTROLLER.getPowertrainTelemetry());
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.status).send(error);
      return res.status(500).send(error);
    }
  });

  return ROUTER;
};
