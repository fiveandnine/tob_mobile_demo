import React, { PureComponent } from 'react';
import './style.scss';
import layer from '../Home/layer';
import Apply from '../Apply';
import ShowModule from '../ShareModule';
export default class extends PureComponent {
  handlerSee = () => {
    const { ApplyPage } = this.props,
      ApplyLayer = layer(({ destroy }) => (
        <Apply>
          <i className="close" onClick={destroy} />
          <ApplyPage onSubmit={destroy} />
        </Apply>
      ));
    new ApplyLayer();
  };
  handlerShare = () => {
    const ApplyLayer = layer(({ destroy }) => <ShowModule destroy={destroy} />);
    new ApplyLayer({ className: 'show-module' });
  };

  render() {
    const { type } = this.props;
    return (
      <div className={type === 0 ? 'unlogin-page-header' : 'unlogin-page-header black'}>
        <i className="logo" />
        {type === 7 ? (
          <span className="share" onClick={this.handlerShare}>
            分享有礼
          </span>
        ) : (
          <span className="see" onClick={this.handlerSee}>
            一键体验
          </span>
        )}
      </div>
    );
  }
}
