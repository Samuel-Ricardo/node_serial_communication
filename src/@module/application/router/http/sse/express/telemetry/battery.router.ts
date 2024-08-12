import { Router } from 'express';
import { interfaces } from 'inversify';
import { MODULE } from '../../../../../../app.registry';
import { BatteryController } from '../../../../../controller/telemetry/battery/battery.controller';
import { AppError } from '../../../../../../../@lib/error/app.error';

export const SSE_EXPRESS_POWERTRAIN_ROUTER = ({
  container,
}: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);
  const CONTROLLER = container.get<BatteryController>(
    MODULE.APPLICATION.CONTROLLER.TELEMETRY.BATTERY,
  );
  const PREFIX = '/telemetry/battery';

  ROUTER.get('/telemetry/battery/stream', async (req, res) => {
    try {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      });

      const interval = setInterval(
        async () =>
          res.write(
            `data: ${JSON.stringify(await CONTROLLER.getBatteryTelemetry())} \n\n`,
          ),
        ENV.TELEMETRY.REFRESH_RATE,
      );

      req.on('close', () => {
        clearInterval(interval);
        res.end();
      });
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.status).send(error);
      return res.status(500).send(error);
    }
  });

  return ROUTER;
};
