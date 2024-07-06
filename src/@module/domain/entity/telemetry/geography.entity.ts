import { IGeographyDTO } from '../../DTO/telemetry/geography/geography.dto';

export class Geography {
  constructor(
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly timestamp: number,
  ) {}

  toDTO(): IGeographyDTO {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
      timestamp: this.timestamp,
    };
  }
}
