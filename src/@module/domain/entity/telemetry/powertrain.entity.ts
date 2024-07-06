export class Powertrain {
  constructor(
    public readonly speed: number,
    public readonly rpm: number,
    public readonly temperature: {
      engine: number;
      cvt: number;
    },
  ) {}
}
