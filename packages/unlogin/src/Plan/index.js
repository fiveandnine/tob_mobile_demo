import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './style.scss';
import title1 from './title1.svg';
import title2 from './title2.svg';
import hunterIcon from './hunterIcon.svg';
import icloudIcon from './icloudIcon.svg';
import socialIcon from './socialIcon.svg';
import campusIcon from './campusIcon.svg';
import AIico from './AIico.svg';
import layer from '../Home/layer';
import Player from '../Player';
const planData = [
  {
    title: '智慧猎头解决方案',
    pic: hunterIcon,
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/hunter.mp4',
    },
    t: 'before_login_plan_solve_headhunter',
  },
  {
    title: '云人才库解决方案',
    pic: icloudIcon,
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentpool.mp4',
    },
    t: 'before_login_plan_solve_cloud_talent',
  },
  {
    title: '社交内推解决方案',
    pic: socialIcon,
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/neitui.mp4',
    },
    t: 'before_login_plan_solve_interpolate',
  },
  {
    title: '数字化校招解决方案',
    pic: campusIcon,
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/campus.mp4',
    },
    t: 'before_login_plan_solve_digit_school_recruit',
  },
  {
    title: 'AI官网解决方案',
    pic: AIico,
    des: '限量免费使用',
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/website.mp4',
    },
    t: 'before_login_viedo_plan_solve_ai_official',
  },
];
export default class extends PureComponent {
  handlerPlay(parmas) {
    const ApplyLayer = layer(({ destroy }) => <Player parmas={parmas} destroy={destroy} />);
    new ApplyLayer({ className: 'show-module' });
  }
  render() {
    return (
      <div className={classnames('page page-plan', { reset: this.props.running })}>
        <img className="title1" src={title1} />
        <img className="title2" src={title2} />
        <div className="plan-contain">
          {planData.map((item, index) => {
            return (
              <div className="plan-item" key={index} onClick={this.handlerPlay.bind(this, item.vedio)}>
                <img className="logo" src={item.pic} />
                <div className="title">
                  {item.title}
                  <div className="des">{item.des}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
