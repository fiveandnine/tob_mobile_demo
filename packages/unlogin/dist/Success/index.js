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

var _title = require('./title1.svg');

var _title2 = _interopRequireDefault(_title);

var _title3 = require('./title2.svg');

var _title4 = _interopRequireDefault(_title3);

var _title5 = require('./title3.svg');

var _title6 = _interopRequireDefault(_title5);

var _title7 = require('./title4.svg');

var _title8 = _interopRequireDefault(_title7);

var _logo = require('./logo1.svg');

var _logo2 = _interopRequireDefault(_logo);

var _logo3 = require('./logo2.svg');

var _logo4 = _interopRequireDefault(_logo3);

var _logo5 = require('./logo3.svg');

var _logo6 = _interopRequireDefault(_logo5);

var _logo7 = require('./logo4.svg');

var _logo8 = _interopRequireDefault(_logo7);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var success = [
  { logo: _logo2.default, title: ['人才战略落地', '咨询服务'] },
  { logo: _logo4.default, title: ['系统平台', '技术支持'] },
  { logo: _logo6.default, title: ['雇主品牌', '建设'] },
  { logo: _logo8.default, title: ['校园招聘', '现场支持'] },
];

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
          { className: (0, _classnames2.default)('page page-success', { reset: this.props.running }) },
          _react2.default.createElement(
            'div',
            { className: 'title-contain' },
            _react2.default.createElement('img', { className: 'title', src: _title2.default }),
            _react2.default.createElement('img', { className: 'title', src: _title4.default }),
            _react2.default.createElement('img', { className: 'title', src: _title6.default }),
            _react2.default.createElement('img', { className: 'title', src: _title8.default })
          ),
          _react2.default.createElement(
            'div',
            { className: 'success-contain' },
            success.map(function(item, index) {
              return _react2.default.createElement(
                'div',
                { key: index, className: 'success-item' },
                _react2.default.createElement('img', { className: 'logo', src: item.logo }),
                item.title.map(function(_item, index) {
                  return _react2.default.createElement('div', { className: 'title', key: index }, _item);
                })
              );
            })
          )
        );
      },
    },
  ]);
  return _class;
})(_react.PureComponent);

exports.default = _class;
