'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ReactDOM = require('react-dom/client');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$7 = "/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mr-\\[25px\\] {\n  margin-right: 25px;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-\\[27px\\] {\n  height: 27px;\n}\n.h-\\[23px\\] {\n  height: 23px;\n}\n.max-h-60 {\n  max-height: 15rem;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-80 {\n  width: 20rem;\n}\n.w-\\[63px\\] {\n  width: 63px;\n}\n.w-\\[23px\\] {\n  width: 23px;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.translate-y-1 {\n  --tw-translate-y: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-96 {\n  --tw-translate-x: -24rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-24 {\n  --tw-translate-y: -6rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-9 {\n  --tw-translate-x: 2.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.appearance-none {\n  appearance: none;\n}\n.place-items-center {\n  place-items: center;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rounded-2xl {\n  border-radius: 1rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-transparent {\n  border-color: transparent;\n}\n.bg-primary {\n  background-color: var(--color-primary);\n}\n.bg-secondary {\n  background-color: var(--color-secondary);\n}\n.bg-darkGray {\n  background-color: var(--color-darkGray);\n}\n.bg-mediumGray {\n  background-color: var(--color-mediumGray);\n}\n.bg-lightGray {\n  background-color: var(--color-lightGray);\n}\n.bg-actionBlue {\n  --tw-bg-opacity: 1;\n  background-color: rgb(47 119 238 / var(--tw-bg-opacity));\n}\n.bg-successLight {\n  --tw-bg-opacity: 1;\n  background-color: rgb(134 204 164 / var(--tw-bg-opacity));\n}\n.bg-successDark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 67 37 / var(--tw-bg-opacity));\n}\n.bg-errorLight {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 186 186 / var(--tw-bg-opacity));\n}\n.bg-errorDark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(91 0 0 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.bg-stone-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(187 247 208 / var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-amber-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 243 199 / var(--tw-bg-opacity));\n}\n.bg-blue-900\\/20 {\n  background-color: rgb(30 58 138 / 0.2);\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.pl-10 {\n  padding-left: 2.5rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.pt-16 {\n  padding-top: 4rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-normal {\n  font-weight: 400;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.text-primary {\n  color: var(--color-primary);\n}\n.text-secondary {\n  color: var(--color-secondary);\n}\n.text-darkGray {\n  color: var(--color-darkGray);\n}\n.text-mediumGray {\n  color: var(--color-mediumGray);\n}\n.text-lightGray {\n  color: var(--color-lightGray);\n}\n.text-actionBlue {\n  --tw-text-opacity: 1;\n  color: rgb(47 119 238 / var(--tw-text-opacity));\n}\n.text-successLight {\n  --tw-text-opacity: 1;\n  color: rgb(134 204 164 / var(--tw-text-opacity));\n}\n.text-successDark {\n  --tw-text-opacity: 1;\n  color: rgb(14 67 37 / var(--tw-text-opacity));\n}\n.text-errorLight {\n  --tw-text-opacity: 1;\n  color: rgb(252 186 186 / var(--tw-text-opacity));\n}\n.text-errorDark {\n  --tw-text-opacity: 1;\n  color: rgb(91 0 0 / var(--tw-text-opacity));\n}\n.text-stone-900 {\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-amber-900 {\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity));\n}\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n.text-blue-100 {\n  --tw-text-opacity: 1;\n  color: rgb(219 234 254 / var(--tw-text-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-0 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-black {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));\n}\n.ring-white {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\n.ring-opacity-5 {\n  --tw-ring-opacity: 0.05;\n}\n.ring-opacity-60 {\n  --tw-ring-opacity: 0.6;\n}\n.ring-offset-2 {\n  --tw-ring-offset-width: 2px;\n}\n.ring-offset-blue-400 {\n  --tw-ring-offset-color: #60a5fa;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\nhtml,\nbody {\n  margin: 0;\n  font-size: 16px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n.hover\\:bg-stone-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(214 211 209 / var(--tw-bg-opacity));\n}\n.hover\\:bg-white\\/\\[0\\.12\\]:hover {\n  background-color: rgb(255 255 255 / 0.12);\n}\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.focus\\:border-blue-300:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-stone-500:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(120 113 108 / var(--tw-ring-opacity));\n}\n.focus-visible\\:ring-white:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\n.focus-visible\\:ring-opacity-75:focus-visible {\n  --tw-ring-opacity: 0.75;\n}\n@media (min-width: 640px) {\n\n  .sm\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .sm\\:leading-5 {\n    line-height: 1.25rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:max-w-3xl {\n    max-width: 48rem;\n  }\n}\n";
styleInject(css_248z$7);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var css_248z$6 = "/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/html {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.container {\n  width: 100%;\n}@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}.pointer-events-none {\n  pointer-events: none;\n}.fixed {\n  position: fixed;\n}.absolute {\n  position: absolute;\n}.relative {\n  position: relative;\n}.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}.right-0 {\n  right: 0px;\n}.left-0 {\n  left: 0px;\n}.z-10 {\n  z-index: 10;\n}.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}.mt-3 {\n  margin-top: 0.75rem;\n}.mr-\\[25px\\] {\n  margin-right: 25px;\n}.mt-1 {\n  margin-top: 0.25rem;\n}.mb-2 {\n  margin-bottom: 0.5rem;\n}.mt-2 {\n  margin-top: 0.5rem;\n}.mr-3 {\n  margin-right: 0.75rem;\n}.block {\n  display: block;\n}.inline-block {\n  display: inline-block;\n}.flex {\n  display: flex;\n}.inline-flex {\n  display: inline-flex;\n}.table {\n  display: table;\n}.grid {\n  display: grid;\n}.h-screen {\n  height: 100vh;\n}.h-5 {\n  height: 1.25rem;\n}.h-\\[27px\\] {\n  height: 27px;\n}.h-\\[23px\\] {\n  height: 23px;\n}.max-h-60 {\n  max-height: 15rem;\n}.min-h-full {\n  min-height: 100%;\n}.w-full {\n  width: 100%;\n}.w-5 {\n  width: 1.25rem;\n}.w-80 {\n  width: 20rem;\n}.w-\\[63px\\] {\n  width: 63px;\n}.w-\\[23px\\] {\n  width: 23px;\n}.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}.max-w-md {\n  max-width: 28rem;\n}.shrink-0 {\n  flex-shrink: 0;\n}.translate-y-1 {\n  --tw-translate-y: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.-translate-x-96 {\n  --tw-translate-x: -24rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.-translate-y-24 {\n  --tw-translate-y: -6rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.translate-x-9 {\n  --tw-translate-x: 2.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.cursor-default {\n  cursor: default;\n}.cursor-pointer {\n  cursor: pointer;\n}.select-none {\n  -webkit-user-select: none;\n          user-select: none;\n}.appearance-none {\n  appearance: none;\n}.place-items-center {\n  place-items: center;\n}.items-center {\n  align-items: center;\n}.justify-start {\n  justify-content: flex-start;\n}.justify-end {\n  justify-content: flex-end;\n}.justify-center {\n  justify-content: center;\n}.justify-between {\n  justify-content: space-between;\n}.gap-2 {\n  gap: 0.5rem;\n}.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}.overflow-auto {\n  overflow: auto;\n}.overflow-y-auto {\n  overflow-y: auto;\n}.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.rounded-2xl {\n  border-radius: 1rem;\n}.rounded-lg {\n  border-radius: 0.5rem;\n}.rounded-md {\n  border-radius: 0.375rem;\n}.rounded {\n  border-radius: 0.25rem;\n}.rounded-xl {\n  border-radius: 0.75rem;\n}.rounded-full {\n  border-radius: 9999px;\n}.border {\n  border-width: 1px;\n}.border-2 {\n  border-width: 2px;\n}.border-solid {\n  border-style: solid;\n}.border-transparent {\n  border-color: transparent;\n}.bg-primary {\n  background-color: var(--color-primary);\n}.bg-secondary {\n  background-color: var(--color-secondary);\n}.bg-darkGray {\n  background-color: var(--color-darkGray);\n}.bg-mediumGray {\n  background-color: var(--color-mediumGray);\n}.bg-lightGray {\n  background-color: var(--color-lightGray);\n}.bg-actionBlue {\n  --tw-bg-opacity: 1;\n  background-color: rgb(47 119 238 / var(--tw-bg-opacity));\n}.bg-successLight {\n  --tw-bg-opacity: 1;\n  background-color: rgb(134 204 164 / var(--tw-bg-opacity));\n}.bg-successDark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 67 37 / var(--tw-bg-opacity));\n}.bg-errorLight {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 186 186 / var(--tw-bg-opacity));\n}.bg-errorDark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(91 0 0 / var(--tw-bg-opacity));\n}.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}.bg-stone-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity));\n}.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(187 247 208 / var(--tw-bg-opacity));\n}.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}.bg-amber-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 243 199 / var(--tw-bg-opacity));\n}.bg-blue-900\\/20 {\n  background-color: rgb(30 58 138 / 0.2);\n}.p-2 {\n  padding: 0.5rem;\n}.p-5 {\n  padding: 1.25rem;\n}.p-4 {\n  padding: 1rem;\n}.p-1 {\n  padding: 0.25rem;\n}.p-3 {\n  padding: 0.75rem;\n}.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}.pl-10 {\n  padding-left: 2.5rem;\n}.pr-4 {\n  padding-right: 1rem;\n}.pt-16 {\n  padding-top: 4rem;\n}.pt-4 {\n  padding-top: 1rem;\n}.pb-2 {\n  padding-bottom: 0.5rem;\n}.pb-5 {\n  padding-bottom: 1.25rem;\n}.pr-2 {\n  padding-right: 0.5rem;\n}.pl-3 {\n  padding-left: 0.75rem;\n}.text-left {\n  text-align: left;\n}.text-center {\n  text-align: center;\n}.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}.font-medium {\n  font-weight: 500;\n}.font-bold {\n  font-weight: 700;\n}.font-normal {\n  font-weight: 400;\n}.leading-tight {\n  line-height: 1.25;\n}.leading-5 {\n  line-height: 1.25rem;\n}.text-primary {\n  color: var(--color-primary);\n}.text-secondary {\n  color: var(--color-secondary);\n}.text-darkGray {\n  color: var(--color-darkGray);\n}.text-mediumGray {\n  color: var(--color-mediumGray);\n}.text-lightGray {\n  color: var(--color-lightGray);\n}.text-actionBlue {\n  --tw-text-opacity: 1;\n  color: rgb(47 119 238 / var(--tw-text-opacity));\n}.text-successLight {\n  --tw-text-opacity: 1;\n  color: rgb(134 204 164 / var(--tw-text-opacity));\n}.text-successDark {\n  --tw-text-opacity: 1;\n  color: rgb(14 67 37 / var(--tw-text-opacity));\n}.text-errorLight {\n  --tw-text-opacity: 1;\n  color: rgb(252 186 186 / var(--tw-text-opacity));\n}.text-errorDark {\n  --tw-text-opacity: 1;\n  color: rgb(91 0 0 / var(--tw-text-opacity));\n}.text-stone-900 {\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity));\n}.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.text-amber-900 {\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity));\n}.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity));\n}.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}.text-blue-100 {\n  --tw-text-opacity: 1;\n  color: rgb(219 234 254 / var(--tw-text-opacity));\n}.opacity-0 {\n  opacity: 0;\n}.opacity-100 {\n  opacity: 1;\n}.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.outline {\n  outline-style: solid;\n}.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.ring-0 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.ring-black {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));\n}.ring-white {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}.ring-opacity-5 {\n  --tw-ring-opacity: 0.05;\n}.ring-opacity-60 {\n  --tw-ring-opacity: 0.6;\n}.ring-offset-2 {\n  --tw-ring-offset-width: 2px;\n}.ring-offset-blue-400 {\n  --tw-ring-offset-color: #60a5fa;\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.duration-200 {\n  transition-duration: 200ms;\n}.duration-150 {\n  transition-duration: 150ms;\n}.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}.hover\\:bg-stone-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(214 211 209 / var(--tw-bg-opacity));\n}.hover\\:bg-white\\/\\[0\\.12\\]:hover {\n  background-color: rgb(255 255 255 / 0.12);\n}.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.focus\\:border-blue-300:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\n}.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.focus-visible\\:ring-stone-500:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(120 113 108 / var(--tw-ring-opacity));\n}.focus-visible\\:ring-white:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}.focus-visible\\:ring-opacity-75:focus-visible {\n  --tw-ring-opacity: 0.75;\n}@media (min-width: 640px) {\n\n  .sm\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .sm\\:leading-5 {\n    line-height: 1.25rem;\n  }\n}@media (min-width: 1024px) {\n\n  .lg\\:max-w-3xl {\n    max-width: 48rem;\n  }\n}";
styleInject(css_248z$6);

/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$9.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends$9({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;

  function handlePop() {
    action = Action.Pop;

    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: location
      });
    }
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {})); // Walk the route tree generating unique IDs where necessary so we are working
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant(route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
/**
 * @private
 */


function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to = typeof toArg === "string" ? parsePath(toArg) : _extends$9({}, toArg);
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response throw from an action/loader
 */

function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}

/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$8.apply(this, arguments);
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React__namespace;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React__namespace) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that " + "does not support useSyncExternalStore. The " + "use-sync-external-store shim will not work correctly. Upgrade " + "to a newer pre-release.");
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();

      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React__namespace ? (module => module.useSyncExternalStore)(React__namespace) : shim;

// Contexts for data routers
const DataStaticRouterContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataStaticRouterContext.displayName = "DataStaticRouterContext";
}

const DataRouterContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/React__namespace.createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-in-router-context
 */

function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return React__namespace.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || !match.route.index && match.pathnameBase !== matches[index - 1].pathnameBase);
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-navigate
 */


function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    matches
  } = React__namespace.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = React__namespace.useRef(false);
  React__namespace.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = React__namespace.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = React__namespace.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  return React__namespace.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let dataRouterStateContext = React__namespace.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = React__namespace.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (process.env.NODE_ENV !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : void 0;
  }

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg) {
    return /*#__PURE__*/React__namespace.createElement(LocationContext.Provider, {
      value: {
        location: _extends$8({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("h2", null, "Unhandled Thrown Error!"), /*#__PURE__*/React__namespace.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/React__namespace.createElement("pre", {
    style: preStyles
  }, stack) : null, /*#__PURE__*/React__namespace.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/React__namespace.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/React__namespace.createElement("code", {
    style: codeStyles
  }, "errorElement"), " props on\xA0", /*#__PURE__*/React__namespace.createElement("code", {
    style: codeStyles
  }, "<Route>")));
}

class RenderErrorBoundary extends React__namespace.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/React__namespace.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataStaticRouterContext = React__namespace.useContext(DataStaticRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/React__namespace.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find a matching route for the current errors: " + errors) : invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/React__namespace.createElement(DefaultErrorElement, null) : null;

    let getChildren = () => /*#__PURE__*/React__namespace.createElement(RenderedRoute, {
      match: match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index + 1))
      }
    }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet); // Only wrap in an error boundary within data router usages when we have an
    // errorElement on this route.  Otherwise let it bubble up to an ancestor
    // errorElement


    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/React__namespace.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseLoaderData"] = "useLoaderData";
  DataRouterHook["UseActionData"] = "useActionData";
  DataRouterHook["UseRouteError"] = "useRouteError";
  DataRouterHook["UseNavigation"] = "useNavigation";
  DataRouterHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterHook["UseMatches"] = "useMatches";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));

