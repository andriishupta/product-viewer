(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"c\":[\"Amazon\",\"Amazon Ca\",\"Amazon Uk\",\"Rymax\"],\"b\":{\"text\":\"buy today and get 10% off\",\"order\":3,\"hide\":false},\"a\":[{\"id\":\"KjzMssf7KQ\",\"media\":[{\"id\":\"SnappyProduct/KjzMssf7KQ/enufas8enjsx3wb3jkf6\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1574699128/SnappyProduct/KjzMssf7KQ/enufas8enjsx3wb3jkf6.mp4\"},{\"id\":\"a874bb17500372fffe33ffefc4a28c18_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/a874bb17500372fffe33ffefc4a28c18_picture-1.png\"}],\"name\":\"Netatmo Weather Station\",\"order\":0,\"vendor\":\"Amazon\"},{\"id\":\"J81O72AVDH\",\"media\":[{\"id\":\"SnappyProduct/J81O72AVDH/ge2vi8zzrd08r1uvjhpv\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1574370900/SnappyProduct/J81O72AVDH/ge2vi8zzrd08r1uvjhpv.mp4\"},{\"id\":\"528f159cfcee5066b97ff30224109a54_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/528f159cfcee5066b97ff30224109a54_picture-1.png\"}],\"name\":\"Ecobee Smart Thermostat\",\"order\":1,\"vendor\":\"Amazon Ca\"},{\"id\":\"Ho2miD8zUo\",\"media\":[{\"id\":\"SnappyProduct/Ho2miD8zUo/mszao611gqopwlmrdskh\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1574370648/SnappyProduct/Ho2miD8zUo/mszao611gqopwlmrdskh.mp4\"},{\"id\":\"51847ef4f70999eff384d62d1e43caaa_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/51847ef4f70999eff384d62d1e43caaa_picture-1.png\"}],\"name\":\"OXO Coffee Brewer\",\"order\":2,\"vendor\":\"Amazon Ca\"},{\"id\":\"hnlyqWFBZc\",\"media\":[{\"id\":\"SnappyProduct/hnlyqWFBZc/cl6qjghl6dnzsoccdavy\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1574268340/SnappyProduct/hnlyqWFBZc/cl6qjghl6dnzsoccdavy.mp4\"},{\"id\":\"68767e3b6620baea7521f24ac0e9c7fa_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/68767e3b6620baea7521f24ac0e9c7fa_picture-1.png\"}],\"name\":\"Panasonic LUMIX Digital Camera\",\"order\":3,\"vendor\":\"Amazon\"},{\"id\":\"ATGkI64jQH\",\"media\":[{\"id\":\"SnappyProduct/ATGkI64jQH/v1h8rkzxrx6ozwdtki7s\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1574202431/SnappyProduct/ATGkI64jQH/v1h8rkzxrx6ozwdtki7s.mp4\"},{\"id\":\"295f19de118239557d66550c7161cebe_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/295f19de118239557d66550c7161cebe_picture-1.png\"}],\"name\":\"Inflatable Twin Air Bed\",\"order\":4,\"vendor\":\"Amazon Uk\"},{\"id\":\"yNHnGIKaGn\",\"media\":[{\"id\":\"SnappyProduct/yNHnGIKaGn/yihlv1ek1soop3trluk7\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573832933/SnappyProduct/yNHnGIKaGn/yihlv1ek1soop3trluk7.mp4\"},{\"id\":\"5f9790bd81b39f326bfdeecaa1f3cf1a_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/5f9790bd81b39f326bfdeecaa1f3cf1a_picture-1.png\"}],\"name\":\"Universal Travel Adapter\",\"order\":5,\"vendor\":\"Amazon\"},{\"id\":\"qVvgLjGpCM\",\"media\":[{\"id\":\"SnappyProduct/qVvgLjGpCM/f1wkka0m84uapg8zikca\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573776565/SnappyProduct/qVvgLjGpCM/f1wkka0m84uapg8zikca.mp4\"},{\"id\":\"879989a6520415e4d8d182e2e6221076_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/879989a6520415e4d8d182e2e6221076_picture-1.png\"}],\"name\":\"Foreo Luna 2 Facial Brush\",\"order\":6,\"vendor\":\"Amazon Uk\"},{\"id\":\"fT9LiDmKSA\",\"media\":[{\"id\":\"SnappyProduct/fT9LiDmKSA/rmhsstpc0itogshjxr7f\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573764562/SnappyProduct/fT9LiDmKSA/rmhsstpc0itogshjxr7f.mp4\"},{\"id\":\"30f843791ea2b57df9ab725e7cb316d0_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/30f843791ea2b57df9ab725e7cb316d0_picture-1.png\"}],\"name\":\"Sennheiser Wireless Headphones\",\"order\":7,\"vendor\":\"Amazon\"},{\"id\":\"5plnQkC7G1\",\"media\":[{\"id\":\"SnappyProduct/5plnQkC7G1/cvhngltrbufcquzk0pht\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573747405/SnappyProduct/5plnQkC7G1/cvhngltrbufcquzk0pht.mp4\"},{\"id\":\"5dc3391843d149b0a858875600d2f984_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/5dc3391843d149b0a858875600d2f984_picture-1.png\"}],\"name\":\"Ceramic Space Heater\",\"order\":8,\"vendor\":\"Amazon Ca\"},{\"id\":\"yEpGll5UH0\",\"media\":[{\"id\":\"SnappyProduct/yEpGll5UH0/qwd0jw4uv8slitmksrt8\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573686759/SnappyProduct/yEpGll5UH0/qwd0jw4uv8slitmksrt8.mp4\"},{\"id\":\"e129409500106caff3399f3f49cdcd28_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/e129409500106caff3399f3f49cdcd28_picture-1.png\"}],\"name\":\"Gaiam Yoga Mat\",\"order\":9,\"vendor\":\"Amazon Ca\"},{\"id\":\"FPwDSNWLfD\",\"media\":[{\"id\":\"SnappyProduct/FPwDSNWLfD/mra57yuibeppq160h8gh\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573670482/SnappyProduct/FPwDSNWLfD/mra57yuibeppq160h8gh.mp4\"},{\"id\":\"4aff3f0ff643981438867f1662d8c610_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/4aff3f0ff643981438867f1662d8c610_picture-1.png\"}],\"name\":\"Oster Pro Blender\",\"order\":10,\"vendor\":\"Amazon Ca\"},{\"id\":\"AzZsvJKHlz\",\"media\":[{\"id\":\"SnappyProduct/AzZsvJKHlz/had5vmx3inhicb4juvw0\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573667551/SnappyProduct/AzZsvJKHlz/had5vmx3inhicb4juvw0.mp4\"},{\"id\":\"1132ecdbcf77b743e69f70dee6cd15c3_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/1132ecdbcf77b743e69f70dee6cd15c3_picture-1.png\"}],\"name\":\"Graphics Drawing Tablet\",\"order\":11,\"vendor\":\"Amazon Ca\"},{\"id\":\"A22FmLViCc\",\"media\":[{\"id\":\"SnappyProduct/A22FmLViCc/e8k2yczuvpn9l38wtm8u\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573600546/SnappyProduct/A22FmLViCc/e8k2yczuvpn9l38wtm8u.mp4\"},{\"id\":\"5adacad1f0cf4ecaa19951e7c465d003_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/5adacad1f0cf4ecaa19951e7c465d003_picture-1.png\"}],\"name\":\"Theragun Liv Massager\",\"order\":12,\"vendor\":\"Amazon\"},{\"id\":\"DOTVQO38yf\",\"media\":[{\"id\":\"SnappyProduct/DOTVQO38yf/oo25hynggzmkcdq5y5ez\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573597382/SnappyProduct/DOTVQO38yf/oo25hynggzmkcdq5y5ez.mp4\"},{\"id\":\"ef9b076a7be0cf687f61f8a0132ec5df_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/ef9b076a7be0cf687f61f8a0132ec5df_picture-1.png\"}],\"name\":\"Propane Outdoor Firepit\",\"order\":13,\"vendor\":\"Amazon Ca\"},{\"id\":\"YPySycyDAn\",\"media\":[{\"id\":\"SnappyProduct/YPySycyDAn/czpgdnubbqpchlqin1us\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573485652/SnappyProduct/YPySycyDAn/czpgdnubbqpchlqin1us.mp4\"},{\"id\":\"9d465eb8bb51326e89f3cdd5f9a753f6_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/9d465eb8bb51326e89f3cdd5f9a753f6_picture-1.png\"}],\"name\":\"DOSS Waterproof Bluetooth Speaker\",\"order\":14,\"vendor\":\"Amazon Ca\"},{\"id\":\"uhr7tIBK1J\",\"media\":[{\"id\":\"SnappyProduct/uhr7tIBK1J/ylxm5rdlxpxxnauzk6bp\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573241121/SnappyProduct/uhr7tIBK1J/ylxm5rdlxpxxnauzk6bp.mp4\"},{\"id\":\"7b1553909344b7b7dff4d7ecaa8a6977_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/7b1553909344b7b7dff4d7ecaa8a6977_picture-1.png\"}],\"name\":\"WiFi Range Extender\",\"order\":15,\"vendor\":\"Amazon Ca\"},{\"id\":\"lpCXRNLeFh\",\"media\":[{\"id\":\"SnappyProduct/lpCXRNLeFh/khihlqg82anellldhijo\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573079964/SnappyProduct/lpCXRNLeFh/khihlqg82anellldhijo.mp4\"},{\"id\":\"6f8eb120c73cb5459103fa2124bd6e81_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/6f8eb120c73cb5459103fa2124bd6e81_picture-1.png\"}],\"name\":\"11-inch Apple iPad Pro\",\"order\":16,\"vendor\":\"Amazon\"},{\"id\":\"M5Z5fHZFlk\",\"media\":[{\"id\":\"SnappyProduct/M5Z5fHZFlk/usfvan1xsqgwyzypu0db\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573072249/SnappyProduct/M5Z5fHZFlk/usfvan1xsqgwyzypu0db.mp4\"},{\"id\":\"3bb3aa4dfcf31837ddde00f48c95a9f9_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/3bb3aa4dfcf31837ddde00f48c95a9f9_picture-1.png\"}],\"name\":\"Fisher-Price Pushable\",\"order\":17,\"vendor\":\"Amazon\"},{\"id\":\"hwSlqlwwho\",\"media\":[{\"id\":\"SnappyProduct/hwSlqlwwho/ql0uo6zzdiqflro5gwwp\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573071827/SnappyProduct/hwSlqlwwho/ql0uo6zzdiqflro5gwwp.mp4\"},{\"id\":\"7e2e246b116d4c8f32e08ea0255bbad5_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/7e2e246b116d4c8f32e08ea0255bbad5_picture-1.png\"}],\"name\":\"Large Aquadoodle Drawing Mat\",\"order\":18,\"vendor\":\"Amazon\"},{\"id\":\"SqAIvn87gl\",\"media\":[{\"id\":\"SnappyProduct/SqAIvn87gl/jeikqlp50ht2uvb9qwyz\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572995650/SnappyProduct/SqAIvn87gl/jeikqlp50ht2uvb9qwyz.mp4\"},{\"id\":\"4c9782679d439c36e535120e6a822966_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/4c9782679d439c36e535120e6a822966_picture-1.png\"}],\"name\":\"BioLite SolarPanel 10+\",\"order\":19,\"vendor\":\"Amazon\"},{\"id\":\"FZ6HPmBc3J\",\"media\":[{\"id\":\"SnappyProduct/FZ6HPmBc3J/etwxiwuqdk8bpmopbqbu\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572991649/SnappyProduct/FZ6HPmBc3J/etwxiwuqdk8bpmopbqbu.mp4\"},{\"id\":\"4c418f60e7d4285c685c165bb389f0e0_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/4c418f60e7d4285c685c165bb389f0e0_picture-1.png\"}],\"name\":\"Chef's Mandoline Slicer\",\"order\":20,\"vendor\":\"Amazon\"},{\"id\":\"QANEqfQQiA\",\"media\":[{\"id\":\"SnappyProduct/QANEqfQQiA/ewglfxcelxmnqovxqjsx\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572907483/SnappyProduct/QANEqfQQiA/ewglfxcelxmnqovxqjsx.mp4\"},{\"id\":\"SnappyProduct/QANEqfQQiA/oaqqfur7vkn12z9gfajn\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572907704/SnappyProduct/QANEqfQQiA/oaqqfur7vkn12z9gfajn.mp4\"},{\"id\":\"23ec7ebd49033029cccff8c041785135_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/23ec7ebd49033029cccff8c041785135_picture-1.png\"}],\"name\":\"Home Theater Leather Seating\",\"order\":21,\"vendor\":\"Amazon\"},{\"id\":\"Ip9nB8xokF\",\"media\":[{\"id\":\"SnappyProduct/Ip9nB8xokF/pav0yyox0thbpvmv9kq7\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572886929/SnappyProduct/Ip9nB8xokF/pav0yyox0thbpvmv9kq7.mp4\"},{\"id\":\"5f758a0c8c92253d8d016f876304eb6d_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/5f758a0c8c92253d8d016f876304eb6d_picture-1.png\"}],\"name\":\"Roku Streaming Stick\",\"order\":22,\"vendor\":\"Amazon\"},{\"id\":\"20x8lHuTZY\",\"media\":[{\"id\":\"SnappyProduct/20x8lHuTZY/nev67goul6skh8v3pdch\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572562800/SnappyProduct/20x8lHuTZY/nev67goul6skh8v3pdch.mp4\"},{\"id\":\"d2f5f02bdb398ebd04d61c3634acd1f7_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/d2f5f02bdb398ebd04d61c3634acd1f7_picture-1.png\"}],\"name\":\"Mega Bloks Pack\",\"order\":23,\"vendor\":\"Amazon Ca\"},{\"id\":\"bQXVPMjDFx\",\"media\":[{\"id\":\"SnappyProduct/bQXVPMjDFx/femusdvm0tjw5ifnf3uz\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572547281/SnappyProduct/bQXVPMjDFx/femusdvm0tjw5ifnf3uz.mp4\"},{\"id\":\"8f981b9ac3baddee0b99d48305e2f390_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/8f981b9ac3baddee0b99d48305e2f390_picture-1.png\"}],\"name\":\"Universal Travel Converter\",\"order\":24,\"vendor\":\"Amazon\"},{\"id\":\"eqkpVdG1Dv\",\"media\":[{\"id\":\"SnappyProduct/eqkpVdG1Dv/ohn8lkfibeo07clcvl17\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572545713/SnappyProduct/eqkpVdG1Dv/ohn8lkfibeo07clcvl17.mp4\"},{\"id\":\"dd8a5648a765f529cb8ca75e82a28a0f_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/dd8a5648a765f529cb8ca75e82a28a0f_picture-1.png\"}],\"name\":\"Espro Travel Coffee Press\",\"order\":25,\"vendor\":\"Amazon\"},{\"id\":\"J0lWd2N42Q\",\"media\":[{\"id\":\"SnappyProduct/J0lWd2N42Q/fgsduyq3esse2kyqkmln\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572460748/SnappyProduct/J0lWd2N42Q/fgsduyq3esse2kyqkmln.mp4\"},{\"id\":\"ec1fb4623ecd8cd490ee4fb7b6e1ade5_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/ec1fb4623ecd8cd490ee4fb7b6e1ade5_picture-1.png\"}],\"name\":\"Panasonic Lumix\",\"order\":26,\"vendor\":\"Amazon Uk\"},{\"id\":\"jAT4RiWUgX\",\"media\":[{\"id\":\"SnappyProduct/jAT4RiWUgX/hoqgw0kegttccll9hzzu\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572460441/SnappyProduct/jAT4RiWUgX/hoqgw0kegttccll9hzzu.mp4\"},{\"id\":\"0eb08da319d3d10c065a47885793b187_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/0eb08da319d3d10c065a47885793b187_picture-1.png\"}],\"name\":\"Le Creuset Signature Casserole Dish\",\"order\":27,\"vendor\":\"Amazon Uk\"},{\"id\":\"7K1vfsDx06\",\"media\":[{\"id\":\"SnappyProduct/7K1vfsDx06/pkcbcfyhgn4lobegg1w6\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572456273/SnappyProduct/7K1vfsDx06/pkcbcfyhgn4lobegg1w6.mp4\"},{\"id\":\"b9223d6bb4cffe74dd3fc41d015b1531_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/b9223d6bb4cffe74dd3fc41d015b1531_picture-1.png\"}],\"name\":\"Powerbeats Pro\",\"order\":28,\"vendor\":\"Amazon Uk\"},{\"id\":\"8QxtmBENug\",\"media\":[{\"id\":\"SnappyProduct/8QxtmBENug/nzeol2ajpzz0rm6whclv\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572386227/SnappyProduct/8QxtmBENug/nzeol2ajpzz0rm6whclv.mp4\"},{\"id\":\"298ca07d3350d9ecc786252f27172954_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/298ca07d3350d9ecc786252f27172954_picture-1.png\"}],\"name\":\"Weber Gas Grill\",\"order\":29,\"vendor\":\"Amazon\"},{\"id\":\"aeW7GljkAZ\",\"media\":[{\"id\":\"SnappyProduct/aeW7GljkAZ/umw5grzvh89pd1vpoigo\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572384356/SnappyProduct/aeW7GljkAZ/umw5grzvh89pd1vpoigo.mp4\"},{\"id\":\"9df37cc481170c53798e26527c5bf1f2_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/9df37cc481170c53798e26527c5bf1f2_picture-1.png\"}],\"name\":\"Yandel Power Lift Recliner\",\"order\":30,\"vendor\":\"Amazon\"},{\"id\":\"nscnnhkEGo\",\"media\":[{\"id\":\"SnappyProduct/nscnnhkEGo/z0ribg8obtamhyr5yygt\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572032823/SnappyProduct/nscnnhkEGo/z0ribg8obtamhyr5yygt.mp4\"},{\"id\":\"9852248cc30e7b3efddd34e1485732e1_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/9852248cc30e7b3efddd34e1485732e1_picture-1.png\"}],\"name\":\"Unstable Unicorns Game\",\"order\":31,\"vendor\":\"Amazon\"},{\"id\":\"QlG8YmYLC9\",\"media\":[{\"id\":\"SnappyProduct/QlG8YmYLC9/oey4oaqozsxfitmsni6s\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571948004/SnappyProduct/QlG8YmYLC9/oey4oaqozsxfitmsni6s.mp4\"},{\"id\":\"SnappyProduct/QlG8YmYLC9/ubmq3bx1rm5s3swauoxp\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571948188/SnappyProduct/QlG8YmYLC9/ubmq3bx1rm5s3swauoxp.mp4\"},{\"id\":\"77895762adb8e7f5cac69ed7a358e2d7_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/77895762adb8e7f5cac69ed7a358e2d7_picture-1.png\"}],\"name\":\"Bluetooth Headphones\",\"order\":32,\"vendor\":\"Amazon\"},{\"id\":\"CiKlrhxDlP\",\"media\":[{\"id\":\"SnappyProduct/CiKlrhxDlP/kh4z5rennnj3zt07met6\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571944286/SnappyProduct/CiKlrhxDlP/kh4z5rennnj3zt07met6.mp4\"},{\"id\":\"060ceee6af65bc1fc043dfe154d065b5_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/060ceee6af65bc1fc043dfe154d065b5_picture-1.png\"}],\"name\":\"Red Magnolia Wreath\",\"order\":33,\"vendor\":\"Amazon\"},{\"id\":\"IqwQoVdsME\",\"media\":[{\"id\":\"SnappyProduct/IqwQoVdsME/vlbv5oeos9odc5yegj7v\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571943437/SnappyProduct/IqwQoVdsME/vlbv5oeos9odc5yegj7v.mp4\"},{\"id\":\"ccefbf8f1110cb3258cfd9f70acdd762_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/ccefbf8f1110cb3258cfd9f70acdd762_picture-1.png\"}],\"name\":\"24\\\" Curved Gaming Monitor\",\"order\":34,\"vendor\":\"Amazon\"},{\"id\":\"pb4DPbo0gg\",\"media\":[{\"id\":\"SnappyProduct/pb4DPbo0gg/aj3etnr1m3ybw9fx7hue\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571939402/SnappyProduct/pb4DPbo0gg/aj3etnr1m3ybw9fx7hue.mp4\"},{\"id\":\"43a773521e59c6ed6bbf2e0988df4d2a_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/43a773521e59c6ed6bbf2e0988df4d2a_picture-1.png\"}],\"name\":\"Bose SoundLink II\",\"order\":35,\"vendor\":\"Amazon\"},{\"id\":\"CoR5SMhgUo\",\"media\":[{\"id\":\"SnappyProduct/CoR5SMhgUo/ycmckjxt99rqbnese3su\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571861917/SnappyProduct/CoR5SMhgUo/ycmckjxt99rqbnese3su.mp4\"},{\"id\":\"52008c79adecab4ebe6f47e0599789c3_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/52008c79adecab4ebe6f47e0599789c3_picture-1.png\"}],\"name\":\"Indoor Exercise Bike\",\"order\":36,\"vendor\":\"Amazon\"},{\"id\":\"RKHJ6Mu8Jt\",\"media\":[{\"id\":\"SnappyProduct/RKHJ6Mu8Jt/ad9dazxzhb2h7qwqbxtf\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571859145/SnappyProduct/RKHJ6Mu8Jt/ad9dazxzhb2h7qwqbxtf.mp4\"},{\"id\":\"fa133d1c844f09826f465aceb2bba51d_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/fa133d1c844f09826f465aceb2bba51d_picture-1.png\"}],\"name\":\"31.5\\\" Curved Gaming Monitor\",\"order\":37,\"vendor\":\"Amazon\"},{\"id\":\"xVkPfNQM9l\",\"media\":[{\"id\":\"SnappyProduct/xVkPfNQM9l/pzqzwxjtau1zqhyecoo3\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571847428/SnappyProduct/xVkPfNQM9l/pzqzwxjtau1zqhyecoo3.mp4\"},{\"id\":\"6bccf972b16c9a0a1e4cb1efb6d53e88_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/6bccf972b16c9a0a1e4cb1efb6d53e88_picture-1.png\"}],\"name\":\"Portable Mr. Heater\",\"order\":38,\"vendor\":\"Amazon\"},{\"id\":\"ah0kWbo2pt\",\"media\":[{\"id\":\"SnappyProduct/ah0kWbo2pt/ayfreqqilc7uqa0ce9f4\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571786270/SnappyProduct/ah0kWbo2pt/ayfreqqilc7uqa0ce9f4.mp4\"},{\"id\":\"2187db83f9ae5ba6af91aa255380827d_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/2187db83f9ae5ba6af91aa255380827d_picture-1.png\"}],\"name\":\"Outdoor Patio Table\",\"order\":39,\"vendor\":\"Amazon\"},{\"id\":\"nzJ4LSiTLI\",\"media\":[{\"id\":\"SnappyProduct/nzJ4LSiTLI/rdxsuche7s6jdjhdzjwo\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571783399/SnappyProduct/nzJ4LSiTLI/rdxsuche7s6jdjhdzjwo.mp4\"},{\"id\":\"SnappyProduct/nzJ4LSiTLI/s5aafoqgaf0xkrndqasa\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571783449/SnappyProduct/nzJ4LSiTLI/s5aafoqgaf0xkrndqasa.mp4\"},{\"id\":\"a1f78e84e2c9852cb815e71479988f25_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/a1f78e84e2c9852cb815e71479988f25_picture-1.png\"}],\"name\":\"Bose SoundLink Speaker\",\"order\":40,\"vendor\":\"Amazon\"},{\"id\":\"auCLfiN2fj\",\"media\":[{\"id\":\"SnappyProduct/auCLfiN2fj/wfn7zdml1lg9waa8z9bp\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571781713/SnappyProduct/auCLfiN2fj/wfn7zdml1lg9waa8z9bp.mp4\"},{\"id\":\"d6b164b51d36fea8335a0de63e811979_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/d6b164b51d36fea8335a0de63e811979_picture-1.png\"}],\"name\":\"Premium Large Yoga Mat\",\"order\":41,\"vendor\":\"Amazon\"},{\"id\":\"hndeXYPJMy\",\"media\":[{\"id\":\"SnappyProduct/hndeXYPJMy/mauqvxvmuezjnbfykkou\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571763644/SnappyProduct/hndeXYPJMy/mauqvxvmuezjnbfykkou.mp4\"},{\"id\":\"f7d12aea13c0bf757a9ad94ae15605ca_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/f7d12aea13c0bf757a9ad94ae15605ca_picture-1.png\"}],\"name\":\"Outdoor Lawn Dice\",\"order\":42,\"vendor\":\"Amazon\"},{\"id\":\"UycSuC9iFS\",\"media\":[{\"id\":\"SnappyProduct/UycSuC9iFS/cpxfrraj8ojqtuvkeqhw\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571678303/SnappyProduct/UycSuC9iFS/cpxfrraj8ojqtuvkeqhw.mp4\"},{\"id\":\"SnappyProduct/UycSuC9iFS/fv9ujf1v8vuzqo4azyur\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571678396/SnappyProduct/UycSuC9iFS/fv9ujf1v8vuzqo4azyur.mp4\"},{\"id\":\"SnappyProduct/UycSuC9iFS/ndmcnckcarvrjklajwru\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571760022/SnappyProduct/UycSuC9iFS/ndmcnckcarvrjklajwru.mp4\"},{\"id\":\"6f953170fdf8fb69f4bd36ce19b28121_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/6f953170fdf8fb69f4bd36ce19b28121_picture-1.png\"}],\"name\":\"Samsung Flat 65-Inch 4K TV\",\"order\":43,\"vendor\":\"Amazon\"},{\"id\":\"CUtyD3EfvR\",\"media\":[{\"id\":\"SnappyProduct/CUtyD3EfvR/h0qdtdaon4c2rznmdtvn\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571671583/SnappyProduct/CUtyD3EfvR/h0qdtdaon4c2rznmdtvn.mp4\"},{\"id\":\"83b313b418f75d869b82eff5da4d5346_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/83b313b418f75d869b82eff5da4d5346_picture-1.png\"}],\"name\":\"Bose SoundTouch 300 \",\"order\":44,\"vendor\":\"Amazon\"},{\"id\":\"kTXLNjshvP\",\"media\":[{\"id\":\"SnappyProduct/kTXLNjshvP/ezmnlhjpawcviu5nwg87\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571421144/SnappyProduct/kTXLNjshvP/ezmnlhjpawcviu5nwg87.mp4\"},{\"id\":\"7b71cd0fd3be7ea12727e8a78f493d01_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/7b71cd0fd3be7ea12727e8a78f493d01_picture-1.png\"}],\"name\":\"Weber Gass Grill\",\"order\":45,\"vendor\":\"Amazon\"},{\"id\":\"DcR6wngai9\",\"media\":[{\"id\":\"SnappyProduct/DcR6wngai9/oftslmfun9iflkqm0ncn\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571343195/SnappyProduct/DcR6wngai9/oftslmfun9iflkqm0ncn.mp4\"},{\"id\":\"cca10de18f527d2001d9a5c41d3bb8d2_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/cca10de18f527d2001d9a5c41d3bb8d2_picture-1.png\"}],\"name\":\"Sonos Playbase\",\"order\":46,\"vendor\":\"Rymax\"},{\"id\":\"1yCKOGe7pz\",\"media\":[{\"id\":\"SnappyProduct/1yCKOGe7pz/wbvfztd7smqdggta4vs5\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571339506/SnappyProduct/1yCKOGe7pz/wbvfztd7smqdggta4vs5.mp4\"},{\"id\":\"1bd9ec673f489c39f1cb581247f8f96c_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/1bd9ec673f489c39f1cb581247f8f96c_picture-1.png\"}],\"name\":\"Apple iPad Pro (12.9-inch, 256GB)\",\"order\":47,\"vendor\":\"Amazon\"},{\"id\":\"lPBUb2ybKV\",\"media\":[{\"id\":\"SnappyProduct/lPBUb2ybKV/oa5twoplovbcfbjd3m7q\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571338800/SnappyProduct/lPBUb2ybKV/oa5twoplovbcfbjd3m7q.mp4\"},{\"id\":\"e588dc1f1f70e53d12b7db260baf3ecb_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/e588dc1f1f70e53d12b7db260baf3ecb_picture-1.png\"}],\"name\":\"Deebot Robotic Vacuum & Mop\",\"order\":48,\"vendor\":\"Rymax\"},{\"id\":\"dgZUZyfAeQ\",\"media\":[{\"id\":\"SnappyProduct/dgZUZyfAeQ/o7gmzji0nru9xjpfeo55\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571333840/SnappyProduct/dgZUZyfAeQ/o7gmzji0nru9xjpfeo55.mp4\"},{\"id\":\"20352e244742af5ad2bdb893bcb4fe39_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/20352e244742af5ad2bdb893bcb4fe39_picture-1.png\"}],\"name\":\"Dash Cam\",\"order\":49,\"vendor\":\"Amazon\"},{\"id\":\"dakYjQU7wb\",\"media\":[{\"id\":\"SnappyProduct/dakYjQU7wb/jodbgkfopxxzlci4xdfc\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571279019/SnappyProduct/dakYjQU7wb/jodbgkfopxxzlci4xdfc.mp4\"},{\"id\":\"SnappyProduct/dakYjQU7wb/tqa7fdggiwr2acjqcopk\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571279589/SnappyProduct/dakYjQU7wb/tqa7fdggiwr2acjqcopk.mp4\"},{\"id\":\"21d1b8feca506027d6806a134afca798_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/21d1b8feca506027d6806a134afca798_picture-1.png\"}],\"name\":\"Stereo Turntable\",\"order\":50,\"vendor\":\"Amazon\"},{\"id\":\"zVKtwzMKKf\",\"media\":[{\"id\":\"SnappyProduct/zVKtwzMKKf/d5uwqbvi39jeyfqn8jdz\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571257088/SnappyProduct/zVKtwzMKKf/d5uwqbvi39jeyfqn8jdz.mp4\"},{\"id\":\"99c6f5bebc78eaf801c6cf4f22d35bfd_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/99c6f5bebc78eaf801c6cf4f22d35bfd_picture-1.png\"}],\"name\":\"HSI Ceramic Flat Iron\",\"order\":51,\"vendor\":\"Amazon\"},{\"id\":\"kCdTDRJnDM\",\"media\":[{\"id\":\"SnappyProduct/kCdTDRJnDM/fwu59ztyjzm9ypnwhkdi\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571252942/SnappyProduct/kCdTDRJnDM/fwu59ztyjzm9ypnwhkdi.mp4\"},{\"id\":\"5b1cd2d3873069eb17612a65f72d0a95_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/5b1cd2d3873069eb17612a65f72d0a95_picture-1.png\"}],\"name\":\"15-inch ASUS VivoBook\",\"order\":52,\"vendor\":\"Amazon\"},{\"id\":\"HAcci0glzL\",\"media\":[{\"id\":\"SnappyProduct/HAcci0glzL/qycydbcjuyymxubb0x5b\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571251322/SnappyProduct/HAcci0glzL/qycydbcjuyymxubb0x5b.mp4\"},{\"id\":\"SnappyProduct/HAcci0glzL/vrytviwgw1ufvaep0bfu\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571251349/SnappyProduct/HAcci0glzL/vrytviwgw1ufvaep0bfu.mp4\"},{\"id\":\"SnappyProduct/HAcci0glzL/xi72ji2j2zejat4nomce\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1573501648/SnappyProduct/HAcci0glzL/xi72ji2j2zejat4nomce.mp4\"},{\"id\":\"82131d25a84816e096f024bf7fa40af4_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/82131d25a84816e096f024bf7fa40af4_picture-1.png\"}],\"name\":\"3-Piece Luggage Set\",\"order\":53,\"vendor\":\"Amazon\"},{\"id\":\"dWstGYaDKN\",\"media\":[{\"id\":\"SnappyProduct/dWstGYaDKN/o1t2qytpwuerxeohrkrh\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571183953/SnappyProduct/dWstGYaDKN/o1t2qytpwuerxeohrkrh.mp4\"},{\"id\":\"SnappyProduct/dWstGYaDKN/dfrmszfqq4auu8mirfvh\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571184045/SnappyProduct/dWstGYaDKN/dfrmszfqq4auu8mirfvh.mp4\"},{\"id\":\"bf40b92f8043ca683394d97f88223456_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/bf40b92f8043ca683394d97f88223456_picture-1.png\"}],\"name\":\"J6S Home Cinema Projector\",\"order\":54,\"vendor\":\"Amazon\"},{\"id\":\"aXLxEXFACq\",\"media\":[{\"id\":\"SnappyProduct/aXLxEXFACq/y3go8psldbrrbwudj8v9\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571181522/SnappyProduct/aXLxEXFACq/y3go8psldbrrbwudj8v9.mp4\"},{\"id\":\"aefe7f3091d47aa9520ac63bd13bec6d_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/aefe7f3091d47aa9520ac63bd13bec6d_picture-1.png\"}],\"name\":\"Wine Glass Set\",\"order\":55,\"vendor\":\"Amazon\"},{\"id\":\"R0FrFhj2Dp\",\"media\":[{\"id\":\"SnappyProduct/R0FrFhj2Dp/cei1fkx3xmrqgqmvkoxs\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571179771/SnappyProduct/R0FrFhj2Dp/cei1fkx3xmrqgqmvkoxs.mp4\"},{\"id\":\"fa13ed803afe62e60906271750f37767_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/fa13ed803afe62e60906271750f37767_picture-1.png\"}],\"name\":\"TriggerPoint Foam Roller\",\"order\":56,\"vendor\":\"Amazon\"},{\"id\":\"kYCBFEZHSe\",\"media\":[{\"id\":\"SnappyProduct/kYCBFEZHSe/o5er0znvxfb4f84w7ddw\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570827885/SnappyProduct/kYCBFEZHSe/o5er0znvxfb4f84w7ddw.mp4\"},{\"id\":\"2565d9ef22691bc83c79f6640c3755c2_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/2565d9ef22691bc83c79f6640c3755c2_picture-1.png\"}],\"name\":\"Silicone Chocolate Mold\",\"order\":57,\"vendor\":\"Amazon\"},{\"id\":\"Ob9Hekqx6I\",\"media\":[{\"id\":\"SnappyProduct/Ob9Hekqx6I/eei6det3h5qvqrcuf8wv\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570822701/SnappyProduct/Ob9Hekqx6I/eei6det3h5qvqrcuf8wv.mp4\"},{\"id\":\"93d2d352feb0a952da15fb6fa32e2f2c_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/93d2d352feb0a952da15fb6fa32e2f2c_picture-1.png\"}],\"name\":\"Werewolf Card Game\",\"order\":58,\"vendor\":\"Amazon\"},{\"id\":\"C9NtftGHzM\",\"media\":[{\"id\":\"SnappyProduct/C9NtftGHzM/pxtn5qbnv7guni8hs0bd\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570821122/SnappyProduct/C9NtftGHzM/pxtn5qbnv7guni8hs0bd.mp4\"},{\"id\":\"5811faf3300ecf09c907bea6186ef1df_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/5811faf3300ecf09c907bea6186ef1df_picture-1.png\"}],\"name\":\"Ginger Pumpkin Yankee Candle\",\"order\":59,\"vendor\":\"Amazon\"},{\"id\":\"eLaDtN7son\",\"media\":[{\"id\":\"SnappyProduct/eLaDtN7son/mcjmep60oktugvk39afu\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570803330/SnappyProduct/eLaDtN7son/mcjmep60oktugvk39afu.mp4\"},{\"id\":\"SnappyProduct/eLaDtN7son/e6ee4ufddetntvm0sdhp\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570803376/SnappyProduct/eLaDtN7son/e6ee4ufddetntvm0sdhp.mp4\"},{\"id\":\"78634ba3f0a5bb608c25e3dfd994a395_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/78634ba3f0a5bb608c25e3dfd994a395_picture-1.png\"}],\"name\":\"Fitbit Versa 2\",\"order\":60,\"vendor\":\"Amazon Uk\"},{\"id\":\"Uy8LDfsWGK\",\"media\":[{\"id\":\"SnappyProduct/Uy8LDfsWGK/orlzyzdhawidck9lujpf\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570742707/SnappyProduct/Uy8LDfsWGK/orlzyzdhawidck9lujpf.mp4\"},{\"id\":\"063874f22b89aac20ae9d6c1ae3a44c9_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/063874f22b89aac20ae9d6c1ae3a44c9_picture-1.png\"}],\"name\":\"Kindle Paperwhite\",\"order\":61,\"vendor\":\"Amazon\"},{\"id\":\"qdPTP9wYCh\",\"media\":[{\"id\":\"SnappyProduct/qdPTP9wYCh/ifxq9udysmqezx83xqdm\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570556493/SnappyProduct/qdPTP9wYCh/ifxq9udysmqezx83xqdm.mp4\"},{\"id\":\"6e1d511cd493853e5476cb1f16a092ae_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/6e1d511cd493853e5476cb1f16a092ae_picture-1.png\"}],\"name\":\"Kenneth Cole Reaction Luggage\",\"order\":62,\"vendor\":\"Amazon\"},{\"id\":\"vbwGSXARmY\",\"media\":[{\"id\":\"SnappyProduct/vbwGSXARmY/ncgsq6i8l8fxcw6flcam\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570480297/SnappyProduct/vbwGSXARmY/ncgsq6i8l8fxcw6flcam.mp4\"},{\"id\":\"4cfeec8d97f60533bf4057eacc670efb_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/4cfeec8d97f60533bf4057eacc670efb_picture-1.png\"}],\"name\":\"Instant Pot Mini\",\"order\":63,\"vendor\":\"Amazon\"},{\"id\":\"MqnUlmxUt5\",\"media\":[{\"id\":\"SnappyProduct/MqnUlmxUt5/m3m7zyqs0kzlpxpiitz7\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570467926/SnappyProduct/MqnUlmxUt5/m3m7zyqs0kzlpxpiitz7.mp4\"},{\"id\":\"4c6d3a992ee5fb06449e5e920521f5b8_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/4c6d3a992ee5fb06449e5e920521f5b8_picture-1.png\"}],\"name\":\"Noise Cancelling Headphones\",\"order\":64,\"vendor\":\"Amazon Uk\"},{\"id\":\"D8R5bWaOHT\",\"media\":[{\"id\":\"SnappyProduct/D8R5bWaOHT/v73i0rs1rwatl9yrfcha\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570467575/SnappyProduct/D8R5bWaOHT/v73i0rs1rwatl9yrfcha.mp4\"},{\"id\":\"ffc776d08365c2a893f6ee86dc9bd728_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/ffc776d08365c2a893f6ee86dc9bd728_picture-1.png\"}],\"name\":\"Airwave Air Fryer\",\"order\":65,\"vendor\":\"Amazon Uk\"},{\"id\":\"HzVpimjCGk\",\"media\":[{\"id\":\"SnappyProduct/HzVpimjCGk/ilgjcbt0s7svfffgdqhr\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570467429/SnappyProduct/HzVpimjCGk/ilgjcbt0s7svfffgdqhr.mp4\"},{\"id\":\"3a693c30464ef6b690dd6d29780782ac_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/3a693c30464ef6b690dd6d29780782ac_picture-1.png\"}],\"name\":\"Pokémon Sun (Nintendo 3DS)\",\"order\":66,\"vendor\":\"Amazon Uk\"},{\"id\":\"j8xKJf7BMi\",\"media\":[{\"id\":\"SnappyProduct/j8xKJf7BMi/klpatyujxjbqs1jxo7s0\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570336398/SnappyProduct/j8xKJf7BMi/klpatyujxjbqs1jxo7s0.mp4\"},{\"id\":\"10b6576bb8dd33537f97b98f0f18524f_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/10b6576bb8dd33537f97b98f0f18524f_picture-1.png\"}],\"name\":\"Infusion Water Bottle \",\"order\":67,\"vendor\":\"Amazon\"},{\"id\":\"7rdkUWh0ET\",\"media\":[{\"id\":\"SnappyProduct/7rdkUWh0ET/tvevytxdqxrihzrqytdw\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570335709/SnappyProduct/7rdkUWh0ET/tvevytxdqxrihzrqytdw.mp4\"},{\"id\":\"SnappyProduct/7rdkUWh0ET/c9srymr6uhtyyhm3axl2\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570335759/SnappyProduct/7rdkUWh0ET/c9srymr6uhtyyhm3axl2.mp4\"},{\"id\":\"00e5ea5d84f666bf153a82d4c7ed868a_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/00e5ea5d84f666bf153a82d4c7ed868a_picture-1.png\"}],\"name\":\"Double Camping Hammock\",\"order\":68,\"vendor\":\"Amazon\"},{\"id\":\"Jw1msTxdPW\",\"media\":[{\"id\":\"SnappyProduct/Jw1msTxdPW/zmsjvutcfplowjymqont\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570047894/SnappyProduct/Jw1msTxdPW/zmsjvutcfplowjymqont.mp4\"},{\"id\":\"SnappyProduct/Jw1msTxdPW/bz6fhrsxlyyiophpcnre\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1570048001/SnappyProduct/Jw1msTxdPW/bz6fhrsxlyyiophpcnre.mp4\"},{\"id\":\"893e79245ff841bc24ad325d9151b9e8_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/893e79245ff841bc24ad325d9151b9e8_picture-1.png\"}],\"name\":\"Shelf Speakers\",\"order\":69,\"vendor\":\"Amazon\"},{\"id\":\"dNKZUVbFAg\",\"media\":[{\"id\":\"SnappyProduct/dNKZUVbFAg/g1pauufzxz1j72nzb8xt\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1569488099/SnappyProduct/dNKZUVbFAg/g1pauufzxz1j72nzb8xt.mp4\"},{\"id\":\"9b4aa6831234813b85adc7301df2caba_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/9b4aa6831234813b85adc7301df2caba_picture-1.png\"}],\"name\":\"Full Motion Rowing Machine\",\"order\":70,\"vendor\":\"Amazon\"},{\"id\":\"15k5ONvMit\",\"media\":[{\"id\":\"SnappyProduct/15k5ONvMit/c6ocbrgrxhm397cp4ay0\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1569444625/SnappyProduct/15k5ONvMit/c6ocbrgrxhm397cp4ay0.mp4\"},{\"id\":\"fc8b9fc158b8538f88cdddbfec0d21d2_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/fc8b9fc158b8538f88cdddbfec0d21d2_picture-1.png\"}],\"name\":\"Bissell Bagless Vacuum Cleaner\",\"order\":71,\"vendor\":\"Amazon\"},{\"id\":\"ns8ZwLGY7q\",\"media\":[{\"id\":\"SnappyProduct/ns8ZwLGY7q/jrbt4drogmnx6wchyjey\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1569355934/SnappyProduct/ns8ZwLGY7q/jrbt4drogmnx6wchyjey.mp4\"},{\"id\":\"SnappyProduct/ns8ZwLGY7q/gevjhnoam3h7qxqnmhhl\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1569355969/SnappyProduct/ns8ZwLGY7q/gevjhnoam3h7qxqnmhhl.mp4\"},{\"id\":\"e2d40d9abe7c9714d1a6c6306be86628_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/e2d40d9abe7c9714d1a6c6306be86628_picture-1.png\"}],\"name\":\"Canon EOS Rebel SL2\",\"order\":72,\"vendor\":\"Amazon Ca\"},{\"id\":\"Tmm4iIjT93\",\"media\":[{\"id\":\"SnappyProduct/Tmm4iIjT93/rdxmkhmpnqv73softilf\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1569355823/SnappyProduct/Tmm4iIjT93/rdxmkhmpnqv73softilf.mp4\"},{\"id\":\"f14ff8c91a0e6d555efe1520201c643b_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/f14ff8c91a0e6d555efe1520201c643b_picture-1.png\"}],\"name\":\"3-Piece Luggage Set\",\"order\":73,\"vendor\":\"Amazon Ca\"},{\"id\":\"rpFLLgP6c6\",\"media\":[{\"id\":\"SnappyProduct/rpFLLgP6c6/r7nfq1lobvb8dwod0e0e\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1569349049/SnappyProduct/rpFLLgP6c6/r7nfq1lobvb8dwod0e0e.mp4\"},{\"id\":\"b831018501a7b3385a1ca3bf929a1d23_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/b831018501a7b3385a1ca3bf929a1d23_picture-1.png\"}],\"name\":\"Stainless Steel Toaster\",\"order\":74,\"vendor\":\"Amazon Uk\"},{\"id\":\"FeIy5wnyXz\",\"media\":[{\"id\":\"SnappyProduct/FeIy5wnyXz/nsgpcnuglamyoqqzjy7p\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568757703/SnappyProduct/FeIy5wnyXz/nsgpcnuglamyoqqzjy7p.mp4\"},{\"id\":\"f832257a5603bfd424594ec1a33eef44_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/f832257a5603bfd424594ec1a33eef44_picture-1.png\"}],\"name\":\"Bluetooth Karaoke Microphone\",\"order\":75,\"vendor\":\"Amazon\"},{\"id\":\"W0tOmUYB2F\",\"media\":[{\"id\":\"SnappyProduct/W0tOmUYB2F/dd96ybn5upk1ecigh7gj\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568746136/SnappyProduct/W0tOmUYB2F/dd96ybn5upk1ecigh7gj.mp4\"},{\"id\":\"a03f2816c2054e546fbf3118209b31a8_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/a03f2816c2054e546fbf3118209b31a8_picture-1.png\"}],\"name\":\"Cool Mist Humidifier\",\"order\":76,\"vendor\":\"Amazon\"},{\"id\":\"uwugoktU3v\",\"media\":[{\"id\":\"SnappyProduct/uwugoktU3v/l7fgvi304n79fr3g247l\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568732740/SnappyProduct/uwugoktU3v/l7fgvi304n79fr3g247l.mp4\"},{\"id\":\"SnappyProduct/uwugoktU3v/qbm3kd4gabdppgdwwlnp\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1571583487/SnappyProduct/uwugoktU3v/qbm3kd4gabdppgdwwlnp.mp4\"},{\"id\":\"0a28d263a34576b6305e153ff7a75334_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/0a28d263a34576b6305e153ff7a75334_picture-1.png\"}],\"name\":\"Mobile Game Controller\",\"order\":77,\"vendor\":\"Amazon\"},{\"id\":\"r6Rm7i64UB\",\"media\":[{\"id\":\"SnappyProduct/r6Rm7i64UB/ew8xqcexwmgmddhczdrt\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568672864/SnappyProduct/r6Rm7i64UB/ew8xqcexwmgmddhczdrt.mp4\"},{\"id\":\"3b2342960c6a8985cad4af56a2854972_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/3b2342960c6a8985cad4af56a2854972_picture-1.png\"}],\"name\":\"Charging Station Organizer\",\"order\":78,\"vendor\":\"Amazon\"},{\"id\":\"9k3FWJ5miC\",\"media\":[{\"id\":\"SnappyProduct/9k3FWJ5miC/rq2jusjd3ded6hkfn2cs\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568672575/SnappyProduct/9k3FWJ5miC/rq2jusjd3ded6hkfn2cs.mp4\"},{\"id\":\"c61dc3154054910d1e14124d0a0a3b52_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/c61dc3154054910d1e14124d0a0a3b52_picture-1.png\"}],\"name\":\"Smartphone Lens Kit\",\"order\":79,\"vendor\":\"Amazon\"},{\"id\":\"SIgSzLH1UX\",\"media\":[{\"id\":\"SnappyProduct/SIgSzLH1UX/akbpfcr7y5qrm8czqjuk\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568671532/SnappyProduct/SIgSzLH1UX/akbpfcr7y5qrm8czqjuk.mp4\"},{\"id\":\"cb8996c9dbba5c7256aebde19ad60df2_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/cb8996c9dbba5c7256aebde19ad60df2_picture-1.png\"}],\"name\":\"Tablet Stand\",\"order\":80,\"vendor\":\"Amazon\"},{\"id\":\"SeGgu8aY3b\",\"media\":[{\"id\":\"SnappyProduct/SeGgu8aY3b/wxmtwgi4drad2fvr8uvd\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568654550/SnappyProduct/SeGgu8aY3b/wxmtwgi4drad2fvr8uvd.mp4\"},{\"id\":\"37a6afc44d88bd017189cde31480f620_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/37a6afc44d88bd017189cde31480f620_picture-1.png\"}],\"name\":\"Apple Charging Stand\",\"order\":81,\"vendor\":\"Amazon\"},{\"id\":\"Tj0ZiCns6q\",\"media\":[{\"id\":\"SnappyProduct/Tj0ZiCns6q/q15fusax0ox5g6nwmc7i\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568653585/SnappyProduct/Tj0ZiCns6q/q15fusax0ox5g6nwmc7i.mp4\"},{\"id\":\"2ea0973633d0a742a9a036bafaf7ad9f_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/2ea0973633d0a742a9a036bafaf7ad9f_picture-1.png\"}],\"name\":\"Nanopresso Portable Espresso Maker\",\"order\":82,\"vendor\":\"Amazon\"},{\"id\":\"S7IWDGVnJ8\",\"media\":[{\"id\":\"SnappyProduct/S7IWDGVnJ8/bbs4gncohyjtusbpnomi\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568318114/SnappyProduct/S7IWDGVnJ8/bbs4gncohyjtusbpnomi.mp4\"},{\"id\":\"SnappyProduct/S7IWDGVnJ8/via7k3nehrog9eoncfee\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568904841/SnappyProduct/S7IWDGVnJ8/via7k3nehrog9eoncfee.mp4\"},{\"id\":\"SnappyProduct/S7IWDGVnJ8/xomczsn39wcseikzffrv\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572293732/SnappyProduct/S7IWDGVnJ8/xomczsn39wcseikzffrv.mp4\"},{\"id\":\"SnappyProduct/S7IWDGVnJ8/dfnulgso423ykxc6bhxd\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572293747/SnappyProduct/S7IWDGVnJ8/dfnulgso423ykxc6bhxd.mp4\"},{\"id\":\"SnappyProduct/S7IWDGVnJ8/z84cu3euh6kac9qurcwq\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1572615783/SnappyProduct/S7IWDGVnJ8/z84cu3euh6kac9qurcwq.mp4\"},{\"id\":\"94dda6246f8b00406dfe8b305ee2809a_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/94dda6246f8b00406dfe8b305ee2809a_picture-1.png\"}],\"name\":\"Wireless Charger\",\"order\":83,\"vendor\":\"Amazon\"},{\"id\":\"eq1VTD63Au\",\"media\":[{\"id\":\"SnappyProduct/eq1VTD63Au/a4xwz3t91dire1gtxnle\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568210962/SnappyProduct/eq1VTD63Au/a4xwz3t91dire1gtxnle.mp4\"},{\"id\":\"9b700d4efe78c7938fb74932b6fb84e5_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/9b700d4efe78c7938fb74932b6fb84e5_picture-1.png\"}],\"name\":\"Dustbuster Vacuum\",\"order\":84,\"vendor\":\"Amazon\"},{\"id\":\"MH0ZfxtLSu\",\"media\":[{\"id\":\"SnappyProduct/MH0ZfxtLSu/y5j3w16x4ud7wvoqwctd\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568142223/SnappyProduct/MH0ZfxtLSu/y5j3w16x4ud7wvoqwctd.mp4\"},{\"id\":\"17d489a460b4bb6cddd7bcf06af005f3_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/17d489a460b4bb6cddd7bcf06af005f3_picture-1.png\"}],\"name\":\"RumbleRoller\",\"order\":85,\"vendor\":\"Amazon\"},{\"id\":\"rcf88uOMAr\",\"media\":[{\"id\":\"SnappyProduct/rcf88uOMAr/pjido98y1plzordpjutx\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568136713/SnappyProduct/rcf88uOMAr/pjido98y1plzordpjutx.mp4\"},{\"id\":\"86b0603b53b2f6a6ed125520a45d8d48_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/86b0603b53b2f6a6ed125520a45d8d48_picture-1.png\"}],\"name\":\"Envirocycle Composter\",\"order\":86,\"vendor\":\"Amazon Uk\"},{\"id\":\"2FLifCuQAY\",\"media\":[{\"id\":\"SnappyProduct/2FLifCuQAY/y1frs14ywlad2sj4mpw1\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568136474/SnappyProduct/2FLifCuQAY/y1frs14ywlad2sj4mpw1.mp4\"},{\"id\":\"7e7ad47e3fd42057fd7fa7f967a60bcb_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/7e7ad47e3fd42057fd7fa7f967a60bcb_picture-1.png\"}],\"name\":\"Ring Door View Cam\",\"order\":87,\"vendor\":\"Amazon Uk\"},{\"id\":\"xqPZJK76su\",\"media\":[{\"id\":\"SnappyProduct/xqPZJK76su/x4epqrcod3sldz9c8nih\",\"type\":\"video\",\"url\":\"https://cloudinary.snappygifts.com/video/upload/v1568108549/SnappyProduct/xqPZJK76su/x4epqrcod3sldz9c8nih.mp4\"},{\"id\":\"548b974f6a0059239b79093007087889_picture-1.png\",\"type\":\"image\",\"url\":\"https://images2.meetsnappy.com/548b974f6a0059239b79093007087889_picture-1.png\"}],\"name\":\"EurKitchen Culinary Torch\",\"order\":88,\"vendor\":\"Amazon\"}]}");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var _products_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

