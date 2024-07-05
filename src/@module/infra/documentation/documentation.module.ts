import { Container } from 'inversify';
import { DOCUMETNATION_REGISTRY } from './documentation.registry';
import { SwaggerDocumentation } from './swagger/swagger.docs';

export const DOCUMENTATION_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

DOCUMENTATION_MODULE.bind(DOCUMETNATION_REGISTRY.SWAGGER).to(
  SwaggerDocumentation,
);
