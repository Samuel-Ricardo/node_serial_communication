import { APPLICATION_MODULE } from './application/application.module';
import { INFRA_FACTORY } from './infra/infra.factory';

export const MODULES = {
  INFRA: INFRA_FACTORY,
  APPLICATION: APPLICATION_MODULE,
};
