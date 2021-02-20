/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Collection.js":
/*!**************************************!*\
  !*** ./src/components/Collection.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Collection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction Collection(props) {\n  const monsterDelete = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (monster, index) {\n      console.log('you clicked ' + monster.name + ' on index ' + index);\n      const body = JSON.stringify({\n        index: monster.index,\n        name: monster.name,\n        url: monster.url\n      });\n      console.log(body);\n\n      try {\n        const response = yield fetch(\"/api/monsters/\".concat(monster._id), {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        props.collection.splice(index, 1);\n        props.setCollection([...props.collection]);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function monsterDelete(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  const handleChange = (e, monster) => {\n    props.updateNoteValues(_objectSpread(_objectSpread({}, props.noteValues), props.noteValues[monster._id].notes = e.target.value));\n  };\n\n  const submitNote = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (e, monster, index) {\n      e.preventDefault();\n      const body = JSON.stringify({\n        notes: props.noteValues[monster._id].notes\n      });\n\n      try {\n        const response = yield fetch(\"/api/monsters/\".concat(monster._id), {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: body\n        });\n        const data = yield response.json();\n        const collectionCopy = [...props.collection];\n        collectionCopy.splice(index, 1, data);\n        props.setCollection([...collectionCopy]);\n      } catch (error) {\n        console.error(error);\n      } finally {\n        props.updateNoteValues(_objectSpread(_objectSpread({}, props.noteValues), props.noteValues[monster._id].notes = ''));\n      }\n    });\n\n    return function submitNote(_x3, _x4, _x5) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  const noteDropdown = id => {\n    const element = document.getElementById(id);\n    {\n      element.classList.contains('hide') ? element.classList.remove('hide') : element.classList.add('hide');\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"myCollection\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"My Collection\"), Object.keys(props.noteValues).length ? props.collection.map((monster, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: monster._id,\n      className: \"monsterCollectionItem\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"monsterNameSection\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n      name: \"close-outline\",\n      onClick: () => {\n        monsterDelete(monster, index);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, monster.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"icon-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n      name: \"information-circle-outline\",\n      onClick: () => props.moreInfo(monster.url)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n      name: \"create-outline\",\n      onClick: () => noteDropdown(monster._id)\n    }))), monster.notes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, monster.notes) : '', props.noteValues[monster._id] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"monsterNotesSection hide\",\n      id: \"\".concat(monster._id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: e => submitNote(e, monster, index)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"notes\",\n      type: \"text\",\n      value: props.noteValues[monster._id].notes,\n      onChange: e => handleChange(e, monster)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\",\n      value: \"Add Note\"\n    }))) : '');\n  }) : '');\n}\n\n//# sourceURL=webpack:///./src/components/Collection.js?");

/***/ }),

/***/ "./src/components/MonsterInfo.js":
/*!***************************************!*\
  !*** ./src/components/MonsterInfo.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MonsterInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MonsterInfo(props) {\n  const m = props.moreMonsterInfo;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"monsterInfo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n    name: \"close-circle-outline\",\n    onClick: props.toggleHide\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, m.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Challenge Rating: \", m.challenge_rating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, m.size, \" \", m.type, \", \", m.alignment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Armor Class: \", m.armor_class), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Hit Points: \", m.hit_points, \" (\", m.hit_dice, \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Speed: \", m.speed.walk), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stats-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"STR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, m.strength)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"DEX\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, m.dexterity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"CON\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, m.constitution)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"INT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, m.intelligence)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"WIS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, m.wisdom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"CHA\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, m.charisma))), Object.keys(m.languages).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Languages \"), m.languages) : '');\n}\n\n//# sourceURL=webpack:///./src/components/MonsterInfo.js?");

/***/ }),

