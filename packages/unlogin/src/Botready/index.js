import React, { PureComponent } from 'react'
import './style.scss'
import BotLog from "./bot-log.svg";
import BotTitle from "./bot-title.svg";
import layer from '../Home/layer';
import Player from '../Player'
const botVedio = [{
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/interviewBOT.mp4'
  },
  name: '面试安排',
  t: 'before_login_viedo_bot_interview'
}, {
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/intentionBOT.mp4'
  },
  name: '面试',
  t: 'before_login_viedo_bot_intention_confirmation'
}, {
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/scheduleBOT.mp4'
  },
  name: '意向确认',
  t: 'before_login_viedo_bot_interview_fix_up'
},{
  name: ''
}, {
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/consultBOT.mp4'
  },
  type: 'ali',
  name: '职位咨询',
  t: 'before_login_viedo_bot_job_consulation'
}, {
  vedio: {
    source: "//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/SSCBOT.mp4"
  },
  name: 'SSC',
  t: 'before_login_viedo_ssc_bot'
}]
export default class extends PureComponent {
  handlerPlay=(parmas) =>{
    const ApplyLayer = layer(({ destroy }) => <Player parmas={parmas} destroy={destroy}/>);
    new ApplyLayer({className: "show-module"});
  }
  render() {
    return (
      <div className="page page-botready">
        <img className="logo" src={BotLog}/>
        <img className="title" src={BotTitle}/>
        <div className="bot-contain">
          {botVedio.map((item, index)=>{
            return index
            ===3 ? <div key={index} className="bot-item bot">
              面试安排
              </div> :
            <div key={index} className="bot-item">
              <div onClick={()=>this.handlerPlay(item.vedio)}>{item.name}</div>
            </div>
          })}


        </div>
      </div>
    );
  }
}
