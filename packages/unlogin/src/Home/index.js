import React, { PureComponent } from 'react';
import layer from './layer';
import Player from '../Player';
import './style.scss';
const talentStrategy = '//player.alicdn.com/video/aliyunmedia.mp4';
export default class extends PureComponent {
  video = null;
  handlerClick = () => {};

  handlerPlay(parmas) {
    const ApplyLayer = layer(({ destroy }) => <Player parmas={parmas} destroy={destroy} />);
    new ApplyLayer({ className: 'show-module' });
  }

  render() {
    return (
      <div className="page page-home">
        <span className="slogan" />
        <span className="slogan-sub" />
        <div className="bottom">
          {/*<button className="button"*/}
          {/*onClick={this.handlerPlay.bind(this, pp)}>数字化招聘*/}
          {/*</button>*/}
          <button className="button" onClick={this.handlerPlay.bind(this, talentStrategy)}>
            人才战略落地方案
          </button>
          <span className="button-login" onClick={this.handlerClick}>
            账号登录
          </span>
        </div>
      </div>
    );
  }
}
