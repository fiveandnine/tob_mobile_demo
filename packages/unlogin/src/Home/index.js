import React, { PureComponent } from 'react'
import layer from './layer'
import Apply from '../Apply'
import Player from '../Player'
import './style.scss'

export default class extends PureComponent {
  video = null;
  handlerClick = () => {
    const { ApplyPage } = this.props,
      ApplyLayer = layer(({ destroy }) => <Apply><i
        className="close" onClick={destroy}/><ApplyPage
        onSubmit={destroy}/></Apply>);
    new ApplyLayer();
  };

  handlerPlay(parmas) {
    this.player.setPlayParams(parmas)
  }

  render() {
    return <div className="page page-home">
      <span className="slogan"/>
      <span className="slogan-sub"/>
      <div className="bottom">
        <button className="button"
                onClick={this.handlerPlay.bind(this, '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentstrategy.mp4')}>数字化招聘
        </button>
        <button className="button"
                onClick={this.handlerPlay.bind(this, '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentstrategy.mp4')}>人才战略落地方案
        </button>
        <span className="button-login"
              onClick={this.handlerClick}>账号登录
        </span>
      </div>
      <Player ref={(child) => {
        this.player = child
      }}/>
    </div>
  }
};