function useDataRouterState(hookName) {
  let state = React__namespace.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? invariant(false, hookName + " must be used within a DataRouterStateContext") : invariant(false) : void 0;
  return state;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = React__namespace.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterHook.UseRouteError);
  let route = React__namespace.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1]; // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  }

  !route ? process.env.NODE_ENV !== "production" ? invariant(false, "useRouteError must be used inside a RouteContext") : invariant(false) : void 0;
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, "useRouteError can only be used on routes that contain a unique \"id\"") : invariant(false) : void 0; // Otherwise look for errors from our data router state

  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/components/route
 */
function Route(_props) {
  process.env.NODE_ENV !== "production" ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/routers/router
 */
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : invariant(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  process.env.NODE_ENV !== "production" ? warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/React__namespace.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/React__namespace.createElement(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/components/routes
 */
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = React__namespace.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

new Promise(() => {});
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  React__namespace.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/React__namespace.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === React__namespace.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }

    !(element.type === Route) ? process.env.NODE_ENV !== "production" ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
    let treePath = [...parentPath, index];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}

/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends$7() {
  _extends$7 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$7.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method,
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
      _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"];
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */

function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = React__namespace.useRef();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = React__namespace.useState({
    action: history.action,
    location: history.location
  });
  React__namespace.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React__namespace.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (process.env.NODE_ENV !== "production") ;
/**
 * The public API for rendering a history-aware <a>.
 */

const Link$1 = /*#__PURE__*/React__namespace.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose$7(_ref4, _excluded);

  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React__namespace.createElement("a", _extends$7({}, rest, {
      href: href,
      onClick: reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (process.env.NODE_ENV !== "production") {
  Link$1.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/React__namespace.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose$7(_ref5, _excluded2);

  let path = useResolvedPath(to);
  let match = useMatch({
    path: path.pathname,
    end,
    caseSensitive
  });
  let routerState = React__namespace.useContext(DataRouterStateContext);
  let nextLocation = routerState == null ? void 0 : routerState.navigation.location;
  let nextPath = useResolvedPath(nextLocation || "");
  let nextMatch = React__namespace.useMemo(() => nextLocation ? matchPath({
    path: path.pathname,
    end,
    caseSensitive
  }, nextPath.pathname) : null, [nextLocation, path.pathname, caseSensitive, end, nextPath.pathname]);
  let isPending = nextMatch != null;
  let isActive = match != null;
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/React__namespace.createElement(Link$1, _extends$7({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  return /*#__PURE__*/React__namespace.createElement(FormImpl, _extends$7({}, props, {
    ref: ref
  }));
});

if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}

const FormImpl = /*#__PURE__*/React__namespace.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative
  } = _ref6,
      props = _objectWithoutPropertiesLoose$7(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    submit(submitter || event.currentTarget, {
      method,
      replace,
      relative
    });
  };

  return /*#__PURE__*/React__namespace.createElement("form", _extends$7({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}

if (process.env.NODE_ENV !== "production") ; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React__namespace.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}

function useSubmitImpl(fetcherKey, routeId) {
  let dataRouterContext = React__namespace.useContext(DataRouterContext);
  !dataRouterContext ? process.env.NODE_ENV !== "production" ? invariant(false, "useSubmitImpl must be used within a Data Router") : invariant(false) : void 0;
  let {
    router
  } = dataRouterContext;
  let defaultAction = useFormAction();
  return React__namespace.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "No routeId available for useFetcher()") : invariant(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let routeContext = React__namespace.useContext(RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let resolvedAction = action != null ? action : ".";
  let path = useResolvedPath(resolvedAction, {
    relative
  }); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927

  let location = useLocation();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }

  return createPath(path);
}

const e$3=typeof window=="undefined"||typeof document=="undefined";

let s$8=e$3?React.useEffect:React.useLayoutEffect;

function s$7(e){let r=React.useRef(e);return s$8(()=>{r.current=e;},[e]),r}

function i$3(e,o){let[u,t]=React.useState(e),r=s$7(e);return s$8(()=>t(r.current),[r,t,...o]),u}

function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

function m$3(){let n=[],i=[],r={enqueue(e){i.push(e);},addEventListener(e,t,a,o){return e.addEventListener(t,a,o),r.add(()=>e.removeEventListener(t,a,o))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t$1={current:!0};return t(()=>{t$1.current&&e[0]();}),r.add(()=>{t$1.current=!1;})},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0){let[a]=n.splice(t,1);a();}}},dispose(){for(let e of n.splice(0))e();},async workQueue(){for(let e of i.splice(0))await e();}};return r}

function p$5(){let[e]=React.useState(m$3);return React.useEffect(()=>()=>e.dispose(),[e]),e}

let o$3=function(t){let e=s$7(t);return React__default["default"].useCallback((...r)=>e.current(...r),[e])};

let r$3={serverHandoffComplete:!1};function a$3(){let[e,f]=React.useState(r$3.serverHandoffComplete);return React.useEffect(()=>{e!==!0&&f(!0);},[e]),React.useEffect(()=>{r$3.serverHandoffComplete===!1&&(r$3.serverHandoffComplete=!0);},[]),e}

var u$5;let l$3=0;function r$2(){return ++l$3}let I$2=(u$5=React__default["default"].useId)!=null?u$5:function(){let n=a$3(),[e,o]=React__default["default"].useState(n?r$2:null);return s$8(()=>{e===null&&o(r$2());},[e]),e!=null?""+e:void 0};

function u$4(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$4),t}

function e$2(r){return e$3?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

let m$2=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T$3=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(T$3||{}),M$5=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(M$5||{}),b$1=(r=>(r[r.Previous=-1]="Previous",r[r.Next=1]="Next",r))(b$1||{});function d$2(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(m$2))}var N$1=(r=>(r[r.Strict=0]="Strict",r[r.Loose=1]="Loose",r))(N$1||{});function F$6(e,t=0){var r;return e===((r=e$2(e))==null?void 0:r.body)?!1:u$4(t,{[0](){return e.matches(m$2)},[1](){let l=e;for(;l!==null;){if(l.matches(m$2))return !0;l=l.parentElement;}return !1}})}function h$4(e){e==null||e.focus({preventScroll:!0});}let w$2=["textarea","input"].join(",");function H$2(e){var t,r;return (r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,w$2))!=null?r:!1}function S$2(e,t=r=>r){return e.slice().sort((r,l)=>{let o=t(r),s=t(l);if(o===null||s===null)return 0;let n=o.compareDocumentPosition(s);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O(e,t,r=!0,l=null){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?r?S$2(e):e:d$2(e);l=l!=null?l:o.activeElement;let n=(()=>{if(t&5)return 1;if(t&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),E=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(l))-1;if(t&4)return Math.max(0,s.indexOf(l))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=t&32?{preventScroll:!0}:{},f=0,i=s.length,u;do{if(f>=i||f+i<=0)return 0;let a=E+f;if(t&16)a=(a+i)%i;else {if(a<0)return 3;if(a>=i)return 1}u=s[a],u==null||u.focus(x),f+=n;}while(u!==o.activeElement);return t&6&&H$2(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}

function d$1(e,r,n){let o=s$7(r);React.useEffect(()=>{function t(u){o.current(u);}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n]);}

function L$1(f,m,i=!0){let l=React.useRef(!1);React.useEffect(()=>{requestAnimationFrame(()=>{l.current=i;});},[i]);function c(t,E){if(!l.current||t.defaultPrevented)return;let s=function r(e){return typeof e=="function"?r(e()):Array.isArray(e)||e instanceof Set?e:[e]}(f),n=E(t);if(n!==null&&!!n.ownerDocument.documentElement.contains(n)){for(let r of s){if(r===null)continue;let e=r instanceof HTMLElement?r:r.current;if(e!=null&&e.contains(n))return}return !F$6(n,N$1.Loose)&&n.tabIndex!==-1&&t.preventDefault(),m(t,n)}}let u=React.useRef(null);d$1("mousedown",t=>{l.current&&(u.current=t.target);},!0),d$1("click",t=>{!u.current||(c(t,()=>u.current),u.current=null);},!0),d$1("blur",t=>c(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

function i$2(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return "button"}function s$6(t,e){let[n,u]=React.useState(()=>i$2(t));return s$8(()=>{u(i$2(t));},[t.type,t.as]),s$8(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button");},[n,e]),n}

let u$3=Symbol();function T$2(t,n=!0){return Object.assign(t,{[u$3]:n})}function y(...t){let n=React.useRef(t);React.useEffect(()=>{n.current=t;},[t]);let c=o$3(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$3]))?void 0:c}

function F$5({container:e,accept:t,walk:r,enabled:c=!0}){let o=React.useRef(t),l=React.useRef(r);React.useEffect(()=>{o.current=t,l.current=r;},[t,r]),s$8(()=>{if(!e||!c)return;let n=e$2(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode);},[e,c,o,l]);}

function f$3(r){throw new Error("Unexpected object: "+r)}var a$2=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a$2||{});function x$4(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f$3(r);}})();return d===-1?l:d}

var S$1=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S$1||{}),j$3=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j$3||{});function $$3({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T$1(t,r);if(n)return p$4(s,e,a,l);let u=o!=null?o:0;if(u&2){let{static:i=!1,...d}=s;if(i)return p$4(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=s;return u$4(i?0:1,{[0](){return null},[1](){return p$4({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return p$4(s,e,a,l)}function p$4(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m$1(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))typeof g=="boolean"&&(f=!0),g===!0&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "));}if(o===React.Fragment&&Object.keys(F$4(s)).length>0){if(!React.isValidElement(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return React.cloneElement(i,Object.assign({},T$1(i.props,F$4(m$1(s,["ref"]))),d,u,w$1(i.ref,u.ref)))}return React.createElement(o,Object.assign({},m$1(s,["ref"]),o!==React.Fragment&&u,o!==React.Fragment&&d),i)}function w$1(...r){return {ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}}function T$1(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&typeof o[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](n,...l){let s=e[o];for(let u of s){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l);}}});return t}function C$2(r){var t;return Object.assign(React.forwardRef(r),{displayName:(t=r.displayName)!=null?t:r.name})}function F$4(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function m$1(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}

function r$1(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i$1(l)?!1:t}function i$1(n){if(!n)return !1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return !1;e=e.previousElementSibling;}return !0}

function e$1(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f$2(t,s$5(r,i),o);return t}function s$5(n,r){return n?n+"["+r+"]":r}function f$2(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f$2(n,s$5(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):typeof t=="boolean"?n.push([r,t?"1":"0"]):typeof t=="string"?n.push([r,t]):typeof t=="number"?n.push([r,`${t}`]):t==null?n.push([r,""]):e$1(t,r,n);}function p$3(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(!!r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}

let a$1="div";var s$4=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s$4||{});let h$3=C$2(function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return $$3({ourProps:d,theirProps:r,slot:{},defaultTag:a$1,name:"Hidden"})});

let o$2=React.createContext(null);o$2.displayName="OpenClosedContext";var p$2=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(p$2||{});function s$3(){return React.useContext(o$2)}function C$1({value:t,children:n}){return React__default["default"].createElement(o$2.Provider,{value:t},n)}

var o$1=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$1||{});

function p$1(e,t,u){let[l,s]=React.useState(u),i=e!==void 0;return [i?e:l,o$3(r=>(i||s(r),t==null?void 0:t(r)))]}

function m(u,t){let e=React.useRef([]),r=o$3(u);React.useEffect(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t]);}

function s$2(e,r,n){let o=s$7(r);React.useEffect(()=>{function t(i){o.current(i);}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n]);}

var s$1=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s$1||{});function n$1(){let e=React.useRef(0);return s$2("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0);},!0),e}

function f$1(){let e=React.useRef(!1);return s$8(()=>(e.current=!0,()=>{e.current=!1;}),[]),e}

function n(...e){return React.useMemo(()=>e$2(...e),[...e])}

function E(n,e,a,t){let i=s$7(a);React.useEffect(()=>{n=n!=null?n:window;function r(o){i.current(o);}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t]);}

let N="div";var v$1=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(v$1||{});let fe$1=Object.assign(C$2(function(u,e){let l=React.useRef(null),o=y(l,e),{initialFocus:a,containers:r,features:n$2=30,...c}=u;a$3()||(n$2=1);let s=n(l);V$3({ownerDocument:s},Boolean(n$2&16));let j=x$3({ownerDocument:s,container:l,initialFocus:a},Boolean(n$2&2));G({ownerDocument:s,container:l,containers:r,previousActiveElement:j},Boolean(n$2&8));let k=n$1(),p=o$3(()=>{let T=l.current;!T||u$4(k.current,{[s$1.Forwards]:()=>O(T,T$3.First),[s$1.Backwards]:()=>O(T,T$3.Last)});}),A={ref:o};return React__default["default"].createElement(React__default["default"].Fragment,null,Boolean(n$2&4)&&React__default["default"].createElement(h$3,{as:"button",type:"button",onFocus:p,features:s$4.Focusable}),$$3({ourProps:A,theirProps:c,defaultTag:N,name:"FocusTrap"}),Boolean(n$2&4)&&React__default["default"].createElement(h$3,{as:"button",type:"button",onFocus:p,features:s$4.Focusable}))}),{features:v$1});function V$3({ownerDocument:t$1},u){let e=React.useRef(null);E(t$1==null?void 0:t$1.defaultView,"focusout",o=>{!u||e.current||(e.current=o.target);},!0),m(()=>{u||((t$1==null?void 0:t$1.activeElement)===(t$1==null?void 0:t$1.body)&&h$4(e.current),e.current=null);},[u]);let l=React.useRef(!1);React.useEffect(()=>(l.current=!1,()=>{l.current=!0,t(()=>{!l.current||(h$4(e.current),e.current=null);});}),[]);}function x$3({ownerDocument:t$1,container:u,initialFocus:e},l){let o=React.useRef(null),a=f$1();return m(()=>{if(!l)return;let r=u.current;!r||t(()=>{if(!a.current)return;let n=t$1==null?void 0:t$1.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===n){o.current=n;return}}else if(r.contains(n)){o.current=n;return}e!=null&&e.current?h$4(e.current):O(r,T$3.First)===M$5.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=t$1==null?void 0:t$1.activeElement;});},[l]),o}function G({ownerDocument:t,container:u,containers:e,previousActiveElement:l},o){let a=f$1();E(t==null?void 0:t.defaultView,"focus",r=>{if(!o||!a.current)return;let n=new Set(e==null?void 0:e.current);n.add(u);let c=l.current;if(!c)return;let s=r.target;s&&s instanceof HTMLElement?W(n,s)?(l.current=s,h$4(s)):(r.preventDefault(),r.stopPropagation(),h$4(c)):h$4(l.current);},!0);}function W(t,u){var e;for(let l of t)if((e=l.current)!=null&&e.contains(u))return !0;return !1}

let i=new Set,r=new Map;function u$2(t){t.setAttribute("aria-hidden","true"),t.inert=!0;}function l$2(t){let n=r.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert);}function M$4(t,n=!0){s$8(()=>{if(!n||!t.current)return;let o=t.current,a=e$2(o);if(!!a){i.add(o);for(let e of r.keys())e.contains(o)&&(l$2(e),r.delete(e));return a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;i.size===1&&(r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e));}}),()=>{if(i.delete(o),i.size>0)a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!r.has(e)){for(let f of i)if(e.contains(f))return;r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e);}});else for(let e of r.keys())l$2(e),r.delete(e);}}},[n]);}

