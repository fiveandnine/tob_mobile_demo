/**
 * @name: unlogin ;
 * @author: admin ;
 * @description: tob未登录引导页 ;
 * */
import React, { PureComponent } from 'react';
import Page from './Page';
import Header from './Header';
import Home from './Home';
import Aikey from './Aikey';
import Botready from './Botready';
import Plan from './Plan';
import Success from './Success';
import Iso from './Iso';
import Partner from './Partner';
import ApplyContain from './Apply/contain';
import './style.scss';
import layer from './Home/layer';
import ShowModule from './ShareModule';

export default class extends PureComponent {
  state = {
    index: 0,
  };
  handlerChange = index => {
    this.setState({ index });
  };
  handlerSubmit = () => {
    this.setState({ index: this.state.index + 1 });
  };
  componentDidMount() {
    // 加入阿里云视频
    let scriptAli = document.createElement('script');
    scriptAli.src = 'https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js';
    document.body.appendChild(scriptAli);
    let linkAli = document.createElement('link');
    linkAli.setAttribute('rel', 'stylesheet');
    linkAli.href = 'https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css';
    document.body.appendChild(linkAli);
  }
  render() {
    const index = this.state.index;
    const { ApplyPage } = this.props;
    return (
      <div>
        <Header type={index} ApplyPage={ApplyPage} />
        <Page className="unlogin screen" index={this.state.index} onChange={this.handlerChange}>
          <Home />
          <Aikey />
          <Botready />
          <Plan />
          <Success />
          <Iso />
          <Partner />
          <ApplyContain>
            <ApplyPage onSubmit={this.handlerSubmit} />
          </ApplyContain>
        </Page>
      </div>
    );
  }
}
