import { IGyroscopeDTO } from '../../DTO/telemetry/gyroscope/gyroscope.dto';

export class Powertrain {
  constructor(
    public readonly acceleration: {
      x: number;
      y: number;
      z: number;
    },
    public readonly row: number,
    public readonly pitch: number,
    public readonly yaw?: number,
    public readonly timestamp?: number,
  ) {}

  toDTO(): IGyroscopeDTO {
    return {
      acceleration: this.acceleration,
      row: this.row,
      pitch: this.pitch,
      yaw: this.yaw,
      timestamp: this.timestamp,
    };
  }
}
