import { Container } from 'inversify';
import { EXPRESS_CORS } from './express/express.cors';
import { EXPRESS_ROUTER } from './express/express.router';
import { EXPRESS_BODY_PARSER } from './express/parser/body.parser';
import { HTTP_SERVER_ENGINE_REGISTRY } from './http.registry';
import { EXPRESS_SERVER } from './express/express.server';

export const HTTP_SERVER_ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

HTTP_SERVER_ENGINE_MODULE.bind(
  HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.APP,
).toConstantValue(EXPRESS_SERVER);

HTTP_SERVER_ENGINE_MODULE.bind(
  HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.PARSER.BODY,
).toConstantValue(EXPRESS_BODY_PARSER);

HTTP_SERVER_ENGINE_MODULE.bind(
  HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.CORS,
).toConstantValue(EXPRESS_CORS);

HTTP_SERVER_ENGINE_MODULE.bind(
  HTTP_SERVER_ENGINE_REGISTRY.EXPRESS.ROUTER,
).toConstantValue(EXPRESS_ROUTER);
