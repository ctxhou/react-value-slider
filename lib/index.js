'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValueSlider = function (_Component) {
  _inherits(ValueSlider, _Component);

  function ValueSlider(props) {
    _classCallCheck(this, ValueSlider);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValueSlider).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.changeValue = _this.changeValue.bind(_this);
    _this.state = {
      value: 0
    };
    return _this;
  }

  _createClass(ValueSlider, [{
    key: 'onChange',
    value: function onChange(e) {
      var data = this.props.data;

      var value = e.target.value;
      this.setState({ value: value });
      this.props.onChange(data[value]);
    }
  }, {
    key: 'changeValue',
    value: function changeValue(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var data = _props.data;
      var style = _props.style;
      var value = this.state.value;

      return _react2.default.createElement('input', { type: 'range',
        name: 'points',
        min: '0',
        max: data.length - 1,
        value: value,
        style: style,
        onChange: this.onChange });
    }
  }]);

  return ValueSlider;
}(_react.Component);

exports.default = ValueSlider;
module.exports = exports['default'];