let e=React.createContext(!1);function l$1(){return React.useContext(e)}function P(o){return React__default["default"].createElement(e.Provider,{value:o.force},o.children)}

function x$2(i){let u=l$1(),o=React.useContext(A),e=n(i),[r,f]=React.useState(()=>{if(!u&&o!==null||e$3)return null;let n=e==null?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(e===null)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return React.useEffect(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r));},[r,e]),React.useEffect(()=>{u||o!==null&&f(o.current);},[o,f,u]),r}let _=React.Fragment,U$1=C$2(function(u,o){let e=u,r=React.useRef(null),f=y(T$2(a=>{r.current=a;}),o),n$1=n(r),t$1=x$2(r),[l]=React.useState(()=>{var a;return e$3?null:(a=n$1==null?void 0:n$1.createElement("div"))!=null?a:null}),b=a$3(),p=React.useRef(!1);return s$8(()=>{if(p.current=!1,!(!t$1||!l))return t$1.contains(l)||(l.setAttribute("data-headlessui-portal",""),t$1.appendChild(l)),()=>{p.current=!0,t(()=>{var a;!p.current||!t$1||!l||(t$1.removeChild(l),t$1.childNodes.length<=0&&((a=t$1.parentElement)==null||a.removeChild(t$1)));});}},[t$1,l]),b?!t$1||!l?null:reactDom.createPortal($$3({ourProps:{ref:f},theirProps:e,defaultTag:_,name:"Portal"}),l):null}),j$2=React.Fragment,A=React.createContext(null),F$3=C$2(function(u,o){let{target:e,...r}=u,n={ref:y(o)};return React__default["default"].createElement(A.Provider,{value:e},$$3({ourProps:n,theirProps:r,defaultTag:j$2,name:"Popover.Group"}))}),$$2=Object.assign(U$1,{Group:F$3});

let d=React.createContext(null);function u$1(){let r=React.useContext(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u$1),t}return r}function k(){let[r,t]=React.useState([]);return [r.length>0?r.join(" "):void 0,React.useMemo(()=>function(e){let i=o$3(n=>(t(o=>[...o,n]),()=>t(o=>{let c=o.slice(),p=c.indexOf(n);return p!==-1&&c.splice(p,1),c}))),s=React.useMemo(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return React__default["default"].createElement(d.Provider,{value:s},e.children)},[t])]}let S="p",F$2=C$2(function(t,a){let e=u$1(),i=`headlessui-description-${I$2()}`,s=y(a);s$8(()=>e.register(i),[i,e.register]);let n=t,o={ref:s,...e.props,id:i};return $$3({ourProps:o,theirProps:n,slot:e.slot||{},defaultTag:S,name:e.name||"Description"})});

let a=React.createContext(()=>{});a.displayName="StackContext";var s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s||{});function x$1(){return React.useContext(a)}function M$3({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x$1(),o=o$3((...t)=>{r==null||r(...t),l(...t);});return s$8(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n);}},[o,e,n,u]),React__default["default"].createElement(a.Provider,{value:o},i)}

function o(){return /iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}

