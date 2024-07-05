export interface ISerialPortGateway {
  open(): Promise<void>;
  close(): Promise<void>;
  onOpen(callback: () => void): void;
  onClose(callback: () => void): void;
  read(size?: number): Promise<Buffer>;
  write(data: Buffer): Promise<void>;
  stream(read: Function): NodeJS.ReadWriteStream;
}
