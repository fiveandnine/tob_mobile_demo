'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
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

var _layer = require('../Home/layer');

var _layer2 = _interopRequireDefault(_layer);

var _Apply = require('../Apply');

var _Apply2 = _interopRequireDefault(_Apply);

var _handlerSuccess = require('../ShareModule/handlerSuccess');

var _handlerSuccess2 = _interopRequireDefault(_handlerSuccess);

var _handlerRedPacket = require('../ShareModule/handlerRedPacket');

var _handlerRedPacket2 = _interopRequireDefault(_handlerRedPacket);

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
      (_this.handlerSee = function() {
        var ApplyPage = _this.props.ApplyPage,
          ApplyLayer = (0, _layer2.default)(function(_ref2) {
            var destroy = _ref2.destroy;
            return _react2.default.createElement(
              _Apply2.default,
              null,
              _react2.default.createElement('i', { className: 'close', onClick: destroy }),
              _react2.default.createElement(ApplyPage, { onSubmit: destroy })
            );
          });

        new ApplyLayer();
      }),
      (_this.handlerShare = function() {
        var ApplyLayer = (0, _layer2.default)(function(_ref3) {
          var destroy = _ref3.destroy;
          return _react2.default.createElement(_handlerRedPacket2.default, { type: 'redpacket', destroy: destroy });
        });
        new ApplyLayer({ className: 'show-module' });
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(_class, [
    {
      key: 'render',
      value: function render() {
        var type = this.props.type;

        return _react2.default.createElement(
          'div',
          { className: type === 0 ? 'unlogin-page-header' : 'unlogin-page-header black' },
          _react2.default.createElement('i', { className: 'logo' }),
          type === 7
            ? _react2.default.createElement('span', { className: 'share', onClick: this.handlerShare }, '\u5206\u4EAB\u6709\u793C')
            : _react2.default.createElement('span', { className: 'see', onClick: this.handlerSee }, '\u4E00\u952E\u4F53\u9A8C')
        );
      },
    },
  ]);
  return _class;
})(_react.PureComponent);

exports.default = _class;
