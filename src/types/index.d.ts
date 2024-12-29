// 全局权限请求池
interface PermissionRequest {
  deviceId: number;
  resolve: (value: boolean) => void;
  reject: (error: any) => void;
}

interface UVCCameraViewProps {
  deviceId?: string;
  onConnected?: () => void;
  onDisconnected?: () => void;
  onFrame?: (event: any) => void;
  style?: any;
}

interface UsbDevice {
  deviceId: number;
  deviceName: string;
  productId: number;
  vendorId: number;
}

interface UsbDeviceModuleInterface {
  getDeviceList(): Promise<UsbDevice[]>;
  requestPermission(deviceId: number): Promise<boolean>;
  hasPermission(deviceId: number): Promise<boolean>;
  addDeviceAttachedListener(callback: (device: UsbDevice) => void): any;
  addDeviceDetachedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
  addDeviceConnectedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
  addDeviceDisconnectedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
  addDevicePermissionDeniedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
}