var Re$2=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(Re$2||{}),be$3=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(be$3||{});let Ae$3={[0](l,e){return l.titleId===e.id?l:{...l,titleId:e.id}}},M$2=React.createContext(null);M$2.displayName="DialogContext";function L(l){let e=React.useContext(M$2);if(e===null){let r=new Error(`<${l} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,L),r}return e}function Ee$3(l,e){React.useEffect(()=>{var p;if(!e||!l)return;let r=m$3();function t(n,d,m){let i=n.style.getPropertyValue(d);return Object.assign(n.style,{[d]:m}),r.add(()=>{Object.assign(n.style,{[d]:i});})}let o$1=l.documentElement,s=((p=l.defaultView)!=null?p:window).innerWidth-o$1.clientWidth;if(t(o$1,"overflow","hidden"),s>0){let n=o$1.clientWidth-o$1.offsetWidth,d=s-n;t(o$1,"paddingRight",`${d}px`);}if(o()){let n=window.pageYOffset;t(o$1,"position","fixed"),t(o$1,"marginTop",`-${n}px`),t(o$1,"width","100%"),r.add(()=>window.scrollTo(0,n));}return r.dispose},[l,e]);}function ve$3(l,e){return u$4(e.type,Ae$3,l,e)}let Oe$4="div",Ce$3=S$1.RenderStrategy|S$1.Static,Se$2=C$2(function(e,r){let{open:t,onClose:o,initialFocus:a,__demoMode:s$1=!1,...p}=e,[n$1,d]=React.useState(0),m=s$3();t===void 0&&m!==null&&(t=u$4(m,{[p$2.Open]:!0,[p$2.Closed]:!1}));let i=React.useRef(new Set),T=React.useRef(null),K=y(T,r),W=React.useRef(null),P$1=n(T),B=e.hasOwnProperty("open")||m!==null,G=e.hasOwnProperty("onClose");if(!B&&!G)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!B)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!G)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof t!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let u=t?0:1,[y$1,q]=React.useReducer(ve$3,{titleId:null,descriptionId:null,panelRef:React.createRef()}),h=o$3(()=>o(!1)),U=o$3(f=>q({type:0,id:f})),_=a$3()?s$1?!1:u===0:!1,w=n$1>1,z=React.useContext(M$2)!==null,J=w?"parent":"leaf";M$4(T,w?_:!1),L$1(()=>{var R,g;return [...Array.from((R=P$1==null?void 0:P$1.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?R:[]).filter(D=>!(!(D instanceof HTMLElement)||D.contains(W.current)||y$1.panelRef.current&&D.contains(y$1.panelRef.current))),(g=y$1.panelRef.current)!=null?g:T.current]},h,_&&!w),E(P$1==null?void 0:P$1.defaultView,"keydown",f=>{f.defaultPrevented||f.key===o$1.Escape&&u===0&&(w||(f.preventDefault(),f.stopPropagation(),h()));}),Ee$3(P$1,u===0&&!z),React.useEffect(()=>{if(u!==0||!T.current)return;let f=new IntersectionObserver(R=>{for(let g of R)g.boundingClientRect.x===0&&g.boundingClientRect.y===0&&g.boundingClientRect.width===0&&g.boundingClientRect.height===0&&h();});return f.observe(T.current),()=>f.disconnect()},[u,T,h]);let[Q,X]=k(),Z=`headlessui-dialog-${I$2()}`,ee=React.useMemo(()=>[{dialogState:u,close:h,setTitleId:U},y$1],[u,y$1,h,U]),$=React.useMemo(()=>({open:u===0}),[u]),te={ref:K,id:Z,role:"dialog","aria-modal":u===0?!0:void 0,"aria-labelledby":y$1.titleId,"aria-describedby":Q};return React__default["default"].createElement(M$3,{type:"Dialog",enabled:u===0,element:T,onUpdate:o$3((f,R,g)=>{R==="Dialog"&&u$4(f,{[s.Add](){i.current.add(g),d(D=>D+1);},[s.Remove](){i.current.add(g),d(D=>D-1);}});})},React__default["default"].createElement(P,{force:!0},React__default["default"].createElement($$2,null,React__default["default"].createElement(M$2.Provider,{value:ee},React__default["default"].createElement($$2.Group,{target:T},React__default["default"].createElement(P,{force:!1},React__default["default"].createElement(X,{slot:$,name:"Dialog.Description"},React__default["default"].createElement(fe$1,{initialFocus:a,containers:i,features:_?u$4(J,{parent:fe$1.features.RestoreFocus,leaf:fe$1.features.All&~fe$1.features.FocusLock}):fe$1.features.None},$$3({ourProps:te,theirProps:p,slot:$,defaultTag:Oe$4,features:Ce$3,visible:u===0,name:"Dialog"})))))))),React__default["default"].createElement(h$3,{features:s$4.Hidden,ref:W}))}),Le$2="div",we$1=C$2(function(e,r){let[{dialogState:t,close:o}]=L("Dialog.Overlay"),a=y(r),s=`headlessui-dialog-overlay-${I$2()}`,p=o$3(i=>{if(i.target===i.currentTarget){if(r$1(i.currentTarget))return i.preventDefault();i.preventDefault(),i.stopPropagation(),o();}}),n=React.useMemo(()=>({open:t===0}),[t]);return $$3({ourProps:{ref:a,id:s,"aria-hidden":!0,onClick:p},theirProps:e,slot:n,defaultTag:Le$2,name:"Dialog.Overlay"})}),Fe$1="div",ke$1=C$2(function(e,r){let[{dialogState:t},o]=L("Dialog.Backdrop"),a=y(r),s=`headlessui-dialog-backdrop-${I$2()}`;React.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let p=React.useMemo(()=>({open:t===0}),[t]);return React__default["default"].createElement(P,{force:!0},React__default["default"].createElement($$2,null,$$3({ourProps:{ref:a,id:s,"aria-hidden":!0},theirProps:e,slot:p,defaultTag:Fe$1,name:"Dialog.Backdrop"})))}),Me$2="div",_e$1=C$2(function(e,r){let[{dialogState:t},o]=L("Dialog.Panel"),a=y(r,o.panelRef),s=`headlessui-dialog-panel-${I$2()}`,p=React.useMemo(()=>({open:t===0}),[t]),n=o$3(i=>{i.stopPropagation();});return $$3({ourProps:{ref:a,id:s,onClick:n},theirProps:e,slot:p,defaultTag:Me$2,name:"Dialog.Panel"})}),xe$4="h2",Ie$2=C$2(function(e,r){let[{dialogState:t,setTitleId:o}]=L("Dialog.Title"),a=`headlessui-dialog-title-${I$2()}`,s=y(r);React.useEffect(()=>(o(a),()=>o(null)),[a,o]);let p=React.useMemo(()=>({open:t===0}),[t]);return $$3({ourProps:{ref:s,id:a},theirProps:e,slot:p,defaultTag:xe$4,name:"Dialog.Title"})}),gt=Object.assign(Se$2,{Backdrop:ke$1,Panel:_e$1,Overlay:we$1,Title:Ie$2,Description:F$2});

var Q$1=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Q$1||{}),V$2=(n=>(n[n.ToggleDisclosure=0]="ToggleDisclosure",n[n.CloseDisclosure=1]="CloseDisclosure",n[n.SetButtonId=2]="SetButtonId",n[n.SetPanelId=3]="SetPanelId",n[n.LinkPanel=4]="LinkPanel",n[n.UnlinkPanel=5]="UnlinkPanel",n))(V$2||{});let X$2={[0]:e=>({...e,disclosureState:u$4(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},B$1=React.createContext(null);B$1.displayName="DisclosureContext";function h$2(e){let t=React.useContext(B$1);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,h$2),o}return t}let H$1=React.createContext(null);H$1.displayName="DisclosureAPIContext";function j$1(e){let t=React.useContext(H$1);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,j$1),o}return t}let U=React.createContext(null);U.displayName="DisclosurePanelContext";function Y(){return React.useContext(U)}function Z(e,t){return u$4(t.type,X$2,e,t)}let ee$2=React.Fragment,te$3=C$2(function(t,o){let{defaultOpen:l=!1,...i}=t,s=`headlessui-disclosure-button-${I$2()}`,n=`headlessui-disclosure-panel-${I$2()}`,u=React.useRef(null),D=y(o,T$2(f=>{u.current=f;},t.as===void 0||t.as===React.Fragment)),T=React.useRef(null),m=React.useRef(null),c=React.useReducer(Z,{disclosureState:l?0:1,linkedPanel:!1,buttonRef:m,panelRef:T,buttonId:s,panelId:n}),[{disclosureState:p},a]=c;React.useEffect(()=>a({type:2,buttonId:s}),[s,a]),React.useEffect(()=>a({type:3,panelId:n}),[n,a]);let P=o$3(f=>{a({type:1});let C=e$2(u);if(!C)return;let A=(()=>f?f instanceof HTMLElement?f:f.current instanceof HTMLElement?f.current:C.getElementById(s):C.getElementById(s))();A==null||A.focus();}),b=React.useMemo(()=>({close:P}),[P]),r=React.useMemo(()=>({open:p===0,close:P}),[p,P]),d={ref:D};return React__default["default"].createElement(B$1.Provider,{value:c},React__default["default"].createElement(H$1.Provider,{value:b},React__default["default"].createElement(C$1,{value:u$4(p,{[0]:p$2.Open,[1]:p$2.Closed})},$$3({ourProps:d,theirProps:i,slot:r,defaultTag:ee$2,name:"Disclosure"}))))}),ne$2="button",le$1=C$2(function(t,o){let[l,i]=h$2("Disclosure.Button"),s=Y(),n=s===null?!1:s===l.panelId,u=React.useRef(null),D=y(u,o,n?null:l.buttonRef),T=o$3(r=>{var d;if(n){if(l.disclosureState===1)return;switch(r.key){case o$1.Space:case o$1.Enter:r.preventDefault(),r.stopPropagation(),i({type:0}),(d=l.buttonRef.current)==null||d.focus();break}}else switch(r.key){case o$1.Space:case o$1.Enter:r.preventDefault(),r.stopPropagation(),i({type:0});break}}),m=o$3(r=>{switch(r.key){case o$1.Space:r.preventDefault();break}}),c=o$3(r=>{var d;r$1(r.currentTarget)||t.disabled||(n?(i({type:0}),(d=l.buttonRef.current)==null||d.focus()):i({type:0}));}),p=React.useMemo(()=>({open:l.disclosureState===0}),[l]),a=s$6(t,u),P=t,b=n?{ref:D,type:a,onKeyDown:T,onClick:c}:{ref:D,id:l.buttonId,type:a,"aria-expanded":t.disabled?void 0:l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:T,onKeyUp:m,onClick:c};return $$3({ourProps:b,theirProps:P,slot:p,defaultTag:ne$2,name:"Disclosure.Button"})}),oe$2="div",re$2=S$1.RenderStrategy|S$1.Static,se$1=C$2(function(t,o){let[l,i]=h$2("Disclosure.Panel"),{close:s}=j$1("Disclosure.Panel"),n=y(o,l.panelRef,p=>{i({type:p?4:5});}),u=s$3(),D=(()=>u!==null?u===p$2.Open:l.disclosureState===0)(),T=React.useMemo(()=>({open:l.disclosureState===0,close:s}),[l,s]),m=t,c={ref:n,id:l.panelId};return React__default["default"].createElement(U.Provider,{value:l.panelId},$$3({ourProps:c,theirProps:m,slot:T,defaultTag:oe$2,features:re$2,visible:D,name:"Disclosure.Panel"}))}),Oe$3=Object.assign(te$3,{Button:le$1,Panel:se$1});

var ye$1=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(ye$1||{}),xe$3=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(xe$3||{}),Oe$2=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Oe$2||{}),me$1=(r=>(r[r.OpenListbox=0]="OpenListbox",r[r.CloseListbox=1]="CloseListbox",r[r.SetDisabled=2]="SetDisabled",r[r.SetOrientation=3]="SetOrientation",r[r.GoToOption=4]="GoToOption",r[r.Search=5]="Search",r[r.ClearSearch=6]="ClearSearch",r[r.RegisterOption=7]="RegisterOption",r[r.UnregisterOption=8]="UnregisterOption",r))(me$1||{});function j(t,i=n=>n){let n=t.activeOptionIndex!==null?t.options[t.activeOptionIndex]:null,e=S$2(i(t.options.slice()),u=>u.dataRef.current.domRef.current),o=n?e.indexOf(n):null;return o===-1&&(o=null),{options:e,activeOptionIndex:o}}let ge$2={[1](t){return t.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},[0](t){if(t.disabled||t.listboxState===0)return t;let i=t.activeOptionIndex,{value:n,mode:e,compare:o}=t.propsRef.current,u=t.options.findIndex(l=>{let s=l.dataRef.current.value;return u$4(e,{[1]:()=>n.some(r=>o(r,s)),[0]:()=>o(n,s)})});return u!==-1&&(i=u),{...t,listboxState:0,activeOptionIndex:i}},[2](t,i){return t.disabled===i.disabled?t:{...t,disabled:i.disabled}},[3](t,i){return t.orientation===i.orientation?t:{...t,orientation:i.orientation}},[4](t,i){var o;if(t.disabled||t.listboxState===1)return t;let n=j(t),e=x$4(i,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return {...t,...n,searchQuery:"",activeOptionIndex:e,activationTrigger:(o=i.trigger)!=null?o:1}},[5]:(t,i)=>{if(t.disabled||t.listboxState===1)return t;let e=t.searchQuery!==""?0:1,o=t.searchQuery+i.value.toLowerCase(),l=(t.activeOptionIndex!==null?t.options.slice(t.activeOptionIndex+e).concat(t.options.slice(0,t.activeOptionIndex+e)):t.options).find(d=>{var r;return !d.dataRef.current.disabled&&((r=d.dataRef.current.textValue)==null?void 0:r.startsWith(o))}),s=l?t.options.indexOf(l):-1;return s===-1||s===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:s,activationTrigger:1}},[6](t){return t.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},[7]:(t,i)=>{let n={id:i.id,dataRef:i.dataRef},e=j(t,o=>[...o,n]);if(t.activeOptionIndex===null){let{value:o,mode:u,compare:l}=t.propsRef.current,s=i.dataRef.current.value;u$4(u,{[1]:()=>o.some(r=>l(r,s)),[0]:()=>l(o,s)})&&(e.activeOptionIndex=e.options.indexOf(n));}return {...t,...e}},[8]:(t,i)=>{let n=j(t,e=>{let o=e.findIndex(u=>u.id===i.id);return o!==-1&&e.splice(o,1),e});return {...t,...n,activationTrigger:1}}},K$1=React.createContext(null);K$1.displayName="ListboxContext";function w(t){let i=React.useContext(K$1);if(i===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return i}function Re$1(t,i){return u$4(i.type,ge$2,t,i)}let ve$2=React.Fragment,Le$1=C$2(function(i,n){let{value:e,defaultValue:o,name:u,onChange:l,by:s=(p,T)=>p===T,disabled:d=!1,horizontal:r=!1,multiple:x=!1,...S}=i;const g=r?"horizontal":"vertical";let O=y(n),[m,f]=p$1(e,l,o),b=React.useReducer(Re$1,{listboxState:1,propsRef:{current:{value:m,onChange:f,mode:x?1:0,compare:o$3(typeof s=="string"?(p,T)=>{let C=s;return (p==null?void 0:p[C])===(T==null?void 0:T[C])}:s)}},labelRef:React.createRef(),buttonRef:React.createRef(),optionsRef:React.createRef(),disabled:d,orientation:g,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:a,propsRef:c,optionsRef:P,buttonRef:D},M]=b;c.current.value=m,c.current.mode=x?1:0,s$8(()=>{c.current.onChange=p=>u$4(c.current.mode,{[0](){return f(p)},[1](){let T=c.current.value.slice(),{compare:C}=c.current,W=T.findIndex(X=>C(X,p));return W===-1?T.push(p):T.splice(W,1),f(T)}});},[f,c]),s$8(()=>M({type:2,disabled:d}),[d]),s$8(()=>M({type:3,orientation:g}),[g]),L$1([D,P],(p,T)=>{var C;M({type:1}),F$6(T,N$1.Loose)||(p.preventDefault(),(C=D.current)==null||C.focus());},a===0);let N=React.useMemo(()=>({open:a===0,disabled:d,value:m}),[a,d,m]),R={ref:O};return React__default["default"].createElement(K$1.Provider,{value:b},React__default["default"].createElement(C$1,{value:u$4(a,{[0]:p$2.Open,[1]:p$2.Closed})},u!=null&&m!=null&&e$1({[u]:m}).map(([p,T])=>React__default["default"].createElement(h$3,{features:s$4.Hidden,...F$4({key:p,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:p,value:T})})),$$3({ourProps:R,theirProps:S,slot:N,defaultTag:ve$2,name:"Listbox"})))}),Se$1="button",Ae$2=C$2(function(i,n){var f;let[e,o]=w("Listbox.Button"),u=y(e.buttonRef,n),l=`headlessui-listbox-button-${I$2()}`,s=p$5(),d=o$3(b=>{switch(b.key){case o$1.Space:case o$1.Enter:case o$1.ArrowDown:b.preventDefault(),o({type:0}),s.nextFrame(()=>{e.propsRef.current.value||o({type:4,focus:a$2.First});});break;case o$1.ArrowUp:b.preventDefault(),o({type:0}),s.nextFrame(()=>{e.propsRef.current.value||o({type:4,focus:a$2.Last});});break}}),r=o$3(b=>{switch(b.key){case o$1.Space:b.preventDefault();break}}),x=o$3(b=>{if(r$1(b.currentTarget))return b.preventDefault();e.listboxState===0?(o({type:1}),s.nextFrame(()=>{var a;return (a=e.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(b.preventDefault(),o({type:0}));}),S=i$3(()=>{if(!!e.labelRef.current)return [e.labelRef.current.id,l].join(" ")},[e.labelRef.current,l]),g=React.useMemo(()=>({open:e.listboxState===0,disabled:e.disabled,value:e.propsRef.current.value}),[e]),O=i,m={ref:u,id:l,type:s$6(i,e.buttonRef),"aria-haspopup":!0,"aria-controls":(f=e.optionsRef.current)==null?void 0:f.id,"aria-expanded":e.disabled?void 0:e.listboxState===0,"aria-labelledby":S,disabled:e.disabled,onKeyDown:d,onKeyUp:r,onClick:x};return $$3({ourProps:m,theirProps:O,slot:g,defaultTag:Se$1,name:"Listbox.Button"})}),he$2="label",Pe$3=C$2(function(i,n){let[e]=w("Listbox.Label"),o=`headlessui-listbox-label-${I$2()}`,u=y(e.labelRef,n),l=o$3(()=>{var x;return (x=e.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}),s=React.useMemo(()=>({open:e.listboxState===0,disabled:e.disabled}),[e]);return $$3({ourProps:{ref:u,id:o,onClick:l},theirProps:i,slot:s,defaultTag:he$2,name:"Listbox.Label"})}),Ce$2="ul",De$1=S$1.RenderStrategy|S$1.Static,Me$1=C$2(function(i,n){var b;let[e,o]=w("Listbox.Options"),u=y(e.optionsRef,n),l=`headlessui-listbox-options-${I$2()}`,s=p$5(),d=p$5(),r=s$3(),x=(()=>r!==null?r===p$2.Open:e.listboxState===0)();React.useEffect(()=>{var c;let a=e.optionsRef.current;!a||e.listboxState===0&&a!==((c=e$2(a))==null?void 0:c.activeElement)&&a.focus({preventScroll:!0});},[e.listboxState,e.optionsRef]);let S=o$3(a=>{switch(d.dispose(),a.key){case o$1.Space:if(e.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),o({type:5,value:a.key});case o$1.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex!==null){let{dataRef:c}=e.options[e.activeOptionIndex];e.propsRef.current.onChange(c.current.value);}e.propsRef.current.mode===0&&(o({type:1}),m$3().nextFrame(()=>{var c;return (c=e.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})}));break;case u$4(e.orientation,{vertical:o$1.ArrowDown,horizontal:o$1.ArrowRight}):return a.preventDefault(),a.stopPropagation(),o({type:4,focus:a$2.Next});case u$4(e.orientation,{vertical:o$1.ArrowUp,horizontal:o$1.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),o({type:4,focus:a$2.Previous});case o$1.Home:case o$1.PageUp:return a.preventDefault(),a.stopPropagation(),o({type:4,focus:a$2.First});case o$1.End:case o$1.PageDown:return a.preventDefault(),a.stopPropagation(),o({type:4,focus:a$2.Last});case o$1.Escape:return a.preventDefault(),a.stopPropagation(),o({type:1}),s.nextFrame(()=>{var c;return (c=e.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})});case o$1.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(o({type:5,value:a.key}),d.setTimeout(()=>o({type:6}),350));break}}),g=i$3(()=>{var a,c,P;return (P=(a=e.labelRef.current)==null?void 0:a.id)!=null?P:(c=e.buttonRef.current)==null?void 0:c.id},[e.labelRef.current,e.buttonRef.current]),O=React.useMemo(()=>({open:e.listboxState===0}),[e]),m=i,f={"aria-activedescendant":e.activeOptionIndex===null||(b=e.options[e.activeOptionIndex])==null?void 0:b.id,"aria-multiselectable":e.propsRef.current.mode===1?!0:void 0,"aria-labelledby":g,"aria-orientation":e.orientation,id:l,onKeyDown:S,role:"listbox",tabIndex:0,ref:u};return $$3({ourProps:f,theirProps:m,slot:O,defaultTag:Ce$2,features:De$1,visible:x,name:"Listbox.Options"})}),Ee$2="li",Ie$1=C$2(function(i,n){let{disabled:e=!1,value:o,...u}=i,[l,s]=w("Listbox.Option"),d=`headlessui-listbox-option-${I$2()}`,r=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===d:!1,{value:x,compare:S}=l.propsRef.current,g=u$4(l.propsRef.current.mode,{[1]:()=>x.some(R=>S(R,o)),[0]:()=>S(x,o)}),O=React.useRef(null),m=y(n,O);s$8(()=>{if(l.listboxState!==0||!r||l.activationTrigger===0)return;let R=m$3();return R.requestAnimationFrame(()=>{var p,T;(T=(p=O.current)==null?void 0:p.scrollIntoView)==null||T.call(p,{block:"nearest"});}),R.dispose},[O,r,l.listboxState,l.activationTrigger,l.activeOptionIndex]);let f=React.useRef({disabled:e,value:o,domRef:O});s$8(()=>{f.current.disabled=e;},[f,e]),s$8(()=>{f.current.value=o;},[f,o]),s$8(()=>{var R,p;f.current.textValue=(p=(R=O.current)==null?void 0:R.textContent)==null?void 0:p.toLowerCase();},[f,O]);let b=o$3(()=>l.propsRef.current.onChange(o));s$8(()=>(s({type:7,id:d,dataRef:f}),()=>s({type:8,id:d})),[f,d]);let a=o$3(R=>{if(e)return R.preventDefault();b(),l.propsRef.current.mode===0&&(s({type:1}),m$3().nextFrame(()=>{var p;return (p=l.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}));}),c=o$3(()=>{if(e)return s({type:4,focus:a$2.Nothing});s({type:4,focus:a$2.Specific,id:d});}),P=o$3(()=>{e||r||s({type:4,focus:a$2.Specific,id:d,trigger:0});}),D=o$3(()=>{e||!r||s({type:4,focus:a$2.Nothing});}),M=React.useMemo(()=>({active:r,selected:g,disabled:e}),[r,g,e]);return $$3({ourProps:{id:d,ref:m,role:"option",tabIndex:e===!0?void 0:-1,"aria-disabled":e===!0?!0:void 0,"aria-selected":g,disabled:void 0,onClick:a,onFocus:c,onPointerMove:P,onMouseMove:P,onPointerLeave:D,onMouseLeave:D},theirProps:u,slot:M,defaultTag:Ee$2,name:"Listbox.Option"})}),pt=Object.assign(Le$1,{Button:Ae$2,Label:Pe$3,Options:Me$1,Option:Ie$1});

var Ae$1=(c=>(c[c.Open=0]="Open",c[c.Closed=1]="Closed",c))(Ae$1||{}),Ce$1=(n=>(n[n.TogglePopover=0]="TogglePopover",n[n.ClosePopover=1]="ClosePopover",n[n.SetButton=2]="SetButton",n[n.SetButtonId=3]="SetButtonId",n[n.SetPanel=4]="SetPanel",n[n.SetPanelId=5]="SetPanelId",n))(Ce$1||{});let Re={[0]:r=>({...r,popoverState:u$4(r.popoverState,{[0]:1,[1]:0})}),[1](r){return r.popoverState===1?r:{...r,popoverState:1}},[2](r,t){return r.button===t.button?r:{...r,button:t.button}},[3](r,t){return r.buttonId===t.buttonId?r:{...r,buttonId:t.buttonId}},[4](r,t){return r.panel===t.panel?r:{...r,panel:t.panel}},[5](r,t){return r.panelId===t.panelId?r:{...r,panelId:t.panelId}}},ee$1=React.createContext(null);ee$1.displayName="PopoverContext";function J$1(r){let t=React.useContext(ee$1);if(t===null){let c=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,J$1),c}return t}let te$2=React.createContext(null);te$2.displayName="PopoverAPIContext";function oe$1(r){let t=React.useContext(te$2);if(t===null){let c=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,oe$1),c}return t}let re$1=React.createContext(null);re$1.displayName="PopoverGroupContext";function ce$1(){return React.useContext(re$1)}let ne$1=React.createContext(null);ne$1.displayName="PopoverPanelContext";function Oe$1(){return React.useContext(ne$1)}function Me(r,t){return u$4(t.type,Re,r,t)}let Le="div",Fe=C$2(function(t,c){var R;let o=`headlessui-popover-button-${I$2()}`,d=`headlessui-popover-panel-${I$2()}`,a=React.useRef(null),n$1=y(c,T$2(e=>{a.current=e;})),g=React.useReducer(Me,{popoverState:1,button:null,buttonId:o,panel:null,panelId:d,beforePanelSentinel:React.createRef(),afterPanelSentinel:React.createRef()}),[{popoverState:m,button:l,panel:v,beforePanelSentinel:p,afterPanelSentinel:B},s]=g,T=n((R=a.current)!=null?R:l);React.useEffect(()=>s({type:3,buttonId:o}),[o,s]),React.useEffect(()=>s({type:5,panelId:d}),[d,s]);let f=React.useMemo(()=>{if(!l||!v)return !1;for(let e of document.querySelectorAll("body > *"))if(Number(e==null?void 0:e.contains(l))^Number(e==null?void 0:e.contains(v)))return !0;return !1},[l,v]),P=React.useMemo(()=>({buttonId:o,panelId:d,close:()=>s({type:1})}),[o,d,s]),y$1=ce$1(),A=y$1==null?void 0:y$1.registerPopover,M=o$3(()=>{var e;return (e=y$1==null?void 0:y$1.isFocusWithinPopoverGroup())!=null?e:(T==null?void 0:T.activeElement)&&((l==null?void 0:l.contains(T.activeElement))||(v==null?void 0:v.contains(T.activeElement)))});React.useEffect(()=>A==null?void 0:A(P),[A,P]),E(T==null?void 0:T.defaultView,"focus",e=>{var i,S,O,N;m===0&&(M()||!l||!v||(S=(i=p.current)==null?void 0:i.contains)!=null&&S.call(i,e.target)||(N=(O=B.current)==null?void 0:O.contains)!=null&&N.call(O,e.target)||s({type:1}));},!0),L$1([l,v],(e,i)=>{s({type:1}),F$6(i,N$1.Loose)||(e.preventDefault(),l==null||l.focus());},m===0);let L=o$3(e=>{s({type:1});let i=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:l:l)();i==null||i.focus();}),D=React.useMemo(()=>({close:L,isPortalled:f}),[L,f]),u=React.useMemo(()=>({open:m===0,close:L}),[m,L]),E$1=t,C={ref:n$1};return React__default["default"].createElement(ee$1.Provider,{value:g},React__default["default"].createElement(te$2.Provider,{value:D},React__default["default"].createElement(C$1,{value:u$4(m,{[0]:p$2.Open,[1]:p$2.Closed})},$$3({ourProps:C,theirProps:E$1,slot:u,defaultTag:Le,name:"Popover"}))))}),Ie="button",Be=C$2(function(t,c){let[o,d]=J$1("Popover.Button"),{isPortalled:a}=oe$1("Popover.Button"),n$2=React.useRef(null),g=`headlessui-focus-sentinel-${I$2()}`,m=ce$1(),l=m==null?void 0:m.closeOthers,v=Oe$1(),p=v===null?!1:v===o.panelId,B=y(n$2,c,p?null:e=>d({type:2,button:e})),s=y(n$2,c),T=n(n$2),f=o$3(e=>{var i,S,O;if(p){if(o.popoverState===1)return;switch(e.key){case o$1.Space:case o$1.Enter:e.preventDefault(),(S=(i=e.target).click)==null||S.call(i),d({type:1}),(O=o.button)==null||O.focus();break}}else switch(e.key){case o$1.Space:case o$1.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),d({type:0});break;case o$1.Escape:if(o.popoverState!==0)return l==null?void 0:l(o.buttonId);if(!n$2.current||(T==null?void 0:T.activeElement)&&!n$2.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:1});break}}),P=o$3(e=>{p||e.key===o$1.Space&&e.preventDefault();}),y$1=o$3(e=>{var i,S;r$1(e.currentTarget)||t.disabled||(p?(d({type:1}),(i=o.button)==null||i.focus()):(e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),d({type:0}),(S=o.button)==null||S.focus()));}),A=o$3(e=>{e.preventDefault(),e.stopPropagation();}),M=o.popoverState===0,L=React.useMemo(()=>({open:M}),[M]),D=s$6(t,n$2),u=t,E=p?{ref:s,type:D,onKeyDown:f,onClick:y$1}:{ref:B,id:o.buttonId,type:D,"aria-expanded":t.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:f,onKeyUp:P,onClick:y$1,onMouseDown:A},C=n$1(),R=o$3(()=>{let e=o.panel;if(!e)return;function i(){u$4(C.current,{[s$1.Forwards]:()=>O(e,T$3.First),[s$1.Backwards]:()=>O(e,T$3.Last)});}i();});return React__default["default"].createElement(React__default["default"].Fragment,null,$$3({ourProps:E,theirProps:u,slot:L,defaultTag:Ie,name:"Popover.Button"}),M&&!p&&a&&React__default["default"].createElement(h$3,{id:g,features:s$4.Focusable,as:"button",type:"button",onFocus:R}))}),he$1="div",De=S$1.RenderStrategy|S$1.Static,He=C$2(function(t,c){let[{popoverState:o},d]=J$1("Popover.Overlay"),a=y(c),n=`headlessui-popover-overlay-${I$2()}`,g=s$3(),m=(()=>g!==null?g===p$2.Open:o===0)(),l=o$3(s=>{if(r$1(s.currentTarget))return s.preventDefault();d({type:1});}),v=React.useMemo(()=>({open:o===0}),[o]);return $$3({ourProps:{ref:a,id:n,"aria-hidden":!0,onClick:l},theirProps:t,slot:v,defaultTag:he$1,features:De,visible:m,name:"Popover.Overlay"})}),xe$2="div",Ge=S$1.RenderStrategy|S$1.Static,ke=C$2(function(t,c){let{focus:o=!1,...d}=t,[a,n$2]=J$1("Popover.Panel"),{close:g,isPortalled:m}=oe$1("Popover.Panel"),l=`headlessui-focus-sentinel-before-${I$2()}`,v=`headlessui-focus-sentinel-after-${I$2()}`,p=React.useRef(null),B=y(p,c,u=>{n$2({type:4,panel:u});}),s=n(p),T=s$3(),f=(()=>T!==null?T===p$2.Open:a.popoverState===0)(),P=o$3(u=>{var E;switch(u.key){case o$1.Escape:if(a.popoverState!==0||!p.current||(s==null?void 0:s.activeElement)&&!p.current.contains(s.activeElement))return;u.preventDefault(),u.stopPropagation(),n$2({type:1}),(E=a.button)==null||E.focus();break}});React.useEffect(()=>{var u;t.static||a.popoverState===1&&((u=t.unmount)!=null?u:!0)&&n$2({type:4,panel:null});},[a.popoverState,t.unmount,t.static,n$2]),React.useEffect(()=>{if(!o||a.popoverState!==0||!p.current)return;let u=s==null?void 0:s.activeElement;p.current.contains(u)||O(p.current,T$3.First);},[o,p,a.popoverState]);let y$1=React.useMemo(()=>({open:a.popoverState===0,close:g}),[a,g]),A={ref:B,id:a.panelId,onKeyDown:P,onBlur:o&&a.popoverState===0?u=>{var C,R,e,i,S;let E=u.relatedTarget;!E||!p.current||(C=p.current)!=null&&C.contains(E)||(n$2({type:1}),(((e=(R=a.beforePanelSentinel.current)==null?void 0:R.contains)==null?void 0:e.call(R,E))||((S=(i=a.afterPanelSentinel.current)==null?void 0:i.contains)==null?void 0:S.call(i,E)))&&E.focus({preventScroll:!0}));}:void 0,tabIndex:-1},M=n$1(),L=o$3(()=>{let u=p.current;if(!u)return;function E(){u$4(M.current,{[s$1.Forwards]:()=>{O(u,T$3.First);},[s$1.Backwards]:()=>{var C;(C=a.button)==null||C.focus({preventScroll:!0});}});}E();}),D=o$3(()=>{let u=p.current;if(!u)return;function E(){u$4(M.current,{[s$1.Forwards]:()=>{var O$1,N,le;if(!a.button)return;let C=d$2(),R=C.indexOf(a.button),e=C.slice(0,R+1),S=[...C.slice(R+1),...e];for(let K of S.slice())if(((N=(O$1=K==null?void 0:K.id)==null?void 0:O$1.startsWith)==null?void 0:N.call(O$1,"headlessui-focus-sentinel-"))||((le=a.panel)==null?void 0:le.contains(K))){let ae=S.indexOf(K);ae!==-1&&S.splice(ae,1);}O(S,T$3.First,!1);},[s$1.Backwards]:()=>O(u,T$3.Last)});}E();});return React__default["default"].createElement(ne$1.Provider,{value:a.panelId},f&&m&&React__default["default"].createElement(h$3,{id:l,ref:a.beforePanelSentinel,features:s$4.Focusable,as:"button",type:"button",onFocus:L}),$$3({ourProps:A,theirProps:d,slot:y$1,defaultTag:xe$2,features:Ge,visible:f,name:"Popover.Panel"}),f&&m&&React__default["default"].createElement(h$3,{id:v,ref:a.afterPanelSentinel,features:s$4.Focusable,as:"button",type:"button",onFocus:D}))}),_e="div",we=C$2(function(t,c){let o=React.useRef(null),d=y(o,c),[a,n]=React.useState([]),g=o$3(f=>{n(P=>{let y=P.indexOf(f);if(y!==-1){let A=P.slice();return A.splice(y,1),A}return P});}),m=o$3(f=>(n(P=>[...P,f]),()=>g(f))),l=o$3(()=>{var y;let f=e$2(o);if(!f)return !1;let P=f.activeElement;return (y=o.current)!=null&&y.contains(P)?!0:a.some(A=>{var M,L;return ((M=f.getElementById(A.buttonId))==null?void 0:M.contains(P))||((L=f.getElementById(A.panelId))==null?void 0:L.contains(P))})}),v=o$3(f=>{for(let P of a)P.buttonId!==f&&P.close();}),p=React.useMemo(()=>({registerPopover:m,unregisterPopover:g,isFocusWithinPopoverGroup:l,closeOthers:v}),[m,g,l,v]),B=React.useMemo(()=>({}),[]),s=t,T={ref:d};return React__default["default"].createElement(re$1.Provider,{value:p},$$3({ourProps:T,theirProps:s,slot:B,defaultTag:_e,name:"Popover.Group"}))}),mt=Object.assign(Fe,{Button:Be,Overlay:He,Panel:ke,Group:we});

function b(g=0){let[r,l]=React.useState(g),u=React.useCallback(e=>l(a=>a|e),[r]),n=React.useCallback(e=>Boolean(r&e),[r]),o=React.useCallback(e=>l(a=>a&~e),[l]),s=React.useCallback(e=>l(a=>a^e),[l]);return {addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}

let u=React.createContext(null);function c$1(){let o=React.useContext(u);if(o===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,c$1),t}return o}function M$1(){let[o,t]=React.useState([]);return [o.length>0?o.join(" "):void 0,React.useMemo(()=>function(e){let l=o$3(a=>(t(i=>[...i,a]),()=>t(i=>{let n=i.slice(),d=n.indexOf(a);return d!==-1&&n.splice(d,1),n}))),r=React.useMemo(()=>({register:l,slot:e.slot,name:e.name,props:e.props}),[l,e.slot,e.name,e.props]);return React__default["default"].createElement(u.Provider,{value:r},e.children)},[t])]}let h$1="label",F$1=C$2(function(t,s){let{passive:e=!1,...l}=t,r=c$1(),a=`headlessui-label-${I$2()}`,i=y(s);s$8(()=>r.register(a),[a,r.register]);let n={ref:i,...r.props,id:a};return e&&("onClick"in n&&delete n.onClick,"onClick"in l&&delete l.onClick),$$3({ourProps:n,theirProps:l,slot:r.slot||{},defaultTag:h$1,name:r.name||"Label"})});

var ye=(t=>(t[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t))(ye||{});let ge$1={[0](a,n){let t=[...a.options,{id:n.id,element:n.element,propsRef:n.propsRef}];return {...a,options:S$2(t,l=>l.element.current)}},[1](a,n){let t=a.options.slice(),l=a.options.findIndex(O=>O.id===n.id);return l===-1?a:(t.splice(l,1),{...a,options:t})}},$$1=React.createContext(null);$$1.displayName="RadioGroupContext";function te$1(a){let n=React.useContext($$1);if(n===null){let t=new Error(`<${a} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,te$1),t}return n}function ve$1(a,n){return u$4(n.type,ge$1,a,n)}let Oe="div",Ee$1=C$2(function(n,t){let{value:l,defaultValue:O$1,name:c,onChange:M,by:E=(e,r)=>e===r,disabled:P=!1,...S}=n,u=o$3(typeof E=="string"?(e,r)=>{let o=E;return (e==null?void 0:e[o])===(r==null?void 0:r[o])}:E),[_,A]=React.useReducer(ve$1,{options:[]}),i=_.options,[R,U]=M$1(),[f,D]=k(),H=`headlessui-radiogroup-${I$2()}`,h=React.useRef(null),G=y(h,t),[p,k$1]=p$1(l,M,O$1),F=React.useMemo(()=>i.find(e=>!e.propsRef.current.disabled),[i]),L=React.useMemo(()=>i.some(e=>u(e.propsRef.current.value,p)),[i,p]),T=o$3(e=>{var o;if(P||u(e,p))return !1;let r=(o=i.find(w=>u(w.propsRef.current.value,e)))==null?void 0:o.propsRef.current;return r!=null&&r.disabled?!1:(k$1==null||k$1(e),!0)});F$5({container:h.current,accept(e){return e.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none");}});let N=o$3(e=>{let r=h.current;if(!r)return;let o=e$2(r),w=i.filter(d=>d.propsRef.current.disabled===!1).map(d=>d.element.current);switch(e.key){case o$1.Enter:p$3(e.currentTarget);break;case o$1.ArrowLeft:case o$1.ArrowUp:if(e.preventDefault(),e.stopPropagation(),O(w,T$3.Previous|T$3.WrapAround)===M$5.Success){let m=i.find(K=>K.element.current===(o==null?void 0:o.activeElement));m&&T(m.propsRef.current.value);}break;case o$1.ArrowRight:case o$1.ArrowDown:if(e.preventDefault(),e.stopPropagation(),O(w,T$3.Next|T$3.WrapAround)===M$5.Success){let m=i.find(K=>K.element.current===(o==null?void 0:o.activeElement));m&&T(m.propsRef.current.value);}break;case o$1.Space:{e.preventDefault(),e.stopPropagation();let d=i.find(m=>m.element.current===(o==null?void 0:o.activeElement));d&&T(d.propsRef.current.value);}break}}),x=o$3(e=>(A({type:0,...e}),()=>A({type:1,id:e.id}))),s=React.useMemo(()=>({registerOption:x,firstOption:F,containsCheckedOption:L,change:T,disabled:P,value:p,compare:u}),[x,F,L,T,P,p,u]),y$1={ref:G,id:H,role:"radiogroup","aria-labelledby":R,"aria-describedby":f,onKeyDown:N},W=React.useMemo(()=>({value:p}),[p]);return React__default["default"].createElement(D,{name:"RadioGroup.Description"},React__default["default"].createElement(U,{name:"RadioGroup.Label"},React__default["default"].createElement($$1.Provider,{value:s},c!=null&&p!=null&&e$1({[c]:p}).map(([e,r])=>React__default["default"].createElement(h$3,{features:s$4.Hidden,...F$4({key:e,as:"input",type:"radio",checked:r!=null,hidden:!0,readOnly:!0,name:e,value:r})})),$$3({ourProps:y$1,theirProps:S,slot:W,defaultTag:Oe,name:"RadioGroup"}))))});var Pe$2=(t=>(t[t.Empty=1]="Empty",t[t.Active=2]="Active",t))(Pe$2||{});let Ae="div",he=C$2(function(n,t){let l=React.useRef(null),O=y(l,t),c=`headlessui-radiogroup-option-${I$2()}`,[M,E]=M$1(),[P,S]=k(),{addFlag:u,removeFlag:_,hasFlag:A}=b(1),{value:i,disabled:R=!1,...U}=n,f=React.useRef({value:i,disabled:R});s$8(()=>{f.current.value=i;},[i,f]),s$8(()=>{f.current.disabled=R;},[R,f]);let{registerOption:D,disabled:H,change:h,firstOption:G,containsCheckedOption:p,value:k$1,compare:F}=te$1("RadioGroup.Option");s$8(()=>D({id:c,element:l,propsRef:f}),[c,D,l,n]);let L=o$3(r=>{var o;if(r$1(r.currentTarget))return r.preventDefault();!h(i)||(u(2),(o=l.current)==null||o.focus());}),T=o$3(r=>{if(r$1(r.currentTarget))return r.preventDefault();u(2);}),N=o$3(()=>_(2)),x=(G==null?void 0:G.id)===c,s=H||R,y$1=F(k$1,i),W={ref:O,id:c,role:"radio","aria-checked":y$1?"true":"false","aria-labelledby":M,"aria-describedby":P,"aria-disabled":s?!0:void 0,tabIndex:(()=>s?-1:y$1||!p&&x?0:-1)(),onClick:s?void 0:L,onFocus:s?void 0:T,onBlur:s?void 0:N},e=React.useMemo(()=>({checked:y$1,disabled:s,active:A(2)}),[y$1,s,A]);return React__default["default"].createElement(S,{name:"RadioGroup.Description"},React__default["default"].createElement(E,{name:"RadioGroup.Label"},$$3({ourProps:W,theirProps:U,slot:e,defaultTag:Ae,name:"RadioGroup.Option"})))}),et=Object.assign(Ee$1,{Option:he,Label:F$1,Description:F$2});

let h=React.createContext(null);h.displayName="GroupContext";let z$1=React.Fragment;function J(b){let[t,o]=React.useState(null),[i,d]=M$1(),[a,s]=k(),u=React.useMemo(()=>({switch:t,setSwitch:o,labelledby:i,describedby:a}),[t,o,i,a]),p={},m=b;return React__default["default"].createElement(s,{name:"Switch.Description"},React__default["default"].createElement(d,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}));}}},React__default["default"].createElement(h.Provider,{value:u},$$3({ourProps:p,theirProps:m,defaultTag:z$1,name:"Switch.Group"}))))}let Q="button",V$1=C$2(function(t,o){let{checked:i,defaultChecked:d=!1,onChange:a,name:s,value:u,...p}=t,m=`headlessui-switch-${I$2()}`,r=React.useContext(h),y$1=React.useRef(null),P=y(y$1,o,r===null?null:r.setSwitch),[n,f]=p$1(i,a,d),T=o$3(()=>f==null?void 0:f(!n)),v=o$3(e=>{if(r$1(e.currentTarget))return e.preventDefault();e.preventDefault(),T();}),k=o$3(e=>{e.key===o$1.Space?(e.preventDefault(),T()):e.key===o$1.Enter&&p$3(e.currentTarget);}),g=o$3(e=>e.preventDefault()),C=React.useMemo(()=>({checked:n}),[n]),D={id:m,ref:P,role:"switch",type:s$6(t,y$1),tabIndex:0,"aria-checked":n,"aria-labelledby":r==null?void 0:r.labelledby,"aria-describedby":r==null?void 0:r.describedby,onClick:v,onKeyUp:k,onKeyPress:g};return React__default["default"].createElement(React__default["default"].Fragment,null,s!=null&&n&&React__default["default"].createElement(h$3,{features:s$4.Hidden,...F$4({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n,name:s,value:u})}),$$3({ourProps:D,theirProps:p,slot:C,defaultTag:Q,name:"Switch"}))}),be$2=Object.assign(V$1,{Group:J,Label:F$1,Description:F$2});

