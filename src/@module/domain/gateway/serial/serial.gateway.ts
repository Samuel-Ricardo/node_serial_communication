export interface ISerialPortGateway {
  open(): Promise<void>;
  close(): Promise<void>;
  onOpen(callback: Function): void;
  onClose(callback: Function): void;
  read(): Promise<Buffer>;
  write(buffer: Buffer): Promise<void>;
  stream(read: Function): NodeJS.ReadWriteStream;
}
