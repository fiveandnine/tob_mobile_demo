import React, { PureComponent } from 'react';
import './style.scss';
import title1 from './title1.svg';
import title2 from './title2.svg';
import title3 from './title3.svg';
import title4 from './title4.svg';
import logo1 from './logo1.svg';
import logo2 from './logo2.svg';
import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
const success = [
  { logo: logo1, title: ['人才战略落地', '咨询服务'] },
  { logo: logo2, title: ['系统平台', '技术支持'] },
  { logo: logo3, title: ['雇主品牌', '建设'] },
  { logo: logo4, title: ['校园招聘', '现场支持'] },
];
export default class extends PureComponent {
  render() {
    return (
      <div className="page page-success">
        <div className="title-contain">
          <img className="title" src={title1} />
          <img className="title" src={title2} />
          <img className="title" src={title3} />
          <img className="title" src={title4} />
        </div>
        <div className="success-contain">
          {success.map((item, index) => {
            return (
              <div key={index} className={'success-item'}>
                <img className="logo" src={item.logo} />
                {item.title.map((_item, index) => {
                  return (
                    <div className="title" key={index}>
                      {_item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
