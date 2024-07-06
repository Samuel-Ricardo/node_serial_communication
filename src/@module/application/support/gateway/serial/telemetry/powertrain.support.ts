import { injectable } from 'inversify';
import { SerialPortPowertrainGateway } from '../../../../gateway/telemetry/powertrain/powertrain.gateway';
import { injectGateway } from '../../../../gateway/gateway.module';
import { MODULE } from '../../../../../app.registry';

@injectable()
export abstract class PowertrainSerialGatewaySupport {
  @injectGateway(MODULE.APPLICATION.GATEWAY.TELEMETRY.POWERTRAIN)
  protected readonly gateway!: SerialPortPowertrainGateway;
}