function p({onFocus:n}){let[r,o]=React.useState(!0);return r?React__default["default"].createElement(h$3,{as:"button",type:"button",features:s$4.Focusable,onFocus:a=>{a.preventDefault();let e,u=50;function t(){if(u--<=0){e&&cancelAnimationFrame(e);return}if(n()){o(!1),cancelAnimationFrame(e);return}e=requestAnimationFrame(t);}e=requestAnimationFrame(t);}}):null}

var le=(n=>(n[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n))(le||{});let oe={[0](e,t){let r=e.tabs.filter(d=>{var l;return !((l=d.current)!=null&&l.hasAttribute("disabled"))});if(t.index<0)return {...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return {...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let o=e.tabs.slice(0,t.index),n=[...e.tabs.slice(t.index),...o].find(d=>r.includes(d));return n?{...e,selectedIndex:e.tabs.indexOf(n)}:e},[1](e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=S$2([...e.tabs,t.tab],d=>d.current),c=(n=o.indexOf(r))!=null?n:e.selectedIndex;return c===-1&&(c=e.selectedIndex),{...e,tabs:o,selectedIndex:c}},[2](e,t){return {...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:S$2([...e.panels,t.panel],r=>r.current)}},[4](e,t){return {...e,panels:e.panels.filter(r=>r!==t.panel)}}},B=React.createContext(null);B.displayName="TabsSSRContext";function K(e){let t=React.useContext(B);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K),r}return t}let $=React.createContext(null);$.displayName="TabsDataContext";function H(e){let t=React.useContext($);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,H),r}return t}let z=React.createContext(null);z.displayName="TabsActionsContext";function V(e){let t=React.useContext(z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return t}function se(e,t){return u$4(t.type,oe,e,t)}let ie=React.Fragment,ue=C$2(function(t,r){let{defaultIndex:o=0,vertical:c=!1,manual:n=!1,onChange:d,selectedIndex:l=null,...P}=t;const f=c?"vertical":"horizontal",y$1=n?"manual":"auto";let u=l!==null,x=y(r),[s,i]=React.useReducer(se,{selectedIndex:l!=null?l:o,tabs:[],panels:[]}),g=React.useMemo(()=>({selectedIndex:s.selectedIndex}),[s.selectedIndex]),R=s$7(d||(()=>{})),E=s$7(s.tabs),m=React.useMemo(()=>({orientation:f,activation:y$1,...s}),[f,y$1,s]),A=s$7(u?t.selectedIndex:s.selectedIndex),S=React.useMemo(()=>({registerTab(p){return i({type:1,tab:p}),()=>i({type:2,tab:p})},registerPanel(p){return i({type:3,panel:p}),()=>i({type:4,panel:p})},change(p){A.current!==p&&R.current(p),u||i({type:0,index:p});}}),[i,u]);s$8(()=>{i({type:0,index:l!=null?l:o});},[l]);let w=React.useRef({tabs:[],panels:[]}),k={ref:x};return React__default["default"].createElement(B.Provider,{value:w},React__default["default"].createElement(z.Provider,{value:S},React__default["default"].createElement($.Provider,{value:m},m.tabs.length<=0&&React__default["default"].createElement(p,{onFocus:()=>{var p,D;for(let M of E.current)if(((p=M.current)==null?void 0:p.tabIndex)===0)return (D=M.current)==null||D.focus(),!0;return !1}}),$$3({ourProps:k,theirProps:P,slot:g,defaultTag:ie,name:"Tabs"}))))}),ce="div",de=C$2(function(t,r){let{orientation:o,selectedIndex:c}=H("Tab.List"),n=y(r);return $$3({ourProps:{ref:n,role:"tablist","aria-orientation":o},theirProps:t,slot:{selectedIndex:c},defaultTag:ce,name:"Tabs.List"})}),pe="button",fe=C$2(function(t$1,r){var D,M;let o=`headlessui-tabs-tab-${I$2()}`,{orientation:c,activation:n,selectedIndex:d,tabs:l,panels:P}=H("Tab"),f=V("Tab"),y$1=K("Tab"),u=React.useRef(null),x=y(u,r);s$8(()=>f.registerTab(u),[f,u]);let s=y$1.current.tabs.indexOf(o);s===-1&&(s=y$1.current.tabs.push(o)-1);let i=l.indexOf(u);i===-1&&(i=s);let g=i===d,R=o$3(a=>{let L=l.map(Y=>Y.current).filter(Boolean);if(a.key===o$1.Space||a.key===o$1.Enter){a.preventDefault(),a.stopPropagation(),f.change(i);return}switch(a.key){case o$1.Home:case o$1.PageUp:return a.preventDefault(),a.stopPropagation(),O(L,T$3.First);case o$1.End:case o$1.PageDown:return a.preventDefault(),a.stopPropagation(),O(L,T$3.Last)}if(u$4(c,{vertical(){if(a.key===o$1.ArrowUp)return O(L,T$3.Previous|T$3.WrapAround);if(a.key===o$1.ArrowDown)return O(L,T$3.Next|T$3.WrapAround)},horizontal(){if(a.key===o$1.ArrowLeft)return O(L,T$3.Previous|T$3.WrapAround);if(a.key===o$1.ArrowRight)return O(L,T$3.Next|T$3.WrapAround)}}))return a.preventDefault()}),E=o$3(()=>{var a;(a=u.current)==null||a.focus();}),m=React.useRef(!1),A=o$3(()=>{var a;m.current||(m.current=!0,(a=u.current)==null||a.focus(),f.change(i),t(()=>{m.current=!1;}));}),S=o$3(a=>{a.preventDefault();}),w=React.useMemo(()=>({selected:g}),[g]),k=t$1,p={ref:x,onKeyDown:R,onFocus:n==="manual"?E:A,onMouseDown:S,onClick:A,id:o,role:"tab",type:s$6(t$1,u),"aria-controls":(M=(D=P[i])==null?void 0:D.current)==null?void 0:M.id,"aria-selected":g,tabIndex:g?0:-1};return $$3({ourProps:p,theirProps:k,slot:w,defaultTag:pe,name:"Tabs.Tab"})}),be$1="div",Te=C$2(function(t,r){let{selectedIndex:o}=H("Tab.Panels"),c=y(r),n=React.useMemo(()=>({selectedIndex:o}),[o]);return $$3({ourProps:{ref:c},theirProps:t,slot:n,defaultTag:be$1,name:"Tabs.Panels"})}),me="div",Pe$1=S$1.RenderStrategy|S$1.Static,xe$1=C$2(function(t,r){var E,m,A,S;let{selectedIndex:o,tabs:c,panels:n}=H("Tab.Panel"),d=V("Tab.Panel"),l=K("Tab.Panel"),P=`headlessui-tabs-panel-${I$2()}`,f=React.useRef(null),y$1=y(f,r);s$8(()=>d.registerPanel(f),[d,f]);let u=l.current.panels.indexOf(P);u===-1&&(u=l.current.panels.push(P)-1);let x=n.indexOf(f);x===-1&&(x=u);let s=x===o,i=React.useMemo(()=>({selected:s}),[s]),g=t,R={ref:y$1,id:P,role:"tabpanel","aria-labelledby":(m=(E=c[x])==null?void 0:E.current)==null?void 0:m.id,tabIndex:s?0:-1};return !s&&((A=t.unmount)!=null?A:!0)&&!((S=t.static)!=null&&S)?React__default["default"].createElement(h$3,{as:"span",...R}):$$3({ourProps:R,theirProps:g,slot:i,defaultTag:me,features:Pe$1,visible:s,name:"Tabs.Panel"})}),We$1=Object.assign(fe,{Group:ue,List:de,Panels:Te,Panel:xe$1});

function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

function f(t,...e){t&&e.length>0&&t.classList.add(...e);}function v(t,...e){t&&e.length>0&&t.classList.remove(...e);}var T=(n=>(n.Ended="ended",n.Cancelled="cancelled",n))(T||{});function c(t,e){let n=m$3();if(!t)return n.dispose;let{transitionDuration:d,transitionDelay:o}=getComputedStyle(t),[s,u]=[d,o].map(i=>{let[a=0]=i.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,l)=>l-r);return a});if(s+u!==0){let i=[];i.push(n.addEventListener(t,"transitionrun",a=>{a.target===a.currentTarget&&(i.splice(0).forEach(r=>r()),i.push(n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e("ended"),i.splice(0).forEach(l=>l()));}),n.addEventListener(t,"transitioncancel",r=>{r.target===r.currentTarget&&(e("cancelled"),i.splice(0).forEach(l=>l()));})));}));}else e("ended");return n.add(()=>e("cancelled")),n.dispose}function C(t,e,n,d){let o=n?"enter":"leave",s=m$3(),u=d!==void 0?l(d):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let m=u$4(o,{enter:()=>e.enter,leave:()=>e.leave}),i=u$4(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),a=u$4(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),f(t,...m,...a),s.nextFrame(()=>{v(t,...a),f(t,...i),c(t,r=>(r==="ended"&&(v(t,...m),f(t,...e.entered)),u(r)));}),s.dispose}

