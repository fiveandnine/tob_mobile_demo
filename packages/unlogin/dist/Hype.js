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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            scale: 1
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                name = _props.name,
                header = _props.header;

            var scriptDom = document.createElement('script');
            scriptDom.type = "text/javascript";
            scriptDom.charSet = "utf-8";
            scriptDom.src = header + '/' + name + '/' + name + '.hyperesources/' + name + '_hype_generated_script.js';
            this.el.appendChild(scriptDom);
            var callback = function callback() {
                if (window.HYPE && window.HYPE.documents[name].isPlayingTimelineNamed()) {
                    var scale = document.documentElement.clientWidth / _this2.el.clientWidth;
                    _this2.setState({
                        scale: document.documentElement.clientHeight <= 553 ? scale * 0.8 : Math.min(1, scale)
                    });
                    _this2.animateControl();
                } else {
                    (0, _raf2.default)(callback);
                }
            };
            callback();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.running != this.props.running) {
                this.animateControl();
            }
        }
    }, {
        key: 'animateControl',
        value: function animateControl() {
            var _props2 = this.props,
                running = _props2.running,
                name = _props2.name;

            var hype = window.HYPE.documents[name];
            if (hype) {
                hype[running ? 'playTimelineNamed' : 'pauseTimelineNamed']();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props3 = this.props,
                className = _props3.className,
                name = _props3.name;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(className) },
                _react2.default.createElement('div', { id: name + '_hype_container', style: {
                        transform: 'scale(' + this.state.scale + ')'
                    }, ref: function ref(el) {
                        return _this3.el = el;
                    } })
            );
        }
    }]);
    return _class;
}(_react.PureComponent);
/*<Hype  className="animation" header={hypeHeader} name="bannerdonghua" running={running}/>*/


exports.default = _class;