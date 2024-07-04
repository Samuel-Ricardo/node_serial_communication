import { Router } from 'express';
import { HTTP_ROUTER_MODULE } from './http.module';
import { HTTP_ROUTER_REGISTRY } from './http.registry';

export const HTTP_ROUTER_FACTORY = {
  APP: () => HTTP_ROUTER_MODULE.get<Router>(HTTP_ROUTER_REGISTRY.EXPRESS.APP),
};
