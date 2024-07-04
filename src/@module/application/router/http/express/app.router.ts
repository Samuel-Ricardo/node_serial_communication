import { MODULE } from '../../../../app.registry';
import { Router } from 'express';
import { interfaces } from 'inversify';

export const EXPRESS_APP_ROUTER = ({ container }: interfaces.Context) => {
  const APP_ROUTER = container.get<Router>(
    MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER,
  );

  APP_ROUTER.get('/', (req, res, next) => {
    try {
      return res.send({ data: 'Hello World! :D' });
    } catch (error) {
      next(error);
    }
  });

  return APP_ROUTER;
};
