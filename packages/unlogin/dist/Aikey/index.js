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

var _AIslogan = require('./AIslogan.svg');

var _AIslogan2 = _interopRequireDefault(_AIslogan);

var _AIKey = require('./AIKey.svg');

var _AIKey2 = _interopRequireDefault(_AIKey);

var _positionPortrait = require('./positionPortrait.svg');

var _positionPortrait2 = _interopRequireDefault(_positionPortrait);

var _resumePortrait = require('./resumePortrait.svg');

var _resumePortrait2 = _interopRequireDefault(_resumePortrait);

var _talentquality = require('./talentquality.svg');

var _talentquality2 = _interopRequireDefault(_talentquality);

var _introduction = require('./introduction.svg');

var _introduction2 = _interopRequireDefault(_introduction);

var _aits = require('./aits.svg');

var _aits2 = _interopRequireDefault(_aits);

var _layer = require('../Home/layer');

var _layer2 = _interopRequireDefault(_layer);

var _Player = require('../Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//  ai为钥匙
var Aikey = [
  {
    logo: _positionPortrait2.default,
    subTitle: '岗位画像',
    describe: ['专家+数据精准描绘岗位需求', '是招对人的坚实基础'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/JDimage.mp4',
    },
    t: 'before_login_viedo_job_portrait',
  },
  {
    logo: _resumePortrait2.default,
    subTitle: '人才画像',
    describe: ['更全面、更立体的候选人信息', '是招对人的重要保证'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentimage.mp4',
    },
    t: 'before_login_viedo_talent_portrait',
  },
  {
    logo: _aits2.default,
    subTitle: 'AiTS',
    describe: ['AI赋能招聘流程管理系统', '全流程提升招聘效能'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/AiTS.mp4',
    },
    t: 'before_login_viedo_aits',
  },
  {
    logo: _talentquality2.default,
    subTitle: '人才质量',
    describe: ['建立人才质量标准辅助决策', '提高招对人的准确率'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentquality.mp4',
    },
    t: 'before_login_viedo_talent_quality',
  },
  {
    logo: _introduction2.default,
    subTitle: '行业洞察',
    describe: ['宏观展现行业人才数据动态', '洞悉人才流动趋势'],
    type: 'ali',
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/talentdata.mp4',
    },
    t: 'before_login_viedo_industry_bi',
  },
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
      key: 'handlerPlay',
      value: function handlerPlay(parmas) {
        var ApplyLayer = (0, _layer2.default)(function(_ref) {
          var destroy = _ref.destroy;
          return _react2.default.createElement(_Player2.default, { parmas: parmas, destroy: destroy });
        });
        new ApplyLayer({ className: 'show-module' });
      },
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(prop) {
        console.log(prop.running);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('page page-aikey', { reset: this.props.running }) },
          _react2.default.createElement('img', { className: 'logo', src: _AIKey2.default }),
          _react2.default.createElement('img', { className: 'title', src: _AIslogan2.default }),
          _react2.default.createElement(
            'div',
            { className: 'Aicard-contain' },
            Aikey.map(function(item, index) {
              return _react2.default.createElement(
                'div',
                { className: 'Aicard', key: index },
                _react2.default.createElement('img', { className: 'Aicard-logo', src: item.logo }),
                _react2.default.createElement(
                  'div',
                  { className: 'AIcard-title', onClick: _this2.handlerPlay.bind(_this2, item.vedio) },
                  item.subTitle
                )
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
