import {NativeModules, NativeEventEmitter} from 'react-native';
import {UsbDevice, UsbDeviceModuleInterface} from "../types";

const {UVCDeviceModule} = NativeModules;

const eventEmitter = new NativeEventEmitter(UVCDeviceModule);

export default {
  ...UVCDeviceModule,

  getDeviceList: async (): Promise<UsbDevice[]> => {
    return UVCDeviceModule.getDeviceList();
  },

  requestPermission: async (deviceId: number): Promise<boolean> => {
    return UVCDeviceModule.requestPermission(deviceId);
  },

  hasPermission: async (deviceId: number): Promise<boolean> => {
    return UVCDeviceModule.hasPermission(deviceId);
  },

  addDeviceAttachedListener: (callback: (device: UsbDevice) => void) => {
    return eventEmitter.addListener('onDeviceAttached', callback);
  },

  addDeviceDetachedListener: (callback: (device: Pick<UsbDevice, 'deviceId'>) => void) => {
    return eventEmitter.addListener('onDeviceDetached', callback);
  },

  addDeviceConnectedListener: (callback: (device: Pick<UsbDevice, 'deviceId'>) => void) => {
    return eventEmitter.addListener('onDeviceConnected', callback);
  },

  addDeviceDisconnectedListener: (callback: (device: Pick<UsbDevice, 'deviceId'>) => void) => {
    return eventEmitter.addListener('onDeviceDisconnected', callback);
  },

  addDevicePermissionDeniedListener: (callback: (device: Pick<UsbDevice, 'deviceId'>) => void) => {
    return eventEmitter.addListener('onDevicePermissionDenied', callback);
  },
} as UsbDeviceModuleInterface;
