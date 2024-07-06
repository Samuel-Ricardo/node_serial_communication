import { IPowertrainDTO } from '../../DTO/telemetry/powertrain/powertrain.dto';

export class Powertrain {
  constructor(
    public readonly speed: number,
    public readonly rpm: number,
    public readonly temperature: {
      engine: number;
      cvt: number;
    },
  ) {}

  toDTO(): IPowertrainDTO {
    return {
      speed: this.speed,
      rpm: this.rpm,
      temperature: this.temperature,
    };
  }

  static fromDTO(dto: IPowertrainDTO): Powertrain {
    return new Powertrain(dto.speed, dto.rpm, dto.temperature);
  }
}
