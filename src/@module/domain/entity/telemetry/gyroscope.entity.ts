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
}
