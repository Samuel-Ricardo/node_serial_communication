import { IBatteryDTO } from '../../DTO/telemetry/battery/battery.dto';

export class Battery {
  constructor(
    public readonly voltage: number,
    public readonly current: number,
    public readonly state_of_charge: number,
  ) {}

  toDTO(): IBatteryDTO {
    return {
      voltage: this.voltage,
      current: this.current,
      state_of_charge: this.state_of_charge,
    };
  }

  static fromDTO(dto: IBatteryDTO): Battery {
    return new Battery(dto.voltage, dto.current, dto.state_of_charge);
  }
}
