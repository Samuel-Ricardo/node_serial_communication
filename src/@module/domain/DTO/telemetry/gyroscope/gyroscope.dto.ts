export interface IGyroscopeDTO {
  acceleration: {
    x: number;
    y: number;
    z: number;
  };
  row: number;
  pitch: number;
  yaw?: number;
  timestamp?: number;
}
