# A test to show Redux connect failure in react-native-popup-dialog
> React Native 0.59.2

## Error:
```
Invariant Violation: Could not find "store" in the context of "Connect(ConnectedSubComponent)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(ConnectedSubComponent) in connect options.

This error is located at:
    in Connect(ConnectedSubComponent) (at App.js:50)
    in RCTView (at View.js:45)
    in View (at DialogContent.js:17)
    in DialogContent (at App.js:49)
    in RCTView (at View.js:45)
    in View (at createAnimatedComponent.js:151)
    in AnimatedComponent (at Dialog.js:201)
    in RCTView (at View.js:45)
    in View (at Dialog.js:191)
    in Dialog (at PopupDialog.js:73)
    in _class (at react-native-root-siblings/index.js:82)
    in RootSiblings (at react-native-root-siblings/index.js:35)
    in RCTView (at View.js:45)
    in View (at react-native-root-siblings/index.js:33)
    in RootSiblingsWrapper (at AppContainer.js:112)
    in RCTView (at View.js:45)
    in View (at AppContainer.js:115)
    in AppContainer (at renderApplication.js:34)
renderWrappedComponent
    D:\dev\rn\ReduceFail\node_modules\redux\lib\redux.js:423:14
updateContextConsumer
    D:\dev\rn\ReduceFail\node_modules\@babel\runtime\helpers\arrayWithoutHoles.js:8:3
performUnitOfWork
    D:\dev\rn\ReduceFail\node_modules\prop-types\factoryWithTypeCheckers.js:207:7
workLoop
    
renderRoot
    D:\dev\rn\ReduceFail\node_modules\prop-types\factoryWithTypeCheckers.js:294:13
performWorkOnRoot
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\Utilities\deprecatedPropType.js:11
performWork
    
performSyncWork
    D:\dev\rn\ReduceFail\node_modules\react-is\cjs\react-is.development.js:143:11
requestWork
    D:\dev\rn\ReduceFail\node_modules\react-is\cjs\react-is.development.js:28:4
scheduleWork
    D:\dev\rn\ReduceFail\node_modules\react-is\cjs\react-is.production.min.js:12:116
scheduleRootUpdate
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\Utilities\MatrixMath.js:211:18
render
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\Renderer\oss\ReactNativeRenderer-dev.js:569:6
renderApplication
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\YellowBox\Data\YellowBoxSymbolication.js:76:2
run
    
runApplication
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\YellowBox\UI\YellowBoxInspectorStackFrame.js:31:4
__callFunction
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\ART\ReactNativeART.js:273:2
<unknown>
    
__guard
    
callFunctionReturnFlushedQueue
    D:\dev\rn\ReduceFail\node_modules\react-native\Libraries\ART\ReactNativeART.js:51:5
```