/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nhtml {\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n  background-color: lightsteelblue;\\n}\\nul {\\n  list-style: none;\\n  list-style-type: none;\\n\\n}\\n\\nli {\\n  display: inline;\\n}\\n.header {\\n  display: flex;\\n  flex-direction: row;\\n  height: 100px;\\n  font-size: 25px;\\n  background-color: darkgrey;\\n  padding: 10px;\\n  align-items: center;\\n  \\n}\\n\\n.header-menu, .header-sel {\\n  margin-left: auto; \\n  margin-right: 20px;\\n  font-size: 16px;\\n  border: 1px solid black;\\n  border-radius: 10px;\\n  padding: 10px;\\n  background-color: steelblue;\\n  background-clip: border-box;\\n}\\n.header-sel {\\n  margin-left: 10px;\\n}\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.topbar {\\n  font-size: 20px;\\n  border-bottom: 2px solid black;\\n}\\n\\n.sidebar {\\n  width: 25%;\\n  font-size: 20px;\\n  background-color: steelblue;\\n  \\n}\\n\\n.content-items {\\n  background-color: lightsteelblue;\\n  width: 100%;\\n  \\n}\\n\\n.item-row {\\n  display: flex;\\n  flex-direction: row;\\n  border: 1px solid black;\\n  \\n  \\n}\\n\\n.item-cell, .item-sidebar {\\n  width: 200px;\\n  height: 50px;\\n  border: 1px solid black;\\n  border-radius: 10px;\\n  margin: 5px;\\n  padding: 10px;\\n}\\n\\n.item-sidebar:hover {\\n  background-color: lightblue;\\n\\n}\\n\\n/* For modal show/toggle */\\n\\t\\n\\n.modal {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  opacity: 0;\\n  visibility: hidden;\\n  transform: scale(1.1);\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\n}\\n.modal-content {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: white;\\n  padding: 1rem 1.5rem;\\n  width: 24rem;\\n  border-radius: 0.5rem;\\n}\\n.modal-vis {\\n  opacity: 1;\\n  visibility: visible;\\n  transform: scale(1.0);\\n  /* transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s; */\\n}\\n\\n.modal-close {\\n  float: right;\\n  width: 1.5rem;\\n  line-height: 1.5rem;\\n  text-align: center;\\n  cursor: pointer;\\n  border-radius: 0.25rem;\\n  background-color: lightgray;\\n}\\n.modal-close:hover {\\n  background-color: darkgray;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dataModel.js":
/*!**************************!*\
  !*** ./src/dataModel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"user\": () => (/* binding */ user),\n/* harmony export */   \"todoItem\": () => (/* binding */ todoItem)\n/* harmony export */ });\n// PLACEHOLDER - not used for now\n// create USER class \n// (initial revision to use HTML localStorage, no user DB yet)\nclass user {\n  constructor(userID, userName) {\n    this.userID = userID;\n    this.userName = userName;\n    // add more properties as needed (TODO)\n  }\n  // add methods as needed (TODO)\n} \n\n// create class for todo list items.\nclass todoItem {\n  constructor (itemID, projectID, ownerID, ownerName, projectName, itemDesc, itemDueDate, itemPriority) {\n    this.itemID = itemID;\n    this.projectID = projectID;\n    this.ownerID = ownerID;\n    this.ownerName = ownerName; // temp\n    this.projectName = projectName; // temp\n    this.itemDesc = itemDesc; \n    this.itemDueDate = itemDueDate;\n    this.itemPriority = itemPriority;\n    // add props. as needed\n  }\n  // add methods as needed\n}\n\n// class for project\n\n//export class todoProject {\n//  constructor (projectID, projectName, itemArray) {\n//    this.projectID = projectID;\n//    this.projectName = projectName; // temp\n//  }\n//}\n\n\n//# sourceURL=webpack://todo/./src/dataModel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _dataModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataModel.js */ \"./src/dataModel.js\");\n/*\n  To Do List Application \n\n  by JAS\n  created 11/02/2021\n\n  Revisions\n  0.01 - Most basic functionality \n*/\n\n\n // user not used yet\n\nconst DEFAULT_NUM_PROJ = 2; // placeholder to fill map with 'dummy' objects\nconst DEFAULT_NUM_TASKS_PER_PROJ = 6;\nconst DEFAULT_PROJECT = 'Default Project';\n\n// temp JSON for initialization\nconst defaultKey = DEFAULT_PROJECT;\nconst defaultTask = `{\"itemID\":1,\"projectID\":2,\"ownerID\":3,\"ownerName\":\"Jay\",\"projectName\":\"default\",\"itemDesc\":\"Insert ToDo item description here.\",\"itemDueDate\":\"Due Date\",\"itemPriority\":\"Priority\"}`;\n\n// basic clear function - for clearing any/all div display area children\nfunction contentClear (clearElement, callback) {\n  while (clearElement.firstChild) {\n    clearElement.removeChild(clearElement.firstChild);\n  }\n  if (callback) callback();\n}\n\n// toggle modal helper function. Pass the main modal element to toggle vis/non-vis\nfunction toggleModal(modalType) {\n  let modal; // the modal we want to toggle\n  modal = document.getElementById(modalType); \n  if (modal.classList.contains('modal-vis')) modal.classList.remove('modal-vis');\n  else modal.classList.add('modal-vis');\n}\n\n// display the entire Map to screen (also see conditional below)   NOT CURRENTLY USED\n/* NOT USED !!!\nfunction showAll () {\n  projectMap.forEach( (value, key) => { \n    _tp.innerText += key; // header with project name\n    outputTemp.appendChild(_tp);  \n    for (let i = 0; i < value.length; i++) {\n      _ul = document.createElement('div');\n      _ul.classList.add('item-row')\n      Object.keys(value[i]).forEach(_key => {      \n        _li = document.createElement('div');\n        _li.classList.add('item-cell');\n        // conditional -- only display the items we want to see - Name, Desc, Due Date, Priority\n        if ((_key === 'itemDesc') || (_key === 'itemDueDate') || (_key === 'itemPriority')) {\n          _li.innerText += value[i][_key];\n          _ul.appendChild(_li);\n        }\n      })\n      _ul.innerHTML += '<br>';  // more readable this way. Probably a better way to do this with HTML/CSS/etc.\n      outputTemp.appendChild(_ul);\n    };\n  });\n}\n*/\n\n// display the project names in the sidebar\n// setup click event to display project details in content-cells\nfunction sidebar() {\n  let _sb;\n  let keys = Array.from(projectMap.keys());\n  let outputTemp = document.getElementById('sidebar');\n  if (outputTemp) contentClear(outputTemp, null);  // if a sidebar exists, clear and re-draw\n  for (let i = 0; i < keys.length; i++) {\n    _sb = document.createElement('div');\n    _sb.classList.add('item-sidebar');\n    _sb.addEventListener('click', (e) => {\n      dispProjectTaskItems(keys[i])\n      e.preventDefault();\n    });\n    _sb.innerText = keys[i] + '_' + i;\n    outputTemp.appendChild(_sb);\n  }\n  // if no project has been selected (i.e. first run of app) then display DEFAULT_PROJECT\n  // if (!document.getElementById('content-cells').firstChild) {\n  //   dispProjectTaskItems(DEFAULT_PROJECT);\n  // }\n  _sb = document.createElement('div');\n  _sb.innerText = '+ Add New Project';\n  _sb.classList.add('item-sidebar');\n  _sb.id = 'add-new'; // may not need this...\n  _sb.addEventListener('click', (e) => {\n    e.preventDefault();\n    addProject();\n  });\n  outputTemp.appendChild(_sb);\n}\n\n// add a project from sidebar selection\nfunction addProject() {\n  let _projectName;\n  toggleModal('add-modal');\n  let _pAddDone = document.getElementById('add-done');\n  _pAddDone.addEventListener('click', (e) => {\n    e.preventDefault();\n    _projectName = document.getElementById('projName-add').value;\n    toggleModal('add-modal');\n    projectMap.set(_projectName, null);\n    sidebar();\n  }, {once: true});\n}\n\n// display selected project task items\nfunction dispProjectTaskItems (project) {\n  let _ul, _li;\n  let outputTemp = document.getElementById('content-cells');\n  let _pTaskArray = projectMap.get(project);\n  if (outputTemp.firstChild) contentClear(outputTemp, null);\n  if (!project) project = 'Default';\n  let topBar = document.getElementById('topbar');\n  topBar.innerHTML = `<h3>To Do Items for ${project}</h3>`;\n  if (_pTaskArray !== null) {\n    for (let i = 0; i < _pTaskArray.length; i++) {\n      _ul = document.createElement('div');\n      _ul.classList.add('item-row')\n      Object.keys(_pTaskArray[i]).forEach(_key => {      \n        _li = document.createElement('div');\n        _li.classList.add('item-cell');\n        // TEST OK console.log(i + '   ' + value[i][_key] + '    ' + (typeof value[i][_key]) + '   ' + _key);\n        // conditional -- only display the items we want to see - Name, Desc, Due Date, Priority\n        if ((_key === 'itemDesc') || (_key === 'itemDueDate') || (_key === 'itemPriority')) {\n          _li.innerText += _pTaskArray[i][_key];\n          _ul.appendChild(_li);\n        }\n      })\n      _ul.innerHTML += '<br>';  // more readable this way. Probably a better way to do this with HTML/CSS/etc.\n      outputTemp.appendChild(_ul);\n      // TODO add event listener, checkbox and/or buttons for edit and delete of each task in the list\n    };\n  }\n  else {\n    outputTemp.innerText = 'No Tasks have been added to this project yet. Click below to add some!';\n  }\n  // the add new task button\n  _ul = document.createElement('div');\n  _ul.classList.add('item-cell');\n  _ul.innerText = '+ Add New Task';\n  _ul.id = 'add-task'; // TODO verify this is needed ???\n  _ul.addEventListener('click', (e) => {\n    e.preventDefault();\n    addTask(project);\n  }, { once: true });\n  outputTemp.appendChild(_ul);\n} \n\nfunction addTask(projName) {\n  // let _itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority, callType;\n  toggleModal('edit-modal');\n  let _pEditDone = document.getElementById('edit-done');\n  document.getElementById('projName-edit').value = projName;  // readonly in HTML\n  _pEditDone.addEventListener('click', (e) => {\n    e.preventDefault();\n    let item = new _dataModel_js__WEBPACK_IMPORTED_MODULE_1__.todoItem;\n    // let _pTaskArray = [];\n    let _pTaskArray = projectMap.get(projName);\n    if (_pTaskArray === null) _pTaskArray = []; // for the case where it's a new project with no tasks yet\n    item.itemID = _pTaskArray.length; // either 0 for empty task array or the next array index value\n    item.projectID = null; // null temp\n    item.ownerID = null; // null temp\n    item.ownerName = null; // null temp\n    // item.projectName = document.getElementById('projName-edit').value; // made this readonly in HTML!\n    item.itemDesc = document.getElementById('todoDesc').value;\n    item.itemDueDate = document.getElementById('todoDueDate').value;\n    item.itemPriority = document.getElementById('todoPriority').value;\n    _pTaskArray.push(item);\n    projectMap.set(projName, _pTaskArray);\n    toggleModal('edit-modal');\n    dispProjectTaskItems(projName);\n  }, { once: true });    \n}\n\nfunction editTask (projName) {\n  // Edit any existing task\n  // TODO work in progress\n\n  let item = new _dataModel_js__WEBPACK_IMPORTED_MODULE_1__.todoItem; // might need a new item object ???\n\n  let _pTaskArray = projectMap.get(projName);\n  // edit task object properties here, then re-set projectMap with new array below\n  projectMap.set(projName, _pTaskArray);\n          // read values from the approriate project/task ID\n          // populate modal entry cells with ex. values\n          // allow user to edit them in modal dialog  \n          // save new values by overwriting old projectMap(projName, values[])\n        \n}\n\nfunction markTaskDone () {\n  // TODO mark a task as done, change style to reflect...but not delete it\n}\n\nfunction deleteTask () {\n  // TODO \n  // Entirely remove task\n\n} \n\nfunction deleteProject () {\n  // TODO \n}\n\n// functions for save/load to/from localStorage\n\nfunction saveMap () {\n  let projTaskArray = [];\n  // TEMP fill array to build the projectMap with dummy data (defaultTask JSON)\n  for (let i = 0; i < DEFAULT_NUM_TASKS_PER_PROJ; i++) {\n    projTaskArray.push(JSON.parse(defaultTask));\n  }\n  // add TEMP array values to MAP with dummy/default project keys\n  for (let i = 0; i < DEFAULT_NUM_PROJ; i++) {\n    projectMap.set(DEFAULT_PROJECT, projTaskArray);\n  }\n  const obj = {};\n  for (let [key, value] of projectMap) {\n    obj[key] = value;\n  }\n  //TEST SEEMS OK console.log(JSON.stringify(obj));\n  localStorage.setItem('pMap', JSON.stringify(obj));\n}\n\nfunction loadMap () {\n  return new Map(Object.entries(JSON.parse(localStorage.getItem('pMap'))));\n}\n\n// main code begins here\n// the following array may not need to be global. TODO - Verify/update as needed\n\n\n// main MAP to contain all projects\nlet projectMap = new Map();\n\n// save map with dummy values to start\nsaveMap();\n// populate the initial map \nprojectMap = loadMap();\n\n// startup UI/UX\nsidebar();\n\n// EOF\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;