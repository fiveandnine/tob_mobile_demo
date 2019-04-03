import React from 'react';
import classnames from 'classnames';
import './style.scss';
import logo from './logo.png';

export default props => {
  return (
    <div className={classnames('page page-partner', { reset: props.running })}>
      <div className="title">客户信任</div>
      <img className="logo-milt" src={logo} />
    </div>
  );
};