function I$1({container:o,direction:t,classes:s,onStart:a,onStop:u}){let c=f$1(),d=p$5(),r=s$7(t);s$8(()=>{let e=m$3();d.add(e.dispose);let n=o.current;if(!!n&&r.current!=="idle"&&!!c.current)return e.dispose(),a.current(r.current),e.add(C(n,s.current,r.current==="enter",l=>{e.dispose(),u$4(l,{[T.Ended](){u.current(r.current);},[T.Cancelled]:()=>{}});})),e.dispose},[t]);}

function x(r=""){return r.split(" ").filter(e=>e.trim().length>1)}let F=React.createContext(null);F.displayName="TransitionContext";var ve=(s=>(s.Visible="visible",s.Hidden="hidden",s))(ve||{});function Ce(){let r=React.useContext(F);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}function ge(){let r=React.useContext(M);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}let M=React.createContext(null);M.displayName="NestingContext";function I(r){return "children"in r?I(r.children):r.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ee(r,e){let s=s$7(r),n=React.useRef([]),m=f$1(),D=p$5(),b=o$3((l,i=j$3.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);t!==-1&&(u$4(i,{[j$3.Unmount](){n.current.splice(t,1);},[j$3.Hidden](){n.current[t].state="hidden";}}),D.microTask(()=>{var o;!I(n)&&m.current&&((o=s.current)==null||o.call(s));}));}),E=o$3(l=>{let i=n.current.find(({el:t})=>t===l);return i?i.state!=="visible"&&(i.state="visible"):n.current.push({el:l,state:"visible"}),()=>b(l,j$3.Unmount)}),S=React.useRef([]),u=React.useRef(Promise.resolve()),p=React.useRef({enter:[],leave:[],idle:[]}),d=o$3((l,i,t)=>{S.current.splice(0),e&&(e.chains.current[i]=e.chains.current[i].filter(([o])=>o!==l)),e==null||e.chains.current[i].push([l,new Promise(o=>{S.current.push(o);})]),e==null||e.chains.current[i].push([l,new Promise(o=>{Promise.all(p.current[i].map(([f,a])=>a)).then(()=>o());})]),i==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>t(i)):t(i);}),h=o$3((l,i,t)=>{Promise.all(p.current[i].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=S.current.shift())==null||o();}).then(()=>t(i));});return React.useMemo(()=>({children:n,register:E,unregister:b,onStart:d,onStop:h,wait:u,chains:p}),[E,b,n,d,h,p,u])}function be(){}let Ee=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function te(r){var s;let e={};for(let n of Ee)e[n]=(s=r[n])!=null?s:be;return e}function Se(r){let e=React.useRef(te(r));return React.useEffect(()=>{e.current=te(r);},[r]),e}let xe="div",ne=S$1.RenderStrategy,re=C$2(function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:D,afterLeave:b,enter:E,enterFrom:S,enterTo:u,entered:p,leave:d,leaveFrom:h,leaveTo:l,...i}=e,t=React.useRef(null),o=y(t,s),f=i.unmount?j$3.Unmount:j$3.Hidden,{show:a,appear:P,initial:ie}=Ce(),[v,_]=React.useState(a?"visible":"hidden"),z=ge(),{register:N,unregister:V}=z,j=React.useRef(null);React.useEffect(()=>N(t),[N,t]),React.useEffect(()=>{if(f===j$3.Hidden&&!!t.current){if(a&&v!=="visible"){_("visible");return}return u$4(v,{["hidden"]:()=>V(t),["visible"]:()=>N(t)})}},[v,t,N,V,a,f]);let oe=s$7({enter:x(E),enterFrom:x(S),enterTo:x(u),entered:x(p),leave:x(d),leaveFrom:x(h),leaveTo:x(l)}),L=Se({beforeEnter:n,afterEnter:m,beforeLeave:D,afterLeave:b}),U=a$3();React.useEffect(()=>{if(U&&v==="visible"&&t.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,v,U]);let k=ie&&!P,se=(()=>!U||k||j.current===a?"idle":a?"enter":"leave")(),le=o$3(C=>u$4(C,{enter:()=>L.current.beforeEnter(),leave:()=>L.current.beforeLeave(),idle:()=>{}})),ae=o$3(C=>u$4(C,{enter:()=>L.current.afterEnter(),leave:()=>L.current.afterLeave(),idle:()=>{}})),w=ee(()=>{_("hidden"),V(t);},z);I$1({container:t,classes:oe,direction:se,onStart:s$7(C=>{w.onStart(t,C,le);}),onStop:s$7(C=>{w.onStop(t,C,ae),C==="leave"&&!I(w)&&(_("hidden"),V(t));})}),React.useEffect(()=>{!k||(f===j$3.Hidden?j.current=null:j.current=a);},[a,k,v]);let ue=i,de={ref:o};return React__default["default"].createElement(M.Provider,{value:w},React__default["default"].createElement(C$1,{value:u$4(v,{["visible"]:p$2.Open,["hidden"]:p$2.Closed})},$$3({ourProps:de,theirProps:ue,defaultTag:xe,features:ne,visible:v==="visible",name:"Transition.Child"})))}),q=C$2(function(e,s){let{show:n,appear:m=!1,unmount:D,...b}=e,E=React.useRef(null),S=y(E,s);a$3();let u=s$3();if(n===void 0&&u!==null&&(n=u$4(u,{[p$2.Open]:!0,[p$2.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=React.useState(n?"visible":"hidden"),h=ee(()=>{d("hidden");}),[l,i]=React.useState(!0),t=React.useRef([n]);s$8(()=>{l!==!1&&t.current[t.current.length-1]!==n&&(t.current.push(n),i(!1));},[t,n]);let o=React.useMemo(()=>({show:n,appear:m,initial:l}),[n,m,l]);React.useEffect(()=>{if(n)d("visible");else if(!I(h))d("hidden");else {let a=E.current;if(!a)return;let P=a.getBoundingClientRect();P.x===0&&P.y===0&&P.width===0&&P.height===0&&d("hidden");}},[n,h]);let f={unmount:D};return React__default["default"].createElement(M.Provider,{value:h},React__default["default"].createElement(F.Provider,{value:o},$$3({ourProps:{...f,as:React.Fragment,children:React__default["default"].createElement(re,{ref:S,...f,...b})},theirProps:{},defaultTag:React.Fragment,features:ne,visible:p==="visible",name:"Transition"})))}),Pe=C$2(function(e,s){let n=React.useContext(F)!==null,m=s$3()!==null;return React__default["default"].createElement(React__default["default"].Fragment,null,!n&&m?React__default["default"].createElement(q,{ref:s,...e}):React__default["default"].createElement(re,{ref:s,...e}))}),We=Object.assign(q,{Child:Pe,Root:q});

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min();
		} else {
		  module.exports = requireReactIs_development();
		}
} (reactIs));
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertTriangle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$6(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$6({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React__default["default"].createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React__default["default"].createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
AlertTriangle.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
AlertTriangle.displayName = 'AlertTriangle';
var AlertTriangle$1 = AlertTriangle;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Check = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$5(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$5({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
Check.displayName = 'Check';
var Check$1 = Check;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$4({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
ChevronDown.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
ChevronDown.displayName = 'ChevronDown';
var ChevronDown$1 = ChevronDown;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$3({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
ChevronUp.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
ChevronUp.displayName = 'ChevronUp';
var ChevronUp$1 = ChevronUp;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Circle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$2({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
});
Circle.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
Circle.displayName = 'Circle';
var Circle$1 = Circle;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Disc = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$1({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
Disc.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
Disc.displayName = 'Disc';
var Disc$1 = Disc;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var X = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default["default"].createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React__default["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X.propTypes = {
  color: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number])
};
X.displayName = 'X';
var X$1 = X;

var css_248z$5 = ".Button-module_button__2ZuB7 {\n    font-weight: bold;\n    border-radius: 5px;\n    padding: .625em .625em;\n}\n.Button-module_button__2ZuB7:hover {\n    opacity: .5;\n}\n.Button-module_button__2ZuB7:focus {\n    outline: none; \n}\n.Button-module_button__2ZuB7:focus-visible {\n    box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-opacity: 0.75;\n    \n}\n.Button-module_button__2ZuB7:disabled,\nbutton[disabled]{\n    opacity: 0.65; \n    cursor: not-allowed;\n  }\n.Button-module_primary__s1sM6 {\n    color: white;\n    background-color: var(--color-actionBlue) ;\n    \n}\n.Button-module_secondary__R0waJ {\n    color: white;\n    background-color: var(--color-secondary);\n}\n.Button-module_secondary__R0waJ.Button-module_outline__F5jq- {\n    border: 2px solid var(--color-secondary);\n    background-color: transparent;\n    color: var(--color-secondary);\n}\n.Button-module_primary__s1sM6.Button-module_outline__F5jq- {\n    border: 2px solid var(--color-actionBlue) ;\n    background-color: transparent ;\n    color: var(--color-actionBlue) ;\n    font-weight: bold;\n}\n.Button-module_editor__vtImv {\n    color: black;\n    background-color: #dbdaff;\n    border: 2px solid #4945FF;\n}\n.Button-module_darkFont__RoFO1 {\n    color: var(--color-darkGray) !important;\n}\n\n\n";
var styles$5 = {"button":"Button-module_button__2ZuB7","primary":"Button-module_primary__s1sM6","secondary":"Button-module_secondary__R0waJ","outline":"Button-module_outline__F5jq-","editor":"Button-module_editor__vtImv","darkFont":"Button-module_darkFont__RoFO1"};
styleInject(css_248z$5);

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames$1 = classnames.exports;

var Button = function (_a) {
    var _b, _c, _d, _e, _f;
    var children = _a.children, disabled = _a.disabled, primary = _a.primary, secondary = _a.secondary, darkFont = _a.darkFont, overrideColor = _a.overrideColor, editor = _a.editor, outline = _a.outline, onClick = _a.onClick, type = _a.type;
    return (jsxRuntime.jsx("button", __assign({ type: type ? type : "button", onClick: onClick, disabled: disabled, style: outline ? { color: overrideColor, border: "2px solid " + overrideColor } : primary ? { backgroundColor: overrideColor } : {}, className: classNames$1(styles$5.button, (_b = {}, _b[styles$5.primary] = primary, _b), (_c = {}, _c[styles$5.editor] = editor, _c), (_d = {}, _d[styles$5.secondary] = secondary, _d), (_e = {}, _e[styles$5.outline] = outline, _e), (_f = {}, _f[styles$5.darkFont] = darkFont, _f)) }, { children: children })));
};

function ConfirmationBox(_a) {
    var onCancel = _a.onCancel, onConfirm = _a.onConfirm, popButton = _a.popButton, panelText = _a.panelText;
    return (jsxRuntime.jsxs(mt, { children: [jsxRuntime.jsx(mt.Button, __assign({ "data-testid": "popbutton" }, { children: popButton })), jsxRuntime.jsx(We, __assign({ as: React.Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1" }, { children: jsxRuntime.jsx(mt.Panel, __assign({ "data-testid": "panel", className: "absolute z-1000 px-4 mt-3  transform -translate-x-96 -translate-y-24 sm:px-0 lg:max-w-3xl" }, { children: jsxRuntime.jsxs("div", __assign({ className: "w-80 shadow-lg rounded-md border-solid border-2" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "flex items-center justify-start relative gap-2 bg-white p-5 " }, { children: [jsxRuntime.jsx(AlertTriangle$1, { size: 24, color: "#ff605c" }), jsxRuntime.jsx("div", __assign({ "data-testid": "div", className: "text-gray-800" }, { children: panelText }))] })), jsxRuntime.jsxs("div", __assign({ className: "flex justify-end space-x-2 bg-light-gray p-2 bg-error-red" }, { children: [jsxRuntime.jsx("span", __assign({ className: "bg-green-200", "data-testid": "yes" }, { children: jsxRuntime.jsx(Button, __assign({ onClick: onConfirm }, { children: "Yes" })) })), jsxRuntime.jsx("span", __assign({ className: "bg-gray-200" }, { children: jsxRuntime.jsx(Button, __assign({ onClick: onCancel, "data-testid": "no" }, { children: "No" })) }))] }))] })) })) }))] }));
}

var css_248z$4 = ".RadioButtonGroup-module_label__qkXak {\n    font-size: 20px;    \n}\n\n.RadioButtonGroup-module_item__yCRLQ {\n    display: flex;\n    flex-direction: row;\n    gap: 0.5em;\n    margin: 20px;\n    color: gray\n}\n\n.RadioButtonGroup-module_icon__j3D3u {\n    color: blue;\n}\n\n.RadioButtonGroup-module_option__InW5p {\n    color: black;\n}";
var styles$4 = {"label":"RadioButtonGroup-module_label__qkXak","item":"RadioButtonGroup-module_item__yCRLQ","icon":"RadioButtonGroup-module_icon__j3D3u","option":"RadioButtonGroup-module_option__InW5p"};
styleInject(css_248z$4);

var RadioButtonGroup = function (_a) {
    var data = _a.data, label = _a.label, isSelected = _a.isSelected, onChange = _a.onChange; _a.defaultColor; // add later
    _a.overrideColor // add later
    ;
    return (jsxRuntime.jsx(et, __assign({ value: isSelected, onChange: onChange }, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [label && jsxRuntime.jsx(et.Label, __assign({ className: classNames$1(styles$4.label) }, { children: label })), data.map(function (element) { return (
                /* Use the `active` state to conditionally style the active option. */
                /* Use the `checked` state to conditionally style the checked option. */
                jsxRuntime.jsx(et.Option, __assign({ value: element.id, as: React.Fragment }, { children: function (_a) {
                        var checked = _a.checked;
                        return (jsxRuntime.jsxs("div", __assign({ className: classNames$1(styles$4.item) }, { children: [jsxRuntime.jsx("span", __assign({ className: checked ? classNames$1(styles$4.icon) : "" }, { children: checked ? jsxRuntime.jsx(Disc$1, {}) : jsxRuntime.jsx(Circle$1, {}) })), jsxRuntime.jsx("span", __assign({ className: classNames$1(styles$4.option) }, { children: element.value }))] })));
                    } }), element.id)); })] }) })));
};

var css_248z$3 = ".Typography-module_heading1__4gmU7 {\n  font-family: var(--common-font);\n  font-size: 32px;\n  color: var(--color-darkGray);\n}\n\n.Typography-module_heading2__D7Prd {\n    font-family: 'Roboto';\n    font-size: 18px;\n    line-height: 21.1px;\n}\n\n.Typography-module_title__PfswO {\n    font-family: 'Roboto';\n    font-size: 24px;\n    font-weight: bolder;\n    line-height: 28.1px;\n    letter-spacing: 0pt;\n    color: #666666;\n}\n\n.Typography-module_caption1__xaCJb {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    line-height: 16.4pt;\n    letter-spacing: 0pt;\n    color: var(--color-darkGray);\n}\n\n.Typography-module_caption2__gln43 {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 15px;\n    line-height: 17.6pt;\n    letter-spacing: 0pt;\n    color: #666666;\n}\n\n.Typography-module_menu__5i4H6 {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 24px;\n    font-weight: bolder;\n    line-height: 28.1pt;\n    letter-spacing: 0pt;\n    color: var(--color-darkGray);\n}\n\n.Typography-module_placeholder__6e4ro {\n    font-family: 'Roboto';\n    font-size: 14px;\n    line-height: 16.4px;\n    letter-spacing: 0pt;\n    color: #959595;\n}\n\n.Typography-module_subheading__a9d6v {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 17px;\n    font-weight: bolder;\n    line-height: 21.8px;\n    letter-spacing: 0px;\n    color: #333333;\n}\n\n.Typography-module_link__GnwHq {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0px;\n    color: #182D36;\n}\n\n.Typography-module_button__s-u-b {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0px;\n    color: #000000;\n}";
var styles$3 = {"heading1":"Typography-module_heading1__4gmU7","heading2":"Typography-module_heading2__D7Prd","title":"Typography-module_title__PfswO","caption1":"Typography-module_caption1__xaCJb","caption2":"Typography-module_caption2__gln43","menu":"Typography-module_menu__5i4H6","placeholder":"Typography-module_placeholder__6e4ro","subheading":"Typography-module_subheading__a9d6v","link":"Typography-module_link__GnwHq","button":"Typography-module_button__s-u-b"};
styleInject(css_248z$3);

var Heading1 = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("h1", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.heading1) }, { children: children })));
};
var Heading2 = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("h2", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.heading2) }, { children: children })));
};
var Title = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("p", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.title) }, { children: children })));
};
var Caption1 = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("caption", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.caption1) }, { children: children })));
};
var Caption2 = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("caption", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.caption2) }, { children: children })));
};
var Menu = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("p", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.caption2) }, { children: children })));
};
var Placeholder = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("p", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.placeholder) }, { children: children })));
};
var Subheading = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("h3", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.subheading) }, { children: children })));
};
var Link = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("p", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.link) }, { children: children })));
};
var ButtonTypography = function (_a) {
    var children = _a.children, overrideColor = _a.overrideColor, overrideFont = _a.overrideFont;
    return (jsxRuntime.jsx("p", __assign({ style: { color: overrideColor, fontFamily: overrideFont }, className: classNames$1(styles$3.button) }, { children: children })));
};

