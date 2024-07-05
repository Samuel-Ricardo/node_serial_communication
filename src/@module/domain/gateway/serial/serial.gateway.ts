export interface ISerialPortGateway {
  open(): Promise<void>;
  close(): Promise<void>;
  onOpen(callback: () => void): void;
  onClose(callback: () => void): void;
  read(size?: number): Promise<String>;
  write(buffer: Buffer): Promise<void>;
  stream(read: Function): NodeJS.ReadWriteStream;
}
