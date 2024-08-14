import { injectable } from 'inversify';
import { injectGateway } from '../../../../gateway/gateway.module';
import { MODULE } from '../../../../../app.registry';
import { SerialPortGyroscopeGateway } from '../../../../gateway/telemetry/gyroscope/gyroscope.gateway';

@injectable()
export class GyroscopeSerialPortGatewaySupport {
  @injectGateway(MODULE.APPLICATION.GATEWAY.TELEMETRY.GYROSCOPE)
  protected readonly gateway!: SerialPortGyroscopeGateway;
}
