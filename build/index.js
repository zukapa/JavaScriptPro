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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    max-width: 1140px;\r\n    min-width: 300px;\r\n    margin: 0 auto;\r\n    justify-content: flex-end;\r\n    height: inherit;\r\n}\r\n\r\n.container-content {\r\n    display: flex;\r\n    max-width: 1140px;\r\n    min-width: 300px;\r\n    margin: 0 auto;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    border-style: solid;\r\n    border-width: thin;\r\n    border-color: darkgray;\r\n    height: 45px;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n.menu-button {\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.search-line {\r\n    align-self: center;\r\n    height: 25px;\r\n}\r\n\r\n.search-line-item {\r\n    margin-right: 10px;\r\n    height: -webkit-fill-available;\r\n}\r\n\r\n.search-text {\r\n    text-align: center;\r\n}\r\n\r\n.basket {\r\n    display: flex;\r\n    flex-flow: column;\r\n    position: fixed;\r\n    top: 20%;\r\n    left: 50%;\r\n    width: 500px;\r\n    height: 300px;\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: darkgray;\r\n    margin-left: -250px;\r\n    background: white;\r\n}\r\n\r\n.basket-close-button {\r\n    width: 50px;\r\n    height: 24px;\r\n    align-self: end;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    border: none;\r\n    background: none;\r\n    margin-top: auto;\r\n}\r\n\r\n.product-into-basket-button {\r\n    width: 50px;\r\n    height: 45px;\r\n    align-self: end;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.delete-from-basket-button {\r\n    width: 50px;\r\n    height: 24px;\r\n    align-self: center;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.header-basket {\r\n    border-style: solid;\r\n    border-width: thin;\r\n    border-color: darkgray;\r\n    height: 45px;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n\r\n.delete-from-basket-button:hover {\r\n    border: solid;\r\n    border-style: outset;\r\n}\r\n\r\n.delete-from-basket-button:active {\r\n    border: solid;\r\n    border-style: inset;\r\n}\r\n\r\n.menu-button:hover {\r\n    border: solid;\r\n    border-style: outset;\r\n}\r\n\r\n.menu-button:active {\r\n    border: solid;\r\n    border-style: inset;\r\n}\r\n\r\n.basket-close-button:hover {\r\n    border: solid;\r\n    border-style: outset;\r\n}\r\n\r\n.basket-close-button:active {\r\n    border: solid;\r\n    border-style: inset;\r\n}\r\n\r\n.product-into-basket-button:hover {\r\n    border: solid;\r\n    border-style: outset;\r\n}\r\n\r\n.product-into-basket-button:active {\r\n    border: solid;\r\n    border-style: inset;\r\n}\r\n\r\n.products-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 250px;\r\n    width: 200px;\r\n    margin: 10px;\r\n}\r\n\r\n.products-item:hover {\r\n    border: solid;\r\n    border-style: outset;\r\n}\r\n\r\n.products-item:active {\r\n    border: solid;\r\n    border-style: inset;\r\n}\r\n\r\n.product-image {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.basket-products-item {\r\n    display: flex;\r\n}\r\n\r\n.basket-product-info {\r\n    margin: 10px 10px 10px 10px;\r\n}\r\n\r\n.plug-text {\r\n    justify-content: center;\r\n    margin-top: 45px;\r\n}\r\n\r\n@media (max-width: 1204px) {\r\n    .container {\r\n        width: 704px;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .container {\r\n        width: 345px;\r\n    }\r\n\r\n    .container-content {\r\n        flex-direction: column;\r\n        align-content: center;\r\n    }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptpro/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascriptpro/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascriptpro/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptpro/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptpro/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptpro/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptpro/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptpro/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptpro/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptpro/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/basketComponent.js":
/*!*******************************************!*\
  !*** ./src/components/basketComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   basketComponent: () => (/* binding */ basketComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst basketComponent = {\r\n    props: ['changeVisibleBasket', \r\n            'getBasket',\r\n            'deleteFromBasket'],\r\n\r\n    data() {\r\n        return {\r\n            basket: []\r\n        }\r\n    },\r\n\r\n    mounted() {\r\n        this.getBasket(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}${_constants_js__WEBPACK_IMPORTED_MODULE_0__.URL_BASKET}${_constants_js__WEBPACK_IMPORTED_MODULE_0__.URN_BASKET}`).then(basket => {\r\n            this.basket = JSON.parse(basket);\r\n        });\r\n    },\r\n\r\n    template: `\r\n        <div class=\"basket\">\r\n            <p class=\"header-basket\">Basket</p>\r\n            <basket-products-component class=\"basket-products-item\" v-for=\"product in this.basket\" :good=\"product\" :delete-product-from-basket=\"deleteFromBasket\"></basket-products-component>\r\n            <button-shop @button-action=\"changeVisibleBasket\" class=\"basket-close-button\">Close</button-shop>\r\n        </div>`\r\n}\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/components/basketComponent.js?");

/***/ }),

/***/ "./src/components/basketProductsComponent.js":
/*!***************************************************!*\
  !*** ./src/components/basketProductsComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   basketProductsComponent: () => (/* binding */ basketProductsComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst basketProductsComponent = {\r\n    props: ['good',\r\n            'deleteProductFromBasket'],\r\n\r\n    data() {\r\n        return {\r\n            product: {}\r\n        }\r\n    },\r\n\r\n    methods: {\r\n        deleteFromBasket() {\r\n            this.deleteProductFromBasket(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}${_constants_js__WEBPACK_IMPORTED_MODULE_0__.URL_DELETE_FROM_BASKET}${_constants_js__WEBPACK_IMPORTED_MODULE_0__.URN_DELETE_FROM_BASKET}`, this.product).then(result => {\r\n                console.log(result);\r\n            });\r\n        }\r\n    },\r\n\r\n    mounted() {\r\n        this.product = {\r\n            \"id_product\": this.good.id_product,\r\n        }\r\n    },\r\n\r\n    template: `\r\n        <div>\r\n            <p class=\"basket-product-info\">Product: {{ good.product_name }};</p>\r\n            <p class=\"basket-product-info\">count: {{ good.count }}</p>\r\n            <button-shop @button-action=\"deleteFromBasket\" class=\"delete-from-basket-button\">Delete</button-shop>\r\n        </div>`\r\n}\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/components/basketProductsComponent.js?");

/***/ }),

/***/ "./src/components/buttonShop.js":
/*!**************************************!*\
  !*** ./src/components/buttonShop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonShop: () => (/* binding */ buttonShop)\n/* harmony export */ });\nconst buttonShop = {\r\n    template: `\r\n        <button @click=\"$emit('button-action')\" type=\"button\"><slot /></button>`\r\n}\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/components/buttonShop.js?");

/***/ }),

/***/ "./src/components/productComponent.js":
/*!********************************************!*\
  !*** ./src/components/productComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productComponent: () => (/* binding */ productComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst productComponent = {\r\n    props: ['good',\r\n            'postIntoBasketProduct'],\r\n\r\n    data() {\r\n        return {\r\n            product: {}\r\n        }\r\n    },\r\n\r\n    methods: {\r\n        postIntoBasket() {\r\n            this.postIntoBasketProduct(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}${_constants_js__WEBPACK_IMPORTED_MODULE_0__.URL_ADD_TO_BASKET}${_constants_js__WEBPACK_IMPORTED_MODULE_0__.URN_ADD_TO_BASKET}`, this.product).then(result => {\r\n                console.log(result);\r\n            });\r\n        }\r\n    },\r\n\r\n    mounted() {\r\n        this.product = {\r\n            \"id_product\": this.good.id_product,\r\n        }\r\n    },\r\n\r\n    template: `\r\n        <div>\r\n            <img class=product-image></img>\r\n            <h4>{{ good.product_name }}</h4>\r\n            <p>{{ good.price }}</p>\r\n            <button-shop @button-action=\"postIntoBasket\" class=\"product-into-basket-button\">Into a basket</button-shop>\r\n        </div>`\r\n}\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/components/productComponent.js?");

/***/ }),

/***/ "./src/components/productsComponent.js":
/*!*********************************************!*\
  !*** ./src/components/productsComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productsComponent: () => (/* binding */ productsComponent)\n/* harmony export */ });\nconst productsComponent = {\r\n    props: ['products',\r\n            'postIntoBasket'],\r\n\r\n    template: `\r\n        <product-component class=\"products-item\" v-for=\"product in products\" :good=\"product\" :post-into-basket-product=\"postIntoBasket\"></product-component>`\r\n}\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/components/productsComponent.js?");

