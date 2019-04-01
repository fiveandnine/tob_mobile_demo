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

var _success = require('./success.svg');

var _success2 = _interopRequireDefault(_success);

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
          _react2.default.createElement('img', { className: 'logo', src: _success2.default }),
          _react2.default.createElement('div', { className: 'title' }, '\u63D0\u4EA4\u6210\u529F'),
          _react2.default.createElement(
            'div',
            { className: 'title-des' },
            '\u6211\u4EEC\u4F1A\u5728\u4E00\u4E2A\u5DE5\u4F5C\u65E5\u5185\u8054\u7CFB\u60A8'
          ),
          _react2.default.createElement(
            'div',
            { className: 'des' },
            '\u5206\u4EAB\u7ED9\u597D\u53CB\uFF0C\u5E2ETA\u62A2\u5360\u514D\u8D39\u4F7F\u7528\u673A\u4F1A\u6BCF\u6210\u529F\u63A8\u8350\u4E00\u4F4D\uFF0C\u60A8\u90FD\u5C06\u83B7\u5F97\u5FAE\u4FE1\u7EA2\u5305'
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