/***/ "./src/components/MonsterList.js":
/*!***************************************!*\
  !*** ./src/components/MonsterList.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MonsterList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//this component will display the data returned by searching for a monster of a particular challenge rating\n\nfunction MonsterList(props) {\n  const monsterAdd = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (monster, index) {\n      console.log('you clicked ' + monster.name + ' on index ' + index);\n      const body = JSON.stringify({\n        index: monster.index,\n        name: monster.name,\n        url: monster.url\n      });\n      console.log(body);\n\n      try {\n        const response = yield fetch('/api/monsters', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n            Accept: 'application/json'\n          },\n          body: body\n        });\n        const newMonster = yield response.json();\n        const newCollection = [...props.collection, newMonster];\n        props.setCollection(newCollection);\n        props.updateNoteValues(_objectSpread(_objectSpread({}, props.noteValues), {}, {\n          [newMonster._id]: _objectSpread(_objectSpread({}, newMonster), {}, {\n            notes: ''\n          })\n        }));\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function monsterAdd(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"monsterList\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Challenge Rating \", props.challengeRating), props.monsterData.map((monster, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: monster.index,\n      className: \"monsterNameSection\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, monster.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"icon-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n      name: \"information-circle-outline\",\n      onClick: () => props.moreInfo(monster.url)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n      name: \"add-circle-outline\",\n      onClick: () => monsterAdd(monster, index)\n    })));\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/MonsterList.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"NavBar\"\n  }, props.routes.map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }));\n};\n\n/* unused harmony default export */ var _unused_webpack_default_export = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AboutPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MonsterList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MonsterList */ \"./src/components/MonsterList.js\");\n/* harmony import */ var _components_MonsterInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MonsterInfo */ \"./src/components/MonsterInfo.js\");\n/* harmony import */ var _components_Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Collection */ \"./src/components/Collection.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction App(props) {\n  const [challengeQuery, updateChallengeQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    baseURL: 'https://www.dnd5eapi.co/api/monsters?challenge_rating=',\n    challengeRating: '',\n    searchURL: ''\n  });\n  const [monsterData, setMonsterData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [collection, setCollection] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [moreInfoQuery, setMoreInfoQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    baseURL: 'https://www.dnd5eapi.co',\n    searchURL: ''\n  });\n  const [moreMonsterInfo, setMoreMonsterInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [infoHidden, toggleInfoHidden] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    infoHidden: true\n  });\n\n  const toggleHide = () => {\n    toggleInfoHidden({\n      infoHidden: !infoHidden.infoHidden\n    });\n  };\n\n  const [noteValues, updateNoteValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [challengeRating, updateChallengeRating] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''); // const dropdown = useRef(null);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      if (moreInfoQuery.searchURL) {\n        try {\n          const response = yield fetch(moreInfoQuery.searchURL);\n          const data = yield response.json();\n          yield setMoreMonsterInfo(data);\n          toggleInfoHidden({\n            infoHidden: false\n          });\n        } catch (error) {\n          console.error(error);\n        } finally {\n          setMoreInfoQuery({\n            baseURL: 'https://www.dnd5eapi.co',\n            searchURL: ''\n          });\n        }\n      }\n    })();\n  }, [moreInfoQuery]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/monsters');\n        const data = yield response.json();\n        yield setCollection(data);\n        updateNoteValues(data.reduce((acc, item, index) => {\n          item.notes = item.notes ? item.notes : '';\n          acc[item._id] = item;\n          return acc;\n        }, {}));\n        console.log(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      if (challengeQuery.searchURL) {\n        try {\n          const response = yield fetch(challengeQuery.searchURL);\n          const data = yield response.json();\n          yield setMonsterData(data.results);\n          console.log(data.results);\n        } catch (error) {\n          console.error(error);\n        } finally {\n          updateChallengeQuery({\n            baseURL: 'https://www.dnd5eapi.co/api/monsters?challenge_rating=',\n            challengeRating: '',\n            searchURL: ''\n          });\n        }\n      }\n    })();\n  }, [challengeQuery]);\n\n  const handleChange = event => {\n    updateChallengeQuery(_objectSpread(_objectSpread({}, challengeQuery), {\n      [event.target.id]: event.target.value\n    }));\n  };\n\n  const handleSubmit = event => {\n    event.preventDefault(); // const challengeIndex = dropdown.current.options.selectedIndex;\n    // const rating = dropdown.current.options[challengeIndex];\n    // console.log(dropdown);\n\n    updateChallengeQuery(_objectSpread(_objectSpread({}, challengeQuery), {}, {\n      searchURL: challengeQuery.baseURL + challengeQuery.challengeRating\n    }));\n    updateChallengeRating(challengeQuery.challengeRating);\n    console.log(challengeQuery);\n  };\n\n  const moreInfo = /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator(function* (url) {\n      console.log(\"https://www.dnd5eapi.co\".concat(url));\n      setMoreInfoQuery(_objectSpread(_objectSpread({}, moreInfoQuery), {}, {\n        searchURL: moreInfoQuery.baseURL + url\n      }));\n    });\n\n    return function moreInfo(_x) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AppPage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Monster Collector\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"A handy DM Tool for D&D 5th Edition\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lists\"\n  }, collection.length > 0 && Object.keys(noteValues).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Collection__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    collection: collection,\n    setCollection: setCollection,\n    moreInfo: moreInfo,\n    noteValues: noteValues,\n    updateNoteValues: updateNoteValues\n  }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"searchMonsters\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Monster Search\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Search by Challenge Rating (decimals or whole numbers!)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"challengeRating\",\n    type: \"text\",\n    value: challengeQuery.challengeRating,\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Find Monsters\"\n  })), monsterData.length && Object.keys(noteValues).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MonsterList__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    monsterData: monsterData,\n    setCollection: setCollection,\n    collection: collection,\n    moreInfo: moreInfo,\n    updateNoteValues: updateNoteValues,\n    noteValues: noteValues,\n    challengeRating: challengeRating\n  }) : ''), infoHidden.infoHidden === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MonsterInfo__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    moreMonsterInfo: moreMonsterInfo,\n    toggleHide: toggleHide\n  }) : ''));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Contact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Contact(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ContactPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/Contact.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomePage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        page: key\n      })\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Contact */ \"./src/pages/Contact.js\");\n\n\n\n\n\nconst routes = [{\n  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'Contact',\n  path: '/contact'\n}, {\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/home'\n}, {\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });