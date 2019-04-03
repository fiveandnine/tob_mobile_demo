'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Ajax = require('./Ajax');

var _Ajax2 = _interopRequireDefault(_Ajax);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Util = function Util() {
  (0, _classCallCheck3.default)(this, Util);
};

Util.wxShare = function(shareObj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var wx = window.wx,
    isWeixin = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
  if (wx) {
    wx.isWeixin = isWeixin;
  } else {
    return;
  }

  shareObj = (0, _assign2.default)(
    {},
    {
      title: '',
      logo: '',
      des: '',
      subtitle: '',
    },
    shareObj
  );
  wx.onMenuShareAll = function() {};
  if (isWeixin) {
    var jsApiList = [
      'hideOptionMenu',
      'showOptionMenu',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
    ];
    wx.onMenuShareAll = function(obj, custom) {
      custom = custom || {};
      // 正常应该是 URL 切换后签名失效，重新做一次签名config即可，但是在微信中发现不可行！！！
      // 反而是每次页面切换后都使用第一次获取的签名再 config 一下就可以。
      // 此方法在微信开发者工具中失败，IOS 未测试。。。
      wx.config((0, _assign2.default)({}, wx._config));

      wx.showOptionMenu();
      jsApiList.forEach(function(method, i) {
        if (method.indexOf('onMenuShare') > -1) {
          var param = (0, _assign2.default)({}, obj, custom[method]);
          console.log(method, param);
          // if (method == 'onMenuShareTimeline') {
          //     param.title = shareObj.desc
          // }
          if (method == 'onMenuShareWeibo') {
            param.title = shareObj.desc;
          }
          ['success', 'cancel'].forEach(function(prop, idx) {
            param[prop] = param[prop] && param[prop].call(param, method);
          });
          wx[method]((0, _assign2.default)({}, param));
        }
      });
    };
    // 获取微信签名
    _Ajax2.default
      .post(location.protocol + '//' + location.host + '/wxsignature', {
        url: shareObj.link,
      })
      .then(function(_ref) {
        var data = _ref.data;

        var config = data.results;
        if (data.err_no == 0) {
          config.jsApiList = jsApiList.concat([]);
          ['appId', 'timestamp', 'nonceStr', 'signature'].forEach(function(prop, i) {
            config[prop] = '' + (config[prop] || '');
          });
          // config.debug = true;
          // 传入true参数避免深层引用导致wx._config.wxJsApi改变
          wx._config = config;
          wx.config((0, _assign2.default)({}, config));
          wx.ready(function() {
            wx.onMenuShareAll(
              {
                title: shareObj.title,
                imgUrl: shareObj.logo,
                desc: shareObj.desc,
                link: shareObj.link,
              },
              options
            );
          });
        } else {
          // alert(JSON.stringify(data));
        }
      });
  }
};

exports.default = Util;
