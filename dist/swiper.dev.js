"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Swiper =
/*#__PURE__*/
function () {
  function Swiper() {
    var _this = this;

    _classCallCheck(this, Swiper);

    this.initialY = null;
    this.initialX = null;
    document.addEventListener('touchstart', function (event) {
      return _this.startTouch(event);
    });
    document.addEventListener('touchmove', function (event) {
      return _this.moveTouch(event);
    });
    this.events = {
      swipeUp: new Event('swipeUp'),
      swipeDown: new Event('swipeDown'),
      swipeLeft: new Event('swipeLeft'),
      swipeRight: new Event('swipeRight')
    };
  }

  _createClass(Swiper, [{
    key: "startTouch",
    value: function startTouch(event) {
      event.preventDefault();
      this.initialX = event.touches[0].clientX;
      this.initialY = event.touches[0].clientY;
    }
  }, {
    key: "moveTouch",
    value: function moveTouch(event) {
      if (!this.initialX || !this.initialY) return;
      var currentX = event.touches[0].clientX;
      var currentY = event.touches[0].clientY;
      var diffX = this.initialX - currentX;
      var diffY = this.initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          document.dispatchEvent(this.events.swipeLeft);
        } else {
          document.dispatchEvent(this.events.swipeRight);
        }
      } else {
        if (diffY > 0) {
          document.dispatchEvent(this.events.swipeUp);
        } else {
          document.dispatchEvent(this.events.swipeDown);
        }
      }

      this.initialX = null;
      this.initialY = null;
    }
  }]);

  return Swiper;
}();

new Swiper();