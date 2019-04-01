import React, { PureComponent } from 'react';
import './style.scss';
import title1 from './title1.svg';
import title2 from './title2.svg';
import iso from './iso.png';
export default class extends PureComponent {
  render() {
    return (
      <div className="page page-iso">
        <img className="title" src={title1} />
        <img className="title" src={title2} />
        <div className="des">HR领域国内首家通过UKAS、ISO27001认证</div>
        <div className="des">并获得信息系统安全等级保护备案证明</div>
        <img className="iso" src={iso} />
      </div>
    );
  }
}
