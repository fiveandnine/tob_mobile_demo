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

var _redpocket = require('./redpocket.svg');

var _redpocket2 = _interopRequireDefault(_redpocket);

var _moments = require('./moments.png');

var _moments2 = _interopRequireDefault(_moments);

var _wechat = require('./wechat.png');

var _wechat2 = _interopRequireDefault(_wechat);

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
      (_this.handlerShare = function() {}),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(_class, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'show-module-body' },
          _react2.default.createElement('img', { className: 'logo', src: _redpocket2.default }),
          _react2.default.createElement('div', { className: 'title' }, '\u5206\u4EAB\u9886\u7EA2\u5305'),
          _react2.default.createElement(
            'div',
            { className: 'title-des title-des-red' },
            _react2.default.createElement('div', null, '\u5206\u4EAB\u5230\u670B\u53CB\u5708\uFF0C\u9080TA\u514D\u8D39\u4F53\u9A8C'),
            _react2.default.createElement('div', null, '\u60A8\u53EF\u9886\u53D6\u968F\u673A\u7EA2\u53051\u4E2A\uFF01')
          ),
          _react2.default.createElement(
            'div',
            { className: 'share' },
            _react2.default.createElement(
              'div',
              { className: 'share-item' },
              _react2.default.createElement(
                'div',
                { className: 'share-logo' },
                _react2.default.createElement('img', { src: _wechat2.default })
              ),
              _react2.default.createElement('div', { className: 'share-title' }, '\u670B\u53CB\u5708')
            ),
            _react2.default.createElement(
              'div',
              { className: 'share-item' },
              _react2.default.createElement(
                'div',
                { className: 'share-logo' },
                _react2.default.createElement('img', { src: _moments2.default })
              ),
              _react2.default.createElement('div', { className: 'share-title' }, '\u5FAE\u4FE1\u597D\u53CB')
            )
          ),
          _react2.default.createElement('i', { className: 'close', onClick: this.props.destroy })
        );
      },
    },
  ]);
  return _class;
})(_react.PureComponent);

exports.default = _class;
