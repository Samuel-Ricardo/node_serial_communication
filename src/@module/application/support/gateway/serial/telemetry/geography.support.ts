import { injectable } from 'inversify';
import { MODULE } from '../../../../../app.registry';
import { injectGateway } from '../../../../gateway/gateway.module';
import { SerialPortGeographyGateway } from '../../../../gateway/telemetry/geography/geography.gateway';

@injectable()
export abstract class GeographySerialPortGatewaySupport {
  @injectGateway(MODULE.APPLICATION.GATEWAY.TELEMETRY.GEOGRAPHY)
  protected readonly gateway!: SerialPortGeographyGateway;
}
