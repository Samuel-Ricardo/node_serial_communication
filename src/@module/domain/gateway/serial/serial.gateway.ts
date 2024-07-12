export interface ISerialPortGateway {
  open(): void;
  close(): void;
  onOpen(callback: () => void): void;
  onClose(callback: () => void): void;
  read(size?: number): Buffer;
  write(data: Buffer): void;
  stream(read: (chunk: Buffer) => void): void;
}
