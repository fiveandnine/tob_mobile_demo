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

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _Apply = require('../Apply');

var _Apply2 = _interopRequireDefault(_Apply);

var _Player = require('../Player');

var _Player2 = _interopRequireDefault(_Player);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.video = null, _this.handlerClick = function () {
      var ApplyPage = _this.props.ApplyPage,
          ApplyLayer = (0, _layer2.default)(function (_ref2) {
        var destroy = _ref2.destroy;
        return _react2.default.createElement(
          _Apply2.default,
          null,
          _react2.default.createElement('i', {
            className: 'close', onClick: destroy }),
          _react2.default.createElement(ApplyPage, {
            onSubmit: destroy })
        );
      });

      new ApplyLayer();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'handlerPlay',
    value: function handlerPlay(parmas) {
      this.player.setPlayParams(parmas);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'page page-home' },
        _react2.default.createElement('span', { className: 'slogan' }),
        _react2.default.createElement('span', { className: 'slogan-sub' }),
        _react2.default.createElement(
          'div',
          { className: 'bottom' },
          _react2.default.createElement(
            'button',
            { className: 'button',
              onClick: this.handlerPlay.bind(this, '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentstrategy.mp4') },
            '\u6570\u5B57\u5316\u62DB\u8058'
          ),
          _react2.default.createElement(
            'button',
            { className: 'button',
              onClick: this.handlerPlay.bind(this, '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentstrategy.mp4') },
            '\u4EBA\u624D\u6218\u7565\u843D\u5730\u65B9\u6848'
          ),
          _react2.default.createElement(
            'span',
            { className: 'button-login',
              onClick: this.handlerClick },
            '\u8D26\u53F7\u767B\u5F55'
          )
        ),
        _react2.default.createElement(_Player2.default, { ref: function ref(child) {
            _this2.player = child;
          } })
      );
    }
  }]);
  return _class;
}(_react.PureComponent);

exports.default = _class;
;