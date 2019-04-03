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

var _botLog = require('./bot-log.svg');

var _botLog2 = _interopRequireDefault(_botLog);

var _botTitle = require('./bot-title.svg');

var _botTitle2 = _interopRequireDefault(_botTitle);

var _layer = require('../Home/layer');

var _layer2 = _interopRequireDefault(_layer);

var _Player = require('../Player');

var _Player2 = _interopRequireDefault(_Player);

var _interview = require('./interview.png');

var _interview2 = _interopRequireDefault(_interview);

var _interviewPlan = require('./interviewPlan.png');

var _interviewPlan2 = _interopRequireDefault(_interviewPlan);

var _positionConsult = require('./positionConsult.png');

var _positionConsult2 = _interopRequireDefault(_positionConsult);

var _ssc = require('./ssc.png');

var _ssc2 = _interopRequireDefault(_ssc);

var _makeSure = require('./makeSure.png');

var _makeSure2 = _interopRequireDefault(_makeSure);

var _Bot = require('./Bot.svg');

var _Bot2 = _interopRequireDefault(_Bot);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var botVedio = [
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/intentionBOT.mp4',
    },
    pic: _makeSure2.default,
    name: '意向确认',
    t: 'before_login_viedo_bot_interview_fix_up',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/SSCBOT.mp4',
    },
    pic: _ssc2.default,
    name: 'SSC',
    t: 'before_login_viedo_ssc_bot',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/interviewBOT.mp4',
    },
    pic: _interview2.default,
    name: '面试',
    t: 'before_login_viedo_bot_intention_confirmation',
  },
  {
    name: 'bot',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/consultBOT.mp4',
    },
    pic: _positionConsult2.default,
    name: '职位咨询',
    t: 'before_login_viedo_bot_job_consulation',
  },
  {
    vedio: {
      source: '//ic-material.oss-cn-shanghai.aliyuncs.com/videofinalversion/scheduleBOT.mp4',
    },
    pic: _interviewPlan2.default,
    name: '面试安排',
    t: 'before_login_viedo_bot_interview',
  },
];

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
      (_this.handlerPlay = function(parmas) {
        var ApplyLayer = (0, _layer2.default)(function(_ref2) {
          var destroy = _ref2.destroy;
          return _react2.default.createElement(_Player2.default, {
            parmas: parmas,
            destroy: destroy,
          });
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
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('page page-botready', { reset: this.props.running }),
          },
          _react2.default.createElement('img', { className: 'logo', src: _botLog2.default }),
          _react2.default.createElement('img', { className: 'title', src: _botTitle2.default }),
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('bot-contain', { reset: this.props.running }),
            },
            botVedio.map(function(item, index) {
              return index === 3
                ? _react2.default.createElement(
                    'div',
                    { key: index, className: 'bot-item bot' },
                    _react2.default.createElement('img', { src: _Bot2.default })
                  )
                : _react2.default.createElement(
                    'div',
                    {
                      key: index,
                      className: 'bot-item',
                      onClick: function onClick() {
                        return _this2.handlerPlay(item.vedio);
                      },
                    },
                    _react2.default.createElement('img', { src: item.pic })
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
