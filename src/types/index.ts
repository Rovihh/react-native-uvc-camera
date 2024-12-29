import {StyleProp, ViewProps, ViewStyle} from 'react-native';

export interface UVCCameraViewProps extends ViewProps {
  deviceId?: string;
}

export interface UVCDevice {
  deviceId: string;
  productId: string;
  vendorId: string;
  manufacturerName?: string;
  productName?: string;
}

// 全局权限请求池
export interface PermissionRequest {
  deviceId: number;
  resolve: (value: boolean) => void;
  reject: (error: any) => void;
}

export interface UsbDevice {
  deviceId: number;
  deviceName: string;
  productId: number;
  vendorId: number;
}

export interface UsbDeviceModuleInterface {
  getDeviceList(): Promise<UsbDevice[]>;
  requestPermission(deviceId: number): Promise<boolean>;
  hasPermission(deviceId: number): Promise<boolean>;
  addDeviceAttachedListener(callback: (device: UsbDevice) => void): any;
  addDeviceDetachedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
  addDeviceConnectedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
  addDeviceDisconnectedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
  addDevicePermissionDeniedListener(callback: (device: Pick<UsbDevice, 'deviceId'>) => void): any;
}
