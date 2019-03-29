import React, { PureComponent } from 'react'
import './style.scss'

export default class extends PureComponent {
  video = null
  state = {
    isPlaying: false,
    source: null
  }

  componentDidMount() {
    // 加入阿里云视频
    let scriptAli = document.createElement("script");
    scriptAli.src = 'https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js';
    document.body.appendChild(scriptAli);
    let linkAli = document.createElement("link");
    linkAli.setAttribute('rel', 'stylesheet');
    linkAli.href = 'https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css';
    document.body.appendChild(linkAli);

    const { source } = this.props;
    if (source) {
      this.setPlayParams(source)
    }
  }

  handlerStart = (e) => {
    e.stopPropagation()
    return false
  }
  handlerMove = (e) => {
    e.stopPropagation()
    return false
  }
  handlerEnd = (e) => {
    e.stopPropagation()
    return false
  }

  handlerClose() {
    this.setState({ isPlaying: false })
    document.querySelector('#player-con').remove();
    let aliContainer = document.createElement("div");
    aliContainer.setAttribute("id", "player-con");
    aliContainer.setAttribute("class", "prism-player");
    document.querySelector('#js-player-layer').appendChild(aliContainer);
  }

  setPlayParams = (source) => {
    this.setState({
      isPlaying: true
    })
    this.video = new Aliplayer({
        "id": "player-con",
        "source": source || "//player.alicdn.com/video/aliyunmedia.mp4",
        "width": "100%",
        "autoplay": true,
        "isLive": false,
        "rePlay": false,
        "playsinline": true,
        "preload": true,
        "controlBarVisibility": "hover",
        "useH5Prism": true,
        "WebView": "allowsInlineMediaPlayback",
        "x5_video_position": "bottom"
      }, function (player) {
        player._switchLevel = 0;
      }
    );
  }
  handlerDefault = (e) => {
    e.stopPropagation();
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <div id="js-player-layer"
           className={isPlaying ? "player-layer active" :
             "player-layer"}
           onClick={this.handlerClose.bind(this)}
           onTouchStart={this.handlerStart}
           onTouchMove={this.handlerMove}
           onTouchEnd={this.handlerEnd}
           onTouchCancel={this.handlerEnd}>
        <div className="prism-player" id="player-con"
             onClick={(e) => this.handlerDefault(e)}/>
      </div>
    );
  }
}
