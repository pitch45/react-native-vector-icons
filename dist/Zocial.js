var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.getImageSourceSync=exports.getImageSource=exports.default=exports.Button=void 0;var _createIconSet=_interopRequireDefault(require("./lib/create-icon-set"));var _Zocial=_interopRequireDefault(require("./glyphmaps/Zocial.json"));var iconSet=(0,_createIconSet.default)(_Zocial.default,'zocial','Zocial.ttf');var _default=iconSet;exports.default=_default;var Button=iconSet.Button,getImageSource=iconSet.getImageSource,getImageSourceSync=iconSet.getImageSourceSync;exports.getImageSourceSync=getImageSourceSync;exports.getImageSource=getImageSource;exports.Button=Button;