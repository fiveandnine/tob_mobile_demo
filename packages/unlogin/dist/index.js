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

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Aikey = require('./Aikey');

var _Aikey2 = _interopRequireDefault(_Aikey);

var _Botready = require('./Botready');

var _Botready2 = _interopRequireDefault(_Botready);

var _Plan = require('./Plan');

var _Plan2 = _interopRequireDefault(_Plan);

var _Success = require('./Success');

var _Success2 = _interopRequireDefault(_Success);

var _Iso = require('./Iso');

var _Iso2 = _interopRequireDefault(_Iso);

var _Partner = require('./Partner');

var _Partner2 = _interopRequireDefault(_Partner);

var _contain = require('./Apply/contain');

var _contain2 = _interopRequireDefault(_contain);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name: unlogin ;
 * @author: admin ;
 * @description: tob未登录引导页 ;
 * */
var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      index: 0
    }, _this.handlerChange = function (index) {
      _this.setState({ index: index });
    }, _this.handlerSubmit = function () {
      _this.setState({ index: _this.state.index + 1 });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 加入阿里云视频
      var scriptAli = document.createElement("script");
      scriptAli.src = 'https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js';
      document.body.appendChild(scriptAli);
      var linkAli = document.createElement("link");
      linkAli.setAttribute('rel', 'stylesheet');
      linkAli.href = 'https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css';
      document.body.appendChild(linkAli);
    }
  }, {
    key: 'render',
    value: function render() {
      var index = this.state.index;
      var ApplyPage = this.props.ApplyPage;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { type: index, ApplyPage: ApplyPage }),
        _react2.default.createElement(
          _Page2.default,
          { className: 'unlogin screen',
            index: this.state.index,
            onChange: this.handlerChange },
          _react2.default.createElement(_Home2.default, null),
          _react2.default.createElement(_Aikey2.default, null),
          _react2.default.createElement(_Botready2.default, null),
          _react2.default.createElement(_Plan2.default, null),
          _react2.default.createElement(_Success2.default, null),
          _react2.default.createElement(_Iso2.default, null),
          _react2.default.createElement(_Partner2.default, null),
          _react2.default.createElement(
            _contain2.default,
            null,
            _react2.default.createElement(ApplyPage, { onSubmit: this.handlerSubmit })
          )
        )
      );
    }
  }]);
  return _class;
}(_react.PureComponent);

exports.default = _class;