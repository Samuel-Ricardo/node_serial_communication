import { Powertrain } from '../../../entity/telemetry/powertrain.entity';

export interface IPowertrainService {
  read(): Promise<Powertrain[]>;
}
