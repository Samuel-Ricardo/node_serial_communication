import { injectable } from 'inversify';
import { injectGateway } from '../../../../gateway/gateway.module';
import { SerialPortBatteryGateway } from '../../../../gateway/telemetry/battery/battery.gateway';
import { MODULE } from '../../../../../app.registry';

@injectable()
export abstract class BatterySerialGatewaySupport {
  @injectGateway(MODULE.APPLICATION.GATEWAY.TELEMETRY.BATTERY)
  protected readonly gateway!: SerialPortBatteryGateway;
}
