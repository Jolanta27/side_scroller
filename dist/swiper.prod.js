"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var Swiper=function(){function e(){var t=this;_classCallCheck(this,e),this.initialY=null,this.initialX=null,document.addEventListener("touchstart",function(e){return t.startTouch(e)}),document.addEventListener("touchmove",function(e){return t.moveTouch(e)}),this.events={swipeUp:new Event("swipeUp"),swipeDown:new Event("swipeDown"),swipeLeft:new Event("swipeLeft"),swipeRight:new Event("swipeRight")}}return _createClass(e,[{key:"startTouch",value:function(e){e.preventDefault(),this.initialX=e.touches[0].clientX,this.initialY=e.touches[0].clientY}},{key:"moveTouch",value:function(e){if(this.initialX&&this.initialY){var t=e.touches[0].clientX,i=e.touches[0].clientY,n=this.initialX-t,s=this.initialY-i;Math.abs(n)>Math.abs(s)?0<n?document.dispatchEvent(this.events.swipeLeft):document.dispatchEvent(this.events.swipeRight):0<s?document.dispatchEvent(this.events.swipeUp):document.dispatchEvent(this.events.swipeDown),this.initialX=null,this.initialY=null}}}]),e}();new Swiper;