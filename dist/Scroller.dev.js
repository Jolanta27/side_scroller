"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroller =
/*#__PURE__*/
function () {
  function Scroller() {
    _classCallCheck(this, Scroller);

    var rootElement = document.querySelector('#root');
    this.sections = document.querySelectorAll('section');
    this.currentSectionIndex = 0;
    this.isThrottled = false;
  }

  _createClass(Scroller, [{
    key: "listenScroll",
    value: function listenScroll() {
      if (this.isThrottled) return;
      this.isThrottled = true;
      setTimeout(function () {
        this.isThrottled = false;
      }, 1000);
      var direction = event.wheelDelta < 0 ? 1 : -1; //scroll(direction);
    }
  }]);

  return Scroller;
}();