var Toggle = function (_a) {
    var label = _a.label, enabled = _a.enabled, setEnabled = _a.setEnabled, EnabledColor = _a.EnabledColor, DisabledColor = _a.DisabledColor;
    return (jsxRuntime.jsxs("div", __assign({ "data-testid": "div", className: "flex items-center" }, { children: [jsxRuntime.jsx("p", __assign({ "data-testid": "label", className: "font-sans mr-3 text-lg" }, { children: label })), jsxRuntime.jsxs(be$2, __assign({ "data-testid": "switch", checked: enabled, onChange: setEnabled, 
                //TODO: Custom color is not working
                className: "".concat(enabled ? (EnabledColor ? EnabledColor : 'bg-primary') : (DisabledColor ? DisabledColor : 'bg-secondary'), "\n              relative inline-flex h-[27px] w-[63px] \n              shrink-0\n              cursor-pointer rounded-full border-2 \n              border-transparent transition-colors duration-200 \n              ease-in-out focus:outline-none \n              focus-visible:ring-1  \n              focus-visible:ring-white \n              focus-visible:ring-opacity-75") }, { children: [jsxRuntime.jsx("span", __assign({ className: "sr-only" }, { children: "Use setting" })), jsxRuntime.jsx("span", { "data-testid": "circle", "aria-hidden": "true", className: "".concat(enabled ? 'translate-x-9' : 'translate-x-0', "\n                pointer-events-none \n                inline-block \n                h-[23px] \n                w-[23px] \n                transform rounded-full \n                bg-white \n                shadow-lg \n                ring-0 \n                transition \n                duration-200 \n                ease-in-out") })] }))] })));
};

