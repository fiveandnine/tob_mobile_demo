import React, { PureComponent } from 'react';
import './style.scss';

export default class extends PureComponent {
  video = null;
  componentDidMount() {
    this.setPlayParams(this.props.parmas);
  }
  setPlayParams = parmas => {
    this.video = new Aliplayer(
      Object.assign(
        {
          id: 'player-con',
          source: '//player.alicdn.com/video/aliyunmedia.mp4',
          width: '100%',
          autoplay: true,
          isLive: false,
          rePlay: false,
          playsinline: true,
          preload: true,
          controlBarVisibility: 'hover',
          useH5Prism: true,
          WebView: 'allowsInlineMediaPlayback',
          x5_video_position: 'bottom',
        },
        parmas
      ),
      function(player) {
        player._switchLevel = 0;
      }
    );
  };
  handlerDefault = e => {
    e.stopPropagation();
  };
  handlerClose = () => {
    this.props.destroy && this.props.destroy();
  };

  render() {
    return (
      <div className="player-layer">
        <i className="close-play" onClick={this.handlerClose} />
        <div className="prism-player" id="player-con" />
      </div>
    );
  }
}
