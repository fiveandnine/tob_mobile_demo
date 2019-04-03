import React, { PureComponent } from 'react';
import './style.scss';
import success from './redpocket.svg';
import moments from './moments.png';
import weChat from './wechat.png';
export default class extends PureComponent {
  handlerShare = () => {};
  render() {
    return (
      <div className="show-module-body">
        <img className="logo" src={success} />
        <div className="title">分享领红包</div>
        <div className="title-des title-des-red">
          <div>分享到朋友圈，邀TA免费体验</div>
          <div>您可领取随机红包1个！</div>
        </div>
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
