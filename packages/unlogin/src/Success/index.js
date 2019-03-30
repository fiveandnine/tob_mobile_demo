import React, {PureComponent} from 'react'
import './style.scss'
import title1 from './title1.svg'
import title2 from './title2.svg'
import title3 from './title3.svg'
import title4 from './title4.svg'
import logo1 from './logo1.svg'
import logo2 from './logo2.svg'
import logo3 from './logo3.svg'
import logo4 from './logo4.svg'
import des1 from './des1.svg'
import des2 from './des2.svg'
import des3 from './des3.svg'
import des4 from './des4.svg'
const success = [
  {logo: logo1,title: des1},
  {logo: logo2,title: des2},
  {logo: logo3,title: des3},
  {logo: logo4,title: des4}
]
export default class extends PureComponent {

  render() {
    return (
      <div className="page page-success">
        <div className="title-contain">
          <img className="title" src={title1}/>
          <img className="title" src={title2}/>
          <img className="title" src={title3}/>
          <img className="title" src={title4}/>
        </div>
        <div className="success-contain">
          {success.map((item, index)=>{
            return <div key={index} className={"success-item"}>
              <img className="logo" src={item.logo}/>
              <img className="title" src={item.title}/>
            </div>
          })}
        </div>

      </div>
    );
  }
}
