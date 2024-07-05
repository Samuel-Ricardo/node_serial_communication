import { MODULE } from '../../../app.registry';
import { injectable } from 'inversify';
import { IDocumentationModule } from '../documentation.interface';
import { RequestHandler } from 'express';

import DOCUMENTATION from '../../../../../docs/swagger.json';
import { injectEngine } from '../../engine/engine.module';
import { SWAGGER_ENGINE_TYPE } from '../../../../@types/module/infra/engine/documentation/swagger.type';

@injectable()
export class SwaggerDocumentation
  implements IDocumentationModule<RequestHandler, RequestHandler>
{
  @injectEngine(MODULE.INFRA.ENGINE.DOCS.SWAGGER)
  private readonly _engine!: SWAGGER_ENGINE_TYPE;

  server(): RequestHandler {
    return this._engine.serve as any;
  }

  setup(): RequestHandler {
    return this._engine.setup(DOCUMENTATION);
  }
}
