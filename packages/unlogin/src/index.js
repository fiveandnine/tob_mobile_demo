/**
 * @name: unlogin ;
 * @author: admin ;
 * @description: tob未登录引导页 ;
 * */
import React, { PureComponent } from 'react'
import Page from './Page'
import Header from './Header'
import Home from './Home'
import Aikey from './Aikey'
import Botready from './Botready'
import Plan from './Plan'
import Success from './Success'
import Iso from './Iso'
import Partner from './Partner'
import ApplyContain from './Apply/contain'
import './style.scss'

export default class extends PureComponent {
  state = {
    index: 0
  };
  handlerChange = (index) => {
    this.setState({ index });
  };
  handlerSubmit = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    const index = this.state.index;
    const { ApplyPage } = this.props;
    return (
      <div>
        <Header type={index} ApplyPage={ApplyPage}/>
        <Page className="unlogin screen"
              index={this.state.index}
              onChange={this.handlerChange}>
          <Home />
          <Aikey/>
          <Botready/>
          <Plan/>
          <Success/>
          <Iso/>
          <Partner/>
          <ApplyContain>
            <ApplyPage onSubmit={this.handlerSubmit}/>
          </ApplyContain>
        </Page>
      </div>
    );
  }
}
