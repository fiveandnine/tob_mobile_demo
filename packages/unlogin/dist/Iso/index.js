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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

var _title = require('./title1.svg');

var _title2 = _interopRequireDefault(_title);

var _title3 = require('./title2.svg');

var _title4 = _interopRequireDefault(_title3);

var _iso = require('./iso.png');

var _iso2 = _interopRequireDefault(_iso);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _class = (function(_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(_class, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('page page-iso', { reset: this.props.running }) },
          _react2.default.createElement('img', { className: 'title', src: _title2.default }),
          _react2.default.createElement('img', { className: 'title', src: _title4.default }),
          _react2.default.createElement(
            'div',
            { className: 'des' },
            'HR\u9886\u57DF\u56FD\u5185\u9996\u5BB6\u901A\u8FC7UKAS\u3001ISO27001\u8BA4\u8BC1'
          ),
          _react2.default.createElement(
            'div',
            { className: 'des' },
            '\u5E76\u83B7\u5F97\u4FE1\u606F\u7CFB\u7EDF\u5B89\u5168\u7B49\u7EA7\u4FDD\u62A4\u5907\u6848\u8BC1\u660E'
          ),
          _react2.default.createElement('img', { className: 'iso', src: _iso2.default })
        );
      },
    },
  ]);
  return _class;
})(_react.PureComponent);

exports.default = _class;
