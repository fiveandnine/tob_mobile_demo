import React, { PureComponent } from 'react'
import './style.scss'


export default class extends PureComponent {
  handlerShare = () => {

  }
  render() {
    return (
      <div className="show-module-body">
        <img />
        <div>提交成功</div>
        <div>我们会在一个工作日内联系您</div>
        <div>
          分享给好友，帮TA抢占免费使用机会每成功推荐一位，您都将获得微信红包
        </div>
        <div>

        </div>
        <i className="close" onClick={this.props.destroy}/>
      </div>
    );
  }
}
