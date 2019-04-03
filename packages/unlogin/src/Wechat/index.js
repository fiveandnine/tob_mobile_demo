import React from 'react';
import Ajax from './Ajax';

export default class Util {
  //微信分享
  static wxShare = (shareObj, options = {}) => {
    let wx = window.wx,
      isWeixin = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
    if (wx) {
      wx.isWeixin = isWeixin;
    } else {
      return;
    }

    shareObj = Object.assign(
      {},
      {
        title: '',
        logo: '',
        des: '',
        subtitle: '',
      },
      shareObj
    );
    wx.onMenuShareAll = () => {};
    if (isWeixin) {
      var jsApiList = [
        'hideOptionMenu',
        'showOptionMenu',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
      ];
      wx.onMenuShareAll = (obj, custom) => {
        custom = custom || {};
        // 正常应该是 URL 切换后签名失效，重新做一次签名config即可，但是在微信中发现不可行！！！
        // 反而是每次页面切换后都使用第一次获取的签名再 config 一下就可以。
        // 此方法在微信开发者工具中失败，IOS 未测试。。。
        wx.config(Object.assign({}, wx._config));

        wx.showOptionMenu();
        jsApiList.forEach((method, i) => {
          if (method.indexOf('onMenuShare') > -1) {
            var param = Object.assign({}, obj, custom[method]);
            console.log(method, param);
            // if (method == 'onMenuShareTimeline') {
            //     param.title = shareObj.desc
            // }
            if (method == 'onMenuShareWeibo') {
              param.title = shareObj.desc;
            }
            ['success', 'cancel'].forEach((prop, idx) => {
              param[prop] = param[prop] && param[prop].call(param, method);
            });
            wx[method](Object.assign({}, param));
          }
        });
      };
      // 获取微信签名
      Ajax.post(location.protocol + '//' + location.host + '/wxsignature', {
        url: shareObj.link,
      }).then(({ data }) => {
        var config = data.results;
        if (data.err_no == 0) {
          config.jsApiList = jsApiList.concat([]);
          ['appId', 'timestamp', 'nonceStr', 'signature'].forEach((prop, i) => {
            config[prop] = '' + (config[prop] || '');
          });
          // config.debug = true;
          // 传入true参数避免深层引用导致wx._config.wxJsApi改变
          wx._config = config;
          wx.config(Object.assign({}, config));
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
}