class ProductsService {
    static get(query) {
        return _products_repository__WEBPACK_IMPORTED_MODULE_0__[/* ProductsRepository */ "a"].get(query);
    }
    static getById(id) {
        return _products_repository__WEBPACK_IMPORTED_MODULE_0__[/* ProductsRepository */ "a"].getById(id);
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRepository; });
/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _assets_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(1, 1);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

class ProductsRepository {
    // static, cause NO Dependency injection and I don't want create new PromotionsRepository() by hands
    static get({ vendor, search }) {
        let productsResponse = _assets_data_json__WEBPACK_IMPORTED_MODULE_0__[/* products */ "a"];
        if (vendor) {
            productsResponse = productsResponse.filter(product => product.vendor === vendor);
        }
        if (search) {
            productsResponse = productsResponse.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        }
        return productsResponse;
    }
    static getById(id) {
        // find by id and return
        // currently only 1 promotion
        return _assets_data_json__WEBPACK_IMPORTED_MODULE_0__[/* products */ "a"].find(product => product.id === id);
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cache; });
/* harmony import */ var memory_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var memory_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(memory_cache__WEBPACK_IMPORTED_MODULE_0__);

const cache = (durationInSeconds, useWhen) => {
    return (req, res, next) => {
        const key = '__express__' + req.originalUrl || false;
        const cachedBody = memory_cache__WEBPACK_IMPORTED_MODULE_0__["get"](key);
        if (cachedBody) {
            res.send(cachedBody);
            return;
        }
        else if (useWhen ? useWhen(req) : true) {
            res.sendResponse = res.send;
            res.send = (body) => {
                memory_cache__WEBPACK_IMPORTED_MODULE_0__["put"](key, body, durationInSeconds * 1000);
                res.sendResponse(body);
            };
        }
        next();
    };
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("memory-cache");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsService; });
/* harmony import */ var _promotions_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

