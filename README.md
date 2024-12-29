# react-native-uvc-camera

一个 React Native 组件，用于预览 UVC 相机。
对应的 Demo https://github.com/frontend-free/RNUVCCamera

<img src="https://raw.githubusercontent.com/frontend-free/react-native-uvc-camera/refs/heads/main/md_doc/uvc.png" width="500">

功能

- 支持预览多个 UVC 相机
- 支持插拔
- 目前支持 Android

> 如果你需要更多功能，请 fork 或者联系我们！

使用

```tsx
import { UVCCameraWithIndex } from "@fe-free/react-native-uvc-camera";

const Home = () => {
  return (
    <View>
      <Text>相机 1</Text>
      <View style={styles.cameraView}>
        <UVCCameraWithIndex index={0} />
      </View>
      <Text>相机 2</Text>
      <View style={styles.cameraView}>
        <UVCCameraWithIndex index={1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraView: {
    width: "100%",
    height: 240,
    backgroundColor: "#000",
  },
});
```

[什么是 UVC ?](https://baike.baidu.com/item/uvc/3809290)

## 经历

背景：我需要一个能预览多个 UVC 摄像头画面的组件。
困难：没有找到能用的组件。这中间有各种原因：存在 Android 原生能力的不足; 存在 ReactNative 的版本迭代太快；存在 react-native 的生态不活跃。
最终：我们基于 https://github.com/jiangdongguo/AndroidUSBCamera 做了些改造和封装，同时 Shared 出来

在此之前我们尝试了

- https://github.com/saki4510t/UVCCamera android 原生
- https://github.com/flyskywhy/react-native-uvc-camera 最终没跑起来
- https://github.com/and2long/react-native-uvc-camera 只支持一个
- https://github.com/mrousavy/react-native-vision-camera 只支持前后置摄像头
- https://github.com/jiangdongguo/AndroidUSBCamera android 原生库。

感谢

- [@yz1311](https://github.com/yz1311)

## 联系和捐赠

联系我

<img src="https://raw.githubusercontent.com/frontend-free/react-native-uvc-camera/refs/heads/main/md_doc/wx.png" width="300">

捐赠

<img src="https://raw.githubusercontent.com/frontend-free/react-native-uvc-camera/refs/heads/main/md_doc/pay.png" width="300">
