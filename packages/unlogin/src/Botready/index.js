import React, { PureComponent } from 'react';
import './style.scss';
import BotLog from './bot-log.svg';
import BotTitle from './bot-title.svg';
import layer from '../Home/layer';
import Player from '../Player';
import interview from './interview.png';
import interviewPlan from './interviewPlan.png';
import positionConsult from './positionConsult.png';
import ssc from './ssc.png';
import makeSure from './makeSure.png';
import bot from './Bot.svg';
import classnames from 'classnames';

const botVedio = [
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/intentionBOT.mp4',
    },
    pic: makeSure,
    name: '意向确认',
    t: 'before_login_viedo_bot_interview_fix_up',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/SSCBOT.mp4',
    },
    pic: ssc,
    name: 'SSC',
    t: 'before_login_viedo_ssc_bot',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/interviewBOT.mp4',
    },
    pic: interview,
    name: '面试',
    t: 'before_login_viedo_bot_intention_confirmation',
  },
  {
    name: 'bot',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/consultBOT.mp4',
    },
    pic: positionConsult,
    name: '职位咨询',
    t: 'before_login_viedo_bot_job_consulation',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/scheduleBOT.mp4',
    },
    pic: interviewPlan,
    name: '面试安排',
    t: 'before_login_viedo_bot_interview',
  },
];
export default class extends PureComponent {
  handlerPlay = parmas => {
    const ApplyLayer = layer(({ destroy }) => <Player parmas={parmas} destroy={destroy} />);
    new ApplyLayer({ className: 'show-module' });
  };

  render() {
    return (
      <div className={classnames('page page-botready', { reset: this.props.running })}>
        <img className="logo" src={BotLog} />
        <img className="title" src={BotTitle} />
        <div className={classnames('bot-contain', { reset: this.props.running })}>
          {botVedio.map((item, index) => {
            return index === 3 ? (
              <div key={index} className="bot-item bot">
                <img src={bot} />
              </div>
            ) : (
              <div key={index} className="bot-item" onClick={() => this.handlerPlay(item.vedio)}>
                <img src={item.pic} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
