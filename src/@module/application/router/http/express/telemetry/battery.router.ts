import { Router } from 'express';
import { interfaces } from 'inversify';
import { MODULE } from '../../../../../app.registry';
import { BatteryController } from '../../../../controller/telemetry/battery/battery.controller';
import { AppError } from '../../../../../../@lib/error/app.error';

export const EXPRESS_BATTERY_ROUTER = ({ container }: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);
  const CONTROLLER = container.get<BatteryController>(
    MODULE.APPLICATION.CONTROLLER.TELEMETRY.BATTERY,
  );
  const PREFIX = '/telemetry/battery';

  ROUTER.get('/telemetry/battery', async (req, res) => {
    try {
      return res.status(200).send(await CONTROLLER.getBatteryTelemetry());
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.status).send(error);
      return res.status(500).send(error);
    }
  });

  return ROUTER;
};
