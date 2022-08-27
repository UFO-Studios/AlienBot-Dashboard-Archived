(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./old/pages/login-auth/auth_email_link_send.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./old/pages/login-auth/auth_email_link_send.js":
/*!******************************************************!*\
  !*** ./old/pages/login-auth/auth_email_link_send.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar auth = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, email, actionCodeSettings).then(function () {\n  // The link was successfully sent. Inform the user.\n  // Save the email locally so you don't need to ask the user for it again\n  // if they open the link on the same device.\n  window.localStorage.setItem('emailForSignIn', email); // ...\n}).catch(function (error) {\n  var errorCode = error.code;\n  var errorMessage = error.message; // ...\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9vbGQvcGFnZXMvbG9naW4tYXV0aC9hdXRoX2VtYWlsX2xpbmtfc2VuZC5qcz82ZTk2Il0sIm5hbWVzIjpbImF1dGgiLCJnZXRBdXRoIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiZW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJ0aGVuIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx1SUFBTyxFQUFwQjtBQUNBQyx1SUFBcUIsQ0FBQ0YsSUFBRCxFQUFPRyxLQUFQLEVBQWNDLGtCQUFkLENBQXJCLENBQ0dDLElBREgsQ0FDUSxZQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0FDLFFBQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLEVBQThDTCxLQUE5QyxFQUpVLENBS1Y7QUFDRCxDQVBILEVBUUdNLEtBUkgsQ0FRUyxVQUFDQyxLQUFELEVBQVc7QUFDaEIsTUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLElBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHSCxLQUFLLENBQUNJLE9BQTNCLENBRmdCLENBR2hCO0FBQ0QsQ0FaSCIsImZpbGUiOiIuL29sZC9wYWdlcy9sb2dpbi1hdXRoL2F1dGhfZW1haWxfbGlua19zZW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXV0aCwgc2VuZFNpZ25JbkxpbmtUb0VtYWlsIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbnNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIC8vIFRoZSBsaW5rIHdhcyBzdWNjZXNzZnVsbHkgc2VudC4gSW5mb3JtIHRoZSB1c2VyLlxyXG4gICAgLy8gU2F2ZSB0aGUgZW1haWwgbG9jYWxseSBzbyB5b3UgZG9uJ3QgbmVlZCB0byBhc2sgdGhlIHVzZXIgZm9yIGl0IGFnYWluXHJcbiAgICAvLyBpZiB0aGV5IG9wZW4gdGhlIGxpbmsgb24gdGhlIHNhbWUgZGV2aWNlLlxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbEZvclNpZ25JbicsIGVtYWlsKTtcclxuICAgIC8vIC4uLlxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAvLyAuLi5cclxuICB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./old/pages/login-auth/auth_email_link_send.js\n");

/***/ })

/******/ })));