"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/Button',
  component: _Button.default,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {//    backgroundColor: { control: 'color' },
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Primary = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.Primary = Primary;
Primary.args = {
  primary: true,
  children: "text",
  onClick: function onClick() {
    return console.log("Hello World");
  }
};