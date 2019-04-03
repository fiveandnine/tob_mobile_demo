import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './style.scss';
import AISlogan from './AIslogan.svg';
import AIkey from './AIKey.svg';
import positionPortrait from './positionPortrait.svg';
import resumePortrait from './resumePortrait.svg';
import talentQuality from './talentquality.svg';
import introduction from './introduction.svg';
import aits from './aits.svg';
import layer from '../Home/layer';
import Player from '../Player';

//  ai为钥匙
const Aikey = [
  {
    logo: positionPortrait,
    subTitle: '岗位画像',
    describe: ['专家+数据精准描绘岗位需求', '是招对人的坚实基础'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/JDimage.mp4',
    },
    t: 'before_login_viedo_job_portrait',
  },
  {
    logo: resumePortrait,
    subTitle: '人才画像',
    describe: ['更全面、更立体的候选人信息', '是招对人的重要保证'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentimage.mp4',
    },
    t: 'before_login_viedo_talent_portrait',
  },
  {
    logo: aits,
    subTitle: 'AiTS',
    describe: ['AI赋能招聘流程管理系统', '全流程提升招聘效能'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/AiTS.mp4',
    },
    t: 'before_login_viedo_aits',
  },
  {
    logo: talentQuality,
    subTitle: '人才质量',
    describe: ['建立人才质量标准辅助决策', '提高招对人的准确率'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentquality.mp4',
    },
    t: 'before_login_viedo_talent_quality',
  },
  {
    logo: introduction,
    subTitle: '行业洞察',
    describe: ['宏观展现行业人才数据动态', '洞悉人才流动趋势'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentdata.mp4',
    },
    t: 'before_login_viedo_industry_bi',
  },
];

export default class extends PureComponent {
  handlerPlay(parmas) {
    const ApplyLayer = layer(({ destroy }) => <Player parmas={parmas} destroy={destroy} />);
    new ApplyLayer({ className: 'show-module' });
  }
  componentWillReceiveProps(prop) {
    console.log(prop.running);
  }
  render() {
    return (
      <div className={classnames('page page-aikey', { reset: this.props.running })}>
        <img className="logo" src={AIkey} />
        <img className="title" src={AISlogan} />
        <div className="Aicard-contain">
          {Aikey.map((item, index) => {
            return (
              <div className="Aicard" key={index}>
                <img className="Aicard-logo" src={item.logo} />
                <div className="AIcard-title" onClick={this.handlerPlay.bind(this, item.vedio)}>
                  {item.subTitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
