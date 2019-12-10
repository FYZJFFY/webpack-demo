"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  console.log("开始创建元素");
  let aa = "我是aa";
  console.log(aa);
  const bb = "我是bb";
  console.log(bb);
  const element = document.createElement('div'); // Lodash, currently included via a script, is required for this line to work

  element.innerHTML = _lodash.default.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());