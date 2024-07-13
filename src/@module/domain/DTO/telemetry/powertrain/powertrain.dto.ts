export interface IPowertrainDTO {
  speed: number;
  rpm: number;
  temperature: {
    engine: number;
    cvt: number;
  };
  timestamp?: number;
}
