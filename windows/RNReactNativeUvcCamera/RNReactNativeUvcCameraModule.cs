using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Uvc.Camera.RNReactNativeUvcCamera
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeUvcCameraModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeUvcCameraModule"/>.
        /// </summary>
        internal RNReactNativeUvcCameraModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeUvcCamera";
            }
        }
    }
}
