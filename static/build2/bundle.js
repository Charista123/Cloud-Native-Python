/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/main.js":
/*!************************!*\
  !*** ./static/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import Tweet from \"./components/Tweet\";\n// import TweetList from \"./components/TweetList\";\n// import cookie from 'react-cookie';\n\nvar Main = function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));\n  }\n\n  _createClass(Main, [{\n    key: 'render',\n\n    // constructor(props){\n    //   super(props);\n    //   this.state =  { userId: cookie.load('session') };\n    //   this.state={tweets:[]}\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'h1',\n          null,\n          'Welocome to cloud-native-app!'\n        )\n      );\n    }\n  }]);\n\n  return Main;\n}(React.Component);\n\nvar documentReady = function documentReady() {\n  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));\n};\n\n$(documentReady);\n// function to post tweets\n//   addTweet(tweet){\n//     var self = this;\n//     $.ajax({\n//   \t    url: '/api/v2/tweets',\n//   \t    contentType: 'application/json',\n//   \t    type: 'POST',\n//   \t    data: JSON.stringify({\n//   \t\t'username': \"Saussiona55\",\n//       'body': tweet,\n//   \t    }),\n//   \t    success: function() {\n//             alert(\"success\")\n//             let newTweetList = self.state.tweets;\n//             newTweetList.unshift({ tweetedby: \"Saussiona55\",body: tweet, timestamp: Date.now});\n//             self.setState({tweets: newTweetList})\n//   \t\t      return;\n//   \t    },\n//   \t    error: function() {\n//   \t\t      return console.log(\"Failed\");\n//     }\n//     });\n//   }\n// // function to pull tweets\n//   componentDidMount() {\n//     var self=this;\n//     $.getJSON('/api/v2/tweets', function(tweetModels) {\n//       var t = tweetModels\n//     \t// var t = $.map(tweetModels, function(item) {\n//     \t//     return item;\n//   \t  //  });\n//       alert(t)\n//       self.setState({tweets: t})\n//     });\n\n//     // $.ajax(\"/api/v2/tweets\")\n//     // //  .success(data => this.setState({tweets: data}))\n//     //  .success(alert(data))\n//     //  .error(error => console.log(error));\n// }\n\n//   render(){\n//     return (\n//       <div>\n//         <Tweet sendTweet={this.addTweet.bind(this)}/>\n//         <TweetList tweet={this.state.tweets}/>\n//       </div>\n//     );\n//   }\n// }\n\n\n// let documentReady =() =>{\n//   ReactDOM.render(\n//     <Main />,\n//     document.getElementById('react')\n//   );\n// };\n\n// $(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0aWMvbWFpbi5qcz9iNTI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBUd2VldCBmcm9tIFwiLi9jb21wb25lbnRzL1R3ZWV0XCI7XG4vLyBpbXBvcnQgVHdlZXRMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvVHdlZXRMaXN0XCI7XG4vLyBpbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgLy8gICBzdXBlcihwcm9wcyk7XG4gIC8vICAgdGhpcy5zdGF0ZSA9ICB7IHVzZXJJZDogY29va2llLmxvYWQoJ3Nlc3Npb24nKSB9O1xuICAvLyAgIHRoaXMuc3RhdGU9e3R3ZWV0czpbXX1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxvY29tZSB0byBjbG91ZC1uYXRpdmUtYXBwITwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIH1cblxuXG4gIGxldCBkb2N1bWVudFJlYWR5ID0oKSA9PntcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8TWFpbiAvPixcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpXG4gICAgKTtcbiAgfTtcbiAgXG4gICQoZG9jdW1lbnRSZWFkeSk7XG4gIC8vIGZ1bmN0aW9uIHRvIHBvc3QgdHdlZXRzXG4vLyAgIGFkZFR3ZWV0KHR3ZWV0KXtcbi8vICAgICB2YXIgc2VsZiA9IHRoaXM7XG4vLyAgICAgJC5hamF4KHtcbi8vICAgXHQgICAgdXJsOiAnL2FwaS92Mi90d2VldHMnLFxuLy8gICBcdCAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICBcdCAgICB0eXBlOiAnUE9TVCcsXG4vLyAgIFx0ICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgXHRcdCd1c2VybmFtZSc6IFwiU2F1c3Npb25hNTVcIixcbi8vICAgICAgICdib2R5JzogdHdlZXQsXG4vLyAgIFx0ICAgIH0pLFxuLy8gICBcdCAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIGFsZXJ0KFwic3VjY2Vzc1wiKVxuLy8gICAgICAgICAgICAgbGV0IG5ld1R3ZWV0TGlzdCA9IHNlbGYuc3RhdGUudHdlZXRzO1xuLy8gICAgICAgICAgICAgbmV3VHdlZXRMaXN0LnVuc2hpZnQoeyB0d2VldGVkYnk6IFwiU2F1c3Npb25hNTVcIixib2R5OiB0d2VldCwgdGltZXN0YW1wOiBEYXRlLm5vd30pO1xuLy8gICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOiBuZXdUd2VldExpc3R9KVxuLy8gICBcdFx0ICAgICAgcmV0dXJuO1xuLy8gICBcdCAgICB9LFxuLy8gICBcdCAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4vLyAgIFx0XHQgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJGYWlsZWRcIik7XG4vLyAgICAgfVxuLy8gICAgIH0pO1xuLy8gICB9XG4vLyAvLyBmdW5jdGlvbiB0byBwdWxsIHR3ZWV0c1xuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICB2YXIgc2VsZj10aGlzO1xuLy8gICAgICQuZ2V0SlNPTignL2FwaS92Mi90d2VldHMnLCBmdW5jdGlvbih0d2VldE1vZGVscykge1xuLy8gICAgICAgdmFyIHQgPSB0d2VldE1vZGVsc1xuLy8gICAgIFx0Ly8gdmFyIHQgPSAkLm1hcCh0d2VldE1vZGVscywgZnVuY3Rpb24oaXRlbSkge1xuLy8gICAgIFx0Ly8gICAgIHJldHVybiBpdGVtO1xuLy8gICBcdCAgLy8gIH0pO1xuLy8gICAgICAgYWxlcnQodClcbi8vICAgICAgIHNlbGYuc2V0U3RhdGUoe3R3ZWV0czogdH0pXG4vLyAgICAgfSk7XG5cbi8vICAgICAvLyAkLmFqYXgoXCIvYXBpL3YyL3R3ZWV0c1wiKVxuLy8gICAgIC8vIC8vICAuc3VjY2VzcyhkYXRhID0+IHRoaXMuc2V0U3RhdGUoe3R3ZWV0czogZGF0YX0pKVxuLy8gICAgIC8vICAuc3VjY2VzcyhhbGVydChkYXRhKSlcbi8vICAgICAvLyAgLmVycm9yKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4vLyB9XG5cbi8vICAgcmVuZGVyKCl7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxUd2VldCBzZW5kVHdlZXQ9e3RoaXMuYWRkVHdlZXQuYmluZCh0aGlzKX0vPlxuLy8gICAgICAgICA8VHdlZXRMaXN0IHR3ZWV0PXt0aGlzLnN0YXRlLnR3ZWV0c30vPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIGxldCBkb2N1bWVudFJlYWR5ID0oKSA9Pntcbi8vICAgUmVhY3RET00ucmVuZGVyKFxuLy8gICAgIDxNYWluIC8+LFxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpXG4vLyAgICk7XG4vLyB9O1xuXG4vLyAkKGRvY3VtZW50UmVhZHkpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBOzs7O0FBWEE7QUFDQTtBQWNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/main.js\n");

/***/ })

/******/ });