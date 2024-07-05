import { IDocumentation } from './documentation.interface';
import { DOCUMENTATION_MODULE } from './documentation.module';
import { DOCUMETNATION_REGISTRY } from './documentation.registry';
import { SwaggerDocumentation } from './swagger/swagger.docs';

export const DOCUMENTATION_FACTORY = {
  SWAGGER: () =>
    DOCUMENTATION_MODULE.get<SwaggerDocumentation>(
      DOCUMETNATION_REGISTRY.SWAGGER,
    ),
};