/***/ }),

/***/ "./src/components/searchComponent.js":
/*!*******************************************!*\
  !*** ./src/components/searchComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchComponent: () => (/* binding */ searchComponent)\n/* harmony export */ });\nconst searchComponent = {\r\n    props: ['modelValue'],\r\n\r\n    emits: ['update:modelValue'],\r\n\r\n    template: `\r\n        <div class=\"search-line\">\r\n            <input class=\"search-line-item\" type=\"text\" placeholder=\"Search\" :value=\"modelValue\" @input=\"$emit('update:modelValue', $event.target.value)\">\r\n        </div>`\r\n}\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/components/searchComponent.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   URL_ADD_TO_BASKET: () => (/* binding */ URL_ADD_TO_BASKET),\n/* harmony export */   URL_BASKET: () => (/* binding */ URL_BASKET),\n/* harmony export */   URL_DELETE_FROM_BASKET: () => (/* binding */ URL_DELETE_FROM_BASKET),\n/* harmony export */   URL_PRODUCTS: () => (/* binding */ URL_PRODUCTS),\n/* harmony export */   URN_ADD_TO_BASKET: () => (/* binding */ URN_ADD_TO_BASKET),\n/* harmony export */   URN_BASKET: () => (/* binding */ URN_BASKET),\n/* harmony export */   URN_DELETE_FROM_BASKET: () => (/* binding */ URN_DELETE_FROM_BASKET),\n/* harmony export */   URN_PRODUCTS: () => (/* binding */ URN_PRODUCTS)\n/* harmony export */ });\nconst BASE_URL = 'http://localhost:8000'\r\nconst URL_PRODUCTS = ''\r\nconst URN_PRODUCTS = '/catalog'\r\nconst URL_BASKET = ''\r\nconst URN_BASKET = '/basket'\r\nconst URL_ADD_TO_BASKET = ''\r\nconst URN_ADD_TO_BASKET = '/addToBasket'\r\nconst URL_DELETE_FROM_BASKET = ''\r\nconst URN_DELETE_FROM_BASKET = '/deleteFromBasket'\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _components_productComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/productComponent */ \"./src/components/productComponent.js\");\n/* harmony import */ var _components_productsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/productsComponent */ \"./src/components/productsComponent.js\");\n/* harmony import */ var _components_searchComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/searchComponent */ \"./src/components/searchComponent.js\");\n/* harmony import */ var _components_basketProductsComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/basketProductsComponent */ \"./src/components/basketProductsComponent.js\");\n/* harmony import */ var _components_basketComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/basketComponent */ \"./src/components/basketComponent.js\");\n/* harmony import */ var _components_buttonShop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buttonShop */ \"./src/components/buttonShop.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst { createApp } = Vue\r\n\r\nconst app = createApp({\r\n    data() { \r\n        return {\r\n            products: [],\r\n            searchLine: '',\r\n            isVisibleCart: false\r\n        }\r\n    },\r\n\r\n    methods: {\r\n        getDataAPI(url) {\r\n            return new Promise((resolve, reject) => {\r\n                let xhr = new XMLHttpRequest();\r\n                xhr.onreadystatechange = function () {\r\n                    if (xhr.readyState === 4) {\r\n                        resolve(xhr.responseText);\r\n                    }\r\n                }\r\n                xhr.open('GET', url, true);\r\n                xhr.send();\r\n            });\r\n        },\r\n\r\n        postDataAPI(url, data) {\r\n            return new Promise((resolve, reject) => {\r\n                let xhr = new XMLHttpRequest();\r\n                xhr.onreadystatechange = function () {\r\n                    if (xhr.readyState === 4) {\r\n                        resolve(xhr.responseText);\r\n                    }\r\n                }\r\n                xhr.open('POST', url, true);\r\n                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');\r\n                xhr.send(JSON.stringify(data));\r\n            });\r\n        },\r\n\r\n        calculationTotalCost() {\r\n            return this.products.reduce((accumulator, product) => Object.keys(product).length === 0 ? accumulator : accumulator += product.price, 0);\r\n        },\r\n\r\n        changeVisibleBasket() {\r\n            this.isVisibleCart =! this.isVisibleCart;\r\n        }\r\n    },\r\n\r\n    computed: {\r\n        filteredProducts() {\r\n            return this.products.filter(({ product_name }) => {\r\n                const regExp = new RegExp(this.searchLine, 'i');\r\n                return regExp.test(product_name)\r\n            })\r\n        }\r\n    },\r\n\r\n    mounted() {\r\n        setTimeout(() => {\r\n            this.getDataAPI(`${_constants_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL}${_constants_js__WEBPACK_IMPORTED_MODULE_1__.URL_PRODUCTS}${_constants_js__WEBPACK_IMPORTED_MODULE_1__.URN_PRODUCTS}`).then(products => {\r\n                this.products = JSON.parse(products);\r\n                this.filteredProducts = this.products;\r\n            });\r\n        }, 3000) \r\n    }\r\n})\r\n\r\napp.component('product-component', _components_productComponent__WEBPACK_IMPORTED_MODULE_2__.productComponent)\r\n\r\napp.component('products-component', _components_productsComponent__WEBPACK_IMPORTED_MODULE_3__.productsComponent)\r\n\r\napp.component('search-component', _components_searchComponent__WEBPACK_IMPORTED_MODULE_4__.searchComponent)\r\n\r\napp.component('basket-products-component', _components_basketProductsComponent__WEBPACK_IMPORTED_MODULE_5__.basketProductsComponent)\r\n\r\napp.component('basket-component', _components_basketComponent__WEBPACK_IMPORTED_MODULE_6__.basketComponent)\r\n\r\napp.component('button-shop', _components_buttonShop__WEBPACK_IMPORTED_MODULE_7__.buttonShop)\r\n\r\napp.mount('#app')\r\n\n\n//# sourceURL=webpack://javascriptpro/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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