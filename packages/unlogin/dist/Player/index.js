'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _class = (function(_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))
      )),
      _this)),
      (_this.video = null),
      (_this.setPlayParams = function(parmas) {
        _this.video = new Aliplayer(
          (0, _assign2.default)(
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
      }),
      (_this.handlerDefault = function(e) {
        e.stopPropagation();
      }),
      (_this.handlerClose = function() {
        _this.props.destroy && _this.props.destroy();
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(_class, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setPlayParams(this.props.parmas);
      },
    },
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'player-layer' },
          _react2.default.createElement('i', { className: 'close-play', onClick: this.handlerClose }),
          _react2.default.createElement('div', { className: 'prism-player', id: 'player-con' })
        );
      },
    },
  ]);
  return _class;
})(_react.PureComponent);

exports.default = _class;