class PromotionsService {
    static get() {
        return _promotions_repository__WEBPACK_IMPORTED_MODULE_0__[/* PromotionsRepository */ "a"].get();
    }
    static getById(id) {
        return _promotions_repository__WEBPACK_IMPORTED_MODULE_0__[/* PromotionsRepository */ "a"].getById(id);
    }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsRepository; });
/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _assets_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(1, 1);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

class PromotionsRepository {
    static get() {
        return [_assets_data_json__WEBPACK_IMPORTED_MODULE_0__[/* promotion */ "b"]].filter(prom => !prom.hide); // only enabled promos
    }
    static getById(id) {
        // find by id and return
        // currently only 1 promotion
        return _assets_data_json__WEBPACK_IMPORTED_MODULE_0__[/* promotion */ "b"];
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get('/', Object(_cache__WEBPACK_IMPORTED_MODULE_2__[/* cache */ "a"])(5 * 60, (req) => req.query.search || (req.query.search && req.query.vendor)), (req, res) => {
    setTimeout(() => res.json(_products_service__WEBPACK_IMPORTED_MODULE_1__[/* ProductsService */ "a"].get(req.query)), 2500);
});
// cache all the time
router.get('/:id', Object(_cache__WEBPACK_IMPORTED_MODULE_2__[/* cache */ "a"])(5 * 60), (req, res) => {
    const id = req.params.id;
    const product = _products_service__WEBPACK_IMPORTED_MODULE_1__[/* ProductsService */ "a"].getById(id);
    return product
        ? res.json(product)
        : res.status(404).json();
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promotions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get('/', (req, res) => {
    res.json(_promotions_service__WEBPACK_IMPORTED_MODULE_1__[/* PromotionsService */ "a"].get());
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json(_promotions_service__WEBPACK_IMPORTED_MODULE_1__[/* PromotionsService */ "a"].getById(id));
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get('/', (req, res) => {
    res.json(_vendors_service__WEBPACK_IMPORTED_MODULE_1__[/* VendorsService */ "a"].get());
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsService; });
/* harmony import */ var _vendors_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

class VendorsService {
    static get() {
        return _vendors_repository__WEBPACK_IMPORTED_MODULE_0__[/* VendorsRepository */ "a"].get();
    }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsRepository; });
/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _assets_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(1, 1);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

class VendorsRepository {
    static get() {
        return _assets_data_json__WEBPACK_IMPORTED_MODULE_0__[/* vendors */ "c"];
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_products_products_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _app_promotions_promotions_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _app_vendors_vendors_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);





const app = express__WEBPACK_IMPORTED_MODULE_0__();
const greeting = { message: 'Welcome to api!' };
const staticApp = path__WEBPACK_IMPORTED_MODULE_1__["join"](__dirname, '..', 'product-viewer-app');
// serve app from dist folder
// Serve static files from the React app
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](staticApp));
app.get('/api', (req, res) => {
    res.send(greeting);
});
app.use('/api/products', _app_products_products_controller__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
app.use('/api/promotions', _app_promotions_promotions_controller__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
app.use('/api/vendors', _app_vendors_vendors_controller__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: staticApp });
});
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Crash!' });
});
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
process.on('uncaughtException', () => {
    // bye-bye
});


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map