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
/******/ 	return __webpack_require__(__webpack_require__.s = "./old/pages/login-auth/auth_email_link_actioncode_settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./old/pages/login-auth/auth_email_link_actioncode_settings.js":
/*!*********************************************************************!*\
  !*** ./old/pages/login-auth/auth_email_link_actioncode_settings.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var actionCodeSettings = {\n  // URL you want to redirect back to. The domain (www.example.com) for this\n  // URL must be in the authorized domains list in the Firebase Console.\n  url: 'https://alienbot.thealiendoctor.com/auth/authed',\n  // This must be true.\n  handleCodeInApp: true,\n  iOS: {\n    bundleId: 'com.ufoStudios.ab-20'\n  },\n  android: {\n    packageName: 'com.ufoStudios.ab-20',\n    installApp: true,\n    minimumVersion: '12'\n  },\n  dynamicLinkDomain: 'example.page.link'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9vbGQvcGFnZXMvbG9naW4tYXV0aC9hdXRoX2VtYWlsX2xpbmtfYWN0aW9uY29kZV9zZXR0aW5ncy5qcz82ZjdjIl0sIm5hbWVzIjpbImFjdGlvbkNvZGVTZXR0aW5ncyIsInVybCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiaW5zdGFsbEFwcCIsIm1pbmltdW1WZXJzaW9uIiwiZHluYW1pY0xpbmtEb21haW4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLGtCQUFrQixHQUFHO0FBQ3ZCO0FBQ0E7QUFDQUMsS0FBRyxFQUFFLGlEQUhrQjtBQUl2QjtBQUNBQyxpQkFBZSxFQUFFLElBTE07QUFNdkJDLEtBQUcsRUFBRTtBQUNIQyxZQUFRLEVBQUU7QUFEUCxHQU5rQjtBQVN2QkMsU0FBTyxFQUFFO0FBQ1BDLGVBQVcsRUFBRSxzQkFETjtBQUVQQyxjQUFVLEVBQUUsSUFGTDtBQUdQQyxrQkFBYyxFQUFFO0FBSFQsR0FUYztBQWN2QkMsbUJBQWlCLEVBQUU7QUFkSSxDQUEzQiIsImZpbGUiOiIuL29sZC9wYWdlcy9sb2dpbi1hdXRoL2F1dGhfZW1haWxfbGlua19hY3Rpb25jb2RlX3NldHRpbmdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWN0aW9uQ29kZVNldHRpbmdzID0ge1xyXG4gICAgLy8gVVJMIHlvdSB3YW50IHRvIHJlZGlyZWN0IGJhY2sgdG8uIFRoZSBkb21haW4gKHd3dy5leGFtcGxlLmNvbSkgZm9yIHRoaXNcclxuICAgIC8vIFVSTCBtdXN0IGJlIGluIHRoZSBhdXRob3JpemVkIGRvbWFpbnMgbGlzdCBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZS5cclxuICAgIHVybDogJ2h0dHBzOi8vYWxpZW5ib3QudGhlYWxpZW5kb2N0b3IuY29tL2F1dGgvYXV0aGVkJyxcclxuICAgIC8vIFRoaXMgbXVzdCBiZSB0cnVlLlxyXG4gICAgaGFuZGxlQ29kZUluQXBwOiB0cnVlLFxyXG4gICAgaU9TOiB7XHJcbiAgICAgIGJ1bmRsZUlkOiAnY29tLnVmb1N0dWRpb3MuYWItMjAnXHJcbiAgICB9LFxyXG4gICAgYW5kcm9pZDoge1xyXG4gICAgICBwYWNrYWdlTmFtZTogJ2NvbS51Zm9TdHVkaW9zLmFiLTIwJyxcclxuICAgICAgaW5zdGFsbEFwcDogdHJ1ZSxcclxuICAgICAgbWluaW11bVZlcnNpb246ICcxMidcclxuICAgIH0sXHJcbiAgICBkeW5hbWljTGlua0RvbWFpbjogJ2V4YW1wbGUucGFnZS5saW5rJ1xyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./old/pages/login-auth/auth_email_link_actioncode_settings.js\n");

/***/ })

/******/ })));