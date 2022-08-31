"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTheme = exports.extend = exports.applyTheme = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapTheme = function mapTheme(variables) {
  var newObj = {};
  Object.keys(variables).forEach(function (key) {
    newObj["--color-".concat(key.toString())] = variables[key];
  });
  return newObj;
};

exports.mapTheme = mapTheme;

var applyTheme = function applyTheme(theme) {
  var themeObject = mapTheme(theme);
  if (!themeObject) return;
  var root = document.documentElement;
  Object.keys(themeObject).forEach(function (property) {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

exports.applyTheme = applyTheme;

var extend = function extend(extending, newTheme) {
  return _objectSpread(_objectSpread({}, extending), newTheme);
};

exports.extend = extend;