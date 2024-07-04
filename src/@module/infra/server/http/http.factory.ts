import { Express, Router } from 'express';
import { EXPRESS_CORS_TYPE } from '../../../../@types/module/infra/server/http/express/cors.type';
import { EXPRESS_BODY_PARSER_TYPE } from '../../../../@types/module/infra/server/http/express/parser/body.type';
import { HTTP_SERVER_MODULE } from './http.module';
import { HTTP_SERVER_REGISTRY } from './http.registry';

export const HTTP_SERVER_FACTORY = {
  EXPRESS: {
    APP: () =>
      HTTP_SERVER_MODULE.get<Express>(HTTP_SERVER_REGISTRY.EXPRESS.APP),
    CORS: () =>
      HTTP_SERVER_MODULE.get<EXPRESS_CORS_TYPE>(
        HTTP_SERVER_REGISTRY.EXPRESS.CORS,
      ),
    ROUTER: () =>
      HTTP_SERVER_MODULE.get<Router>(HTTP_SERVER_REGISTRY.EXPRESS.ROUTER),
    PARSER: {
      BODY: () =>
        HTTP_SERVER_MODULE.get<EXPRESS_BODY_PARSER_TYPE>(
          HTTP_SERVER_REGISTRY.EXPRESS.PARSER.BODY,
        ),
    },
  },
};
