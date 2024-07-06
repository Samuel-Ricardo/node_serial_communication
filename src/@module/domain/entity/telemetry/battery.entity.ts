export class Battery {
  constructor(
    public readonly voltage: number,
    public readonly current: number,
    public readonly state_of_charge: number,
  ) {}
}