var Dropdown = function (_a) {
    var label = _a.label, setSelected = _a.setSelected, selected = _a.selected, options = _a.options;
    return (jsxRuntime.jsxs("div", __assign({ "data-testid": "div", className: "text-left pb-5" }, { children: [label && (jsxRuntime.jsx("label", __assign({ "data-testid": "label", className: "text-left block text-gray-700 text-sm font-bold pb-2" }, { children: label }))), jsxRuntime.jsx(pt, __assign({ as: "div", className: "space-y-1 min-w-fit", value: selected, onChange: setSelected, "data-testid": "listbox" }, { children: jsxRuntime.jsxs("div", __assign({ "data-testid": "buttonAndOptions", className: "relative min-w-fit " }, { children: [jsxRuntime.jsx("span", __assign({ className: "inline-block min-w-fit w-full rounded-md shadow-sm" }, { children: jsxRuntime.jsxs(pt.Button, __assign({ "data-testid": "button", className: " flex bg-white shadow appearance-none border rounded w-full text-gray-700 leading-tight cursor-default relative w-full py-2 px-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:leading-5" }, { children: [jsxRuntime.jsx("span", __assign({ className: "mr-[25px] block truncate" }, { children: selected ? selected : "Select..." })), jsxRuntime.jsx("span", __assign({ className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, { children: jsxRuntime.jsx(ChevronDown$1, { children: "className=\"h-5 w-5 text-gray-400\" aria-hidden=\"true\"" }) }))] })) })), jsxRuntime.jsx(pt.Options, __assign({ className: "absolute mt-1 min-w-fit max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, { children: options.map(function (option, index) { return (jsxRuntime.jsx(pt.Option, __assign({ "data-testid": index, className: function (_a) {
                                    var active = _a.active;
                                    return "relative cursor-default select-none py-2 pl-10 pr-4 ".concat(active ? "bg-amber-100 text-amber-900" : "text-gray-900");
                                }, value: option }, { children: function (_a) {
                                    var selected = _a.selected;
                                    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("span", __assign({ className: "block truncate ".concat(selected ? "font-medium" : "font-normal") }, { children: option })), selected ? (jsxRuntime.jsx("span", __assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600" }, { children: jsxRuntime.jsx(Check$1, { children: " className=\"h-5 w-5\" aria-hidden=\"true\"" }) }))) : null] }));
                                } }), index)); }) }))] })) }))] })));
};

var Input = function (_a) {
    var placeholder = _a.placeholder, className = _a.className, label = _a.label, type = _a.type, onChange = _a.onChange, value = _a.value;
    return (jsxRuntime.jsxs("div", __assign({ className: "".concat(className) }, { children: [label && (jsxRuntime.jsx("label", __assign({ className: "text-left block text-gray-700 text-sm font-bold mb-2" }, { children: label }))), jsxRuntime.jsx("input", { value: value, type: type, className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', onChange: function (e) { return onChange(e.target.value); }, placeholder: placeholder, defaultValue: value })] })));
};

var css_248z$2 = ".FormElement-module_formElement__KEdBL {\n    display: flex; \n    margin-bottom: 1.5rem; \n    margin-top: 1rem; \n    flex-direction: column; \n    width: 10rem; \n}\n\n.FormElement-module_label__jkKt0 {\n    padding-bottom: 10px;\n}";
var styles$2 = {"formElement":"FormElement-module_formElement__KEdBL","label":"FormElement-module_label__jkKt0"};
styleInject(css_248z$2);

function FormElement(_a) {
    var label = _a.label, children = _a.children;
    return (jsxRuntime.jsxs("div", __assign({ "data-testid": "form", className: classNames$1(styles$2.formElement) }, { children: [jsxRuntime.jsx("label", __assign({ "data-testid": "label", className: classNames$1(styles$2.label) }, { children: label })), children] })));
}

var Accordion = function (_a) {
    var data = _a.data;
    return (jsxRuntime.jsx("div", __assign({ className: "w-full px-4 pt-16" }, { children: jsxRuntime.jsx("div", __assign({ className: "mx-auto w-full rounded-2xl p-2" }, { children: data.map(function (data, index) { return (jsxRuntime.jsx(Oe$3, { children: function (_a) {
                    var open = _a.open;
                    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(Oe$3.Button, __assign({ className: "flex w-full justify-between rounded-lg bg-stone-200 px-4 py-2 text-left text-sm font-medium text-stone-900 hover:bg-stone-300 focus:outline-none focus-visible:ring focus-visible:ring-stone-500 focus-visible:ring-opacity-75" }, { children: [jsxRuntime.jsx("span", { children: data.title }), jsxRuntime.jsx(ChevronUp$1, { className: "".concat(open ? "rotate-180 transform" : "", " h-5 w-5 text-stone-900") })] })), jsxRuntime.jsx(Oe$3.Panel, __assign({ className: "px-4 pt-4 pb-2 text-sm text-gray-600" }, { children: data.content }))] }));
                } }, index)); }) })) })));
};

var css_248z$1 = ".Modal-module_dialogBox__bMsWS {\n    width:50%;\n    background-color:white;\n    position:fixed;\n    top: 50%;\n    left: 25%;\n    padding: 10px;\n    border-radius:10px;\n    border:2px solid white;\n    box-shadow:0px 0px 10px 0px grey;\n}\n.Modal-module_button__CsyUv {\n    float: right;\n    vertical-align: top;\n}\n.Modal-module_header__ILG9i {\n    display: flex;\n    min-height: 2rem;\n    border-bottom: 1px solid #dedede;\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n.Modal-module_modalChildren__snNmi {\n    text-align: left;\n  }";
var styles$1 = {"dialogBox":"Modal-module_dialogBox__bMsWS","button":"Modal-module_button__CsyUv","header":"Modal-module_header__ILG9i","modalChildren":"Modal-module_modalChildren__snNmi"};
styleInject(css_248z$1);

var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    return (jsxRuntime.jsx("div", __assign({ className: classNames$1(styles$1.dialogBox) }, { children: jsxRuntime.jsx(gt, __assign({ "data-testid": "dialog", as: "div", className: "relative z-10", open: isOpen, onClose: onClose }, { children: jsxRuntime.jsx("div", __assign({ className: "fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center" }, { children: jsxRuntime.jsxs(gt.Panel, __assign({ "data-testid": "panel", className: classNames$1(styles$1.dialogBox) }, { children: [jsxRuntime.jsx("span", __assign({ className: classNames$1(styles$1.button) }, { children: jsxRuntime.jsx("button", __assign({ "data-testid": "icon", onClick: onClose }, { children: jsxRuntime.jsx(X$1, { color: 'red', size: 18 }) })) })), title && (jsxRuntime.jsx("span", __assign({ className: classNames$1(styles$1.header) }, { children: jsxRuntime.jsx(gt.Title, __assign({ "data-testid": "title" }, { children: jsxRuntime.jsx(Title, { children: title }) })) }))), jsxRuntime.jsx("div", __assign({ className: classNames$1(styles$1.modalChildren) }, { children: children }))] })) })) })) })));
};

var css_248z = ".DatePicker-module_input__pcSW8 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem; \n    padding-left: 0.75rem;\n    padding-right: 0.75rem; \n    color: #374151; \n    line-height: 1.25; \n    width: 1.5rem; \n    border-radius: 0.25rem; \n    border-width: 1px; \n    appearance: none; \n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); \n}";
var styles = {"input":"DatePicker-module_input__pcSW8"};
styleInject(css_248z);

var DatePicker = function (_a) {
    var dateValue = _a.dateValue, onChange = _a.onChange;
    return (jsxRuntime.jsx("input", { type: "date", "data-testid": "DRP", value: dateValue, onChange: function (e) { return onChange(e.target.value); }, className: classNames$1(styles.input) }));
};

function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(" ");
}
var Tabs = function (_a) {
    var data = _a.data;
    return (jsxRuntime.jsx("div", __assign({ className: "w-full max-w-md px-2 py-16 sm:px-0" }, { children: jsxRuntime.jsxs(We$1.Group, { children: [jsxRuntime.jsx(We$1.List, __assign({ className: "flex space-x-1 rounded-xl bg-blue-900/20 p-1" }, { children: data.map(function (data, index) { return (jsxRuntime.jsx(We$1, __assign({ className: function (_a) {
                            var selected = _a.selected;
                            return classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", selected
                                ? "bg-white shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white");
                        } }, { children: data.title }), index)); }) })), jsxRuntime.jsx(We$1.Panels, __assign({ className: "mt-2" }, { children: data.map(function (data, index) { return (jsxRuntime.jsx(We$1.Panel, __assign({ className: classNames("rounded-xl bg-white p-3", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2") }, { children: data.content }), index)); }) }))] }) })));
};

var mapTheme = function (variables) {
    var newObj = {};
    Object.keys(variables).forEach(function (key) {
        newObj["--color-".concat(key.toString())] = variables[key];
    });
    return newObj;
};
var mapTypographyTheme = function (variables) {
    var newObj = {};
    Object.keys(variables).forEach(function (key) {
        newObj["--".concat(key.toString())] = variables[key];
    });
    return newObj;
};
var applyTheme = function (theme, isColor) {
    var themeObject;
    if (!isColor)
        themeObject = mapTypographyTheme(theme);
    else
        themeObject = mapTheme(theme);
    if (!themeObject)
        return;
    var root = document.documentElement;
    Object.keys(themeObject).forEach(function (property) {
        if (property === 'name') {
            return;
        }
        root.style.setProperty(property, themeObject[property]);
    });
};

var ThemeContext = React.createContext({
    colorPalette: {},
    changeColorPalette: function (colorPaletteVal) { },
    changeTypographyCatalog: function (typographyVal) { },
    typographyCatalog: {}
});
var defaultColorPalette = {
    "primary": "#46A689",
    "secondary": "#E0C591",
    "actionBlue": "#2F77EE",
    "darkGray": "#1c1917",
    "mediumGray": "#78716c",
    "lightGray": "#d6d3d1"
};
var defaultCatalog = {
    "common-font": "'Courier New', Courier, monospace"
};
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState({}), colorPalette = _b[0], setColorPalette = _b[1];
    var _c = React.useState({}), typographyCatalog = _c[0], setTypographyCatalog = _c[1];
    var changeTypographyCatalog = function (typographyCatalog) {
        applyTheme(typographyCatalog, false);
        setTypographyCatalog(typographyCatalog);
    };
    var changeColorPalette = function (colorPaletteVal) {
        applyTheme(colorPaletteVal, true);
        setColorPalette(colorPaletteVal);
    };
    if (Object.keys(colorPalette).length === 0) {
        changeColorPalette(defaultColorPalette);
    }
    if (Object.keys(typographyCatalog).length === 0) {
        changeTypographyCatalog(defaultCatalog);
    }
    return (jsxRuntime.jsx(ThemeContext.Provider, __assign({ value: { colorPalette: colorPalette, changeColorPalette: changeColorPalette, typographyCatalog: typographyCatalog, changeTypographyCatalog: changeTypographyCatalog } }, { children: children })));
};

function App() {
    React.useContext(ThemeContext).changeColorPalette;
    React.useEffect(function () {
        // changeColorPalette(colorPaletteTest);
    }, []);
    return (jsxRuntime.jsx(BrowserRouter, { children: jsxRuntime.jsx(Routes, { children: jsxRuntime.jsx(Route, { path: "/", element: jsxRuntime.jsx(Home, {}) }) }) }));
}
function Home() {
    var _a = React.useState(); _a[0]; _a[1];
    var data = [{ title: "Title 1", content: "Value 1" }, { title: "Title 2", content: "Value 2" }, { title: "Title 3", content: "Value 3" }];
    return (jsxRuntime.jsxs("div", __assign({ className: "grid h-screen place-items-center" }, { children: [jsxRuntime.jsx(Accordion, { data: data }), jsxRuntime.jsx(Button, __assign({ primary: true }, { children: "text blah blah blah " }))] })));
}

var root = ReactDOM__default["default"].createRoot(document.getElementById("root"));
root.render(jsxRuntime.jsx(React__default["default"].StrictMode, { children: jsxRuntime.jsx(ThemeProvider, { children: jsxRuntime.jsx(App, {}) }) }));

exports.Accordion = Accordion;
exports.Button = Button;
exports.ButtonTypography = ButtonTypography;
exports.Caption1 = Caption1;
exports.Caption2 = Caption2;
exports.ConfirmationBox = ConfirmationBox;
exports.DatePicker = DatePicker;
exports.Dropdown = Dropdown;
exports.FormElement = FormElement;
exports.Heading1 = Heading1;
exports.Heading2 = Heading2;
exports.Input = Input;
exports.Link = Link;
exports.Menu = Menu;
exports.Modal = Modal;
exports.Placeholder = Placeholder;
exports.RadioButtonGroup = RadioButtonGroup;
exports.Subheading = Subheading;
exports.Tabs = Tabs;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
exports.Title = Title;
exports.Toggle = Toggle;
//# sourceMappingURL=index.js.map
