import React, {PureComponent} from 'react'
import './style.scss'
import title1 from './title1.svg'
import title2 from './title2.svg'
export default class extends PureComponent {

  render() {
    return (
      <div className="page page-iso">
        <img className="title" src={title1}/>
        <img className="title" src={title2}/>
      </div>
    );
  }
}
