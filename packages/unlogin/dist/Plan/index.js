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

var _title = require('./title1.svg');

var _title2 = _interopRequireDefault(_title);

var _title3 = require('./title2.svg');

var _title4 = _interopRequireDefault(_title3);

var _hunterIcon = require('./hunterIcon.svg');

var _hunterIcon2 = _interopRequireDefault(_hunterIcon);

var _icloudIcon = require('./icloudIcon.svg');

var _icloudIcon2 = _interopRequireDefault(_icloudIcon);

var _socialIcon = require('./socialIcon.svg');

var _socialIcon2 = _interopRequireDefault(_socialIcon);

var _campusIcon = require('./campusIcon.svg');

var _campusIcon2 = _interopRequireDefault(_campusIcon);

var _AIico = require('./AIico.svg');

var _AIico2 = _interopRequireDefault(_AIico);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var planData = [{
  title: '智慧猎头解决方案',
  pic: _hunterIcon2.default,
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/hunter.mp4'
  },
  t: 'before_login_plan_solve_headhunter'
}, {
  title: '云人才库解决方案',
  pic: _icloudIcon2.default,
  type: 'ali',
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentpool.mp4'
  },
  t: 'before_login_plan_solve_cloud_talent'
}, {
  title: '社交内推解决方案',
  pic: _socialIcon2.default,
  type: 'ali',
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/neitui.mp4'
  },
  t: 'before_login_plan_solve_interpolate'
}, {
  title: '数字化校招解决方案',
  pic: _campusIcon2.default,
  type: 'ali',
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/campus.mp4'
  },
  t: 'before_login_plan_solve_digit_school_recruit'
}, {
  title: 'AI官网解决方案',
  pic: _AIico2.default,
  des: "限量免费使用",
  type: 'ali',
  vedio: {
    source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/website.mp4'
  },
  t: 'before_login_viedo_plan_solve_ai_official'
}];

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page page-plan' },
        _react2.default.createElement('img', { className: 'title1', src: _title2.default }),
        _react2.default.createElement('img', { className: 'title2', src: _title4.default }),
        _react2.default.createElement(
          'div',
          { className: 'plan-contain' },
          planData.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { className: 'plan-item', key: index },
              _react2.default.createElement('img', { className: 'logo', src: item.pic }),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                item.title,
                _react2.default.createElement(
                  'div',
                  { className: 'des' },
                  item.des
                )
              )
            );
          })
        )
      );
    }
  }]);
  return _class;
}(_react.PureComponent);

exports.default = _class;