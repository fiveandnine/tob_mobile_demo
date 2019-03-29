'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.video = null, _this.state = {
      isPlaying: false,
      source: null
    }, _this.handlerStart = function (e) {
      e.stopPropagation();
      return false;
    }, _this.handlerMove = function (e) {
      e.stopPropagation();
      return false;
    }, _this.handlerEnd = function (e) {
      e.stopPropagation();
      return false;
    }, _this.setPlayParams = function (source) {
      _this.setState({
        isPlaying: true
      });
      _this.video = new Aliplayer({
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
      });
    }, _this.handlerDefault = function (e) {
      e.stopPropagation();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 加入阿里云视频
      var scriptAli = document.createElement("script");
      scriptAli.src = 'https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js';
      document.body.appendChild(scriptAli);
      var linkAli = document.createElement("link");
      linkAli.setAttribute('rel', 'stylesheet');
      linkAli.href = 'https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css';
      document.body.appendChild(linkAli);

      var source = this.props.source;

      if (source) {
        this.setPlayParams(source);
      }
    }
  }, {
    key: 'handlerClose',
    value: function handlerClose() {
      this.setState({ isPlaying: false });
      document.querySelector('#player-con').remove();
      var aliContainer = document.createElement("div");
      aliContainer.setAttribute("id", "player-con");
      aliContainer.setAttribute("class", "prism-player");
      document.querySelector('#js-player-layer').appendChild(aliContainer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isPlaying = this.state.isPlaying;

      return _react2.default.createElement(
        'div',
        { id: 'js-player-layer',
          className: isPlaying ? "player-layer active" : "player-layer",
          onClick: this.handlerClose.bind(this),
          onTouchStart: this.handlerStart,
          onTouchMove: this.handlerMove,
          onTouchEnd: this.handlerEnd,
          onTouchCancel: this.handlerEnd },
        _react2.default.createElement('div', { className: 'prism-player', id: 'player-con',
          onClick: function onClick(e) {
            return _this2.handlerDefault(e);
          } })
      );
    }
  }]);
  return _class;
}(_react.PureComponent);

exports.default = _class;