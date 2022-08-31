"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      primary = _ref.primary,
      secondary = _ref.secondary,
      editor = _ref.editor,
      outline = _ref.outline,
      twClasses = _ref.twClasses,
      onClick = _ref.onClick,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: type ? type : "button",
    onClick: onClick,
    disabled: disabled,
    className: (0, _classnames.default)(_ButtonModule.default.button, _defineProperty({}, _ButtonModule.default.primary, primary), _defineProperty({}, _ButtonModule.default.editor, editor), _defineProperty({}, _ButtonModule.default.secondary, secondary), _defineProperty({}, _ButtonModule.default.outline, outline)) + " ".concat(twClasses ? twClasses : "")
  }, children);
};

var _default = Button;
exports.default = _default;