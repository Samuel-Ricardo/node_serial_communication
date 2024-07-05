import { Router, RequestHandler } from 'express';
import { interfaces } from 'inversify';
import { MODULE } from '../../../../app.registry';
import { IDocumentation } from '../../../../infra/documentation/documentation.interface';

export const EXPRESS_DOCS_ROUTER = ({ container }: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.SERVER.HTTP.EXPRESS.ROUTER);

  const DOCS = container.get<IDocumentation<RequestHandler, RequestHandler>>(
    MODULE.INFRA.DOCS.SWAGGER,
  );

  ROUTER.use('/api/docs', DOCS.server(), DOCS.setup());

  return ROUTER;
};
