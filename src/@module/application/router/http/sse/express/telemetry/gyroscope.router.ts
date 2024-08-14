import { Router } from 'express';
import { interfaces } from 'inversify';
import { AppError } from '../../../../../../../@lib/error/app.error';
import { MODULE } from '../../../../../../app.registry';
import { ENV } from '../../../../../../infra/config/env/env.config';
import { GyroscopeController } from '../../../../../controller/telemetry/gyroscope/gyroscope.controller';

export const SSE_EXPRESS_GYROSCOPE_ROUTER = ({
  container,
}: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);
  const CONTROLLER = container.get<GyroscopeController>(
    MODULE.APPLICATION.CONTROLLER.TELEMETRY.GEOGRAPHY,
  );
  const PREFIX = '/telemetry/gyroscope';

  //  ROUTER.get(`${PREFIX}/stream`, async (req, res) => {
  ROUTER.get('/telemetry/gyroscope/stream', async (req, res) => {
    try {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      });
      const interval = setInterval(
        async () =>
          res.write(
            `data: ${JSON.stringify(await CONTROLLER.getTelemetry())} \n\n`,
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
