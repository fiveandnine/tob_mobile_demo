'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _logo = require('./logo.png');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function() {
  return _react2.default.createElement(
    'div',
    { className: 'page page-partner' },
    _react2.default.createElement('div', { className: 'title' }, '\u5BA2\u6237\u4FE1\u4EFB'),
    _react2.default.createElement('img', { className: 'logo-milt', src: _logo2.default })
  );
};
