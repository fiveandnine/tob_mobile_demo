import React, { PureComponent } from 'react';
import './style.scss';
import success from './success.svg';
import moments from './moments.png';
import weChat from './wechat.png';
export default class extends PureComponent {
  handlerShare = () => {};
  render() {
    return (
      <div className="show-module-body">
        <img className="logo" src={success} />
        <div className="title">提交成功</div>
        <div className="title-des">我们会在一个工作日内联系您</div>
        <div className="des">分享给好友，帮TA抢占免费使用机会每成功推荐一位，您都将获得微信红包</div>
        <div className="share">
          <div className="share-item">
            <div className="share-logo">
              <img src={weChat} />
            </div>
            <div className="share-title">朋友圈</div>
          </div>
          <div className="share-item">
            <div className="share-logo">
              <img src={moments} />
            </div>
            <div className="share-title">微信好友</div>
          </div>
        </div>
        <i className="close" onClick={this.props.destroy} />
      </div>
    );
  }
}
