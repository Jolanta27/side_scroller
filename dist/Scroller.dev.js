"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroller =
/*#__PURE__*/
function () {
  function Scroller(rootSelector) {
    _classCallCheck(this, Scroller);

    var rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll('section');

    var sectionsArr = _toConsumableArray(this.sections);

    var currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
    this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex; //  this.currentSectionIndex = Math.max(currentSectionIndex, 0); the same like above

    this.isThrottled = false;
    this.drawNavigation();
  }

  _createClass(Scroller, [{
    key: "isScrolledIntoView",
    value: function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = Math.floor(rect.bottom);
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  }, {
    key: "listenScroll",
    value: function listenScroll(event) {
      var _this = this;

      if (this.isThrottled) return;
      this.isThrottled = true;
      setTimeout(function () {
        _this.isThrottled = false;
      }, 1000);
      var direction = event.deltaY > 0 ? 1 : -1;
      this.scroll(direction);
    }
  }, {
    key: "scroll",
    value: function scroll(direction) {
      if (direction === 1) {
        var isLastSection = this.currentSectionIndex === this.sections.length - 1;
        if (isLastSection) return;
      } else if (direction === -1) {
        var firstSection = this.currentSectionIndex === 0;
        if (firstSection) return;
      }

      this.currentSectionIndex = this.currentSectionIndex + direction;
      this.scrollToCurrentSection();
    }
  }, {
    key: "scrollToCurrentSection",
    value: function scrollToCurrentSection() {
      this.selectActiveNavItem();
      this.sections[this.currentSectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    }
  }, {
    key: "drawNavigation",
    value: function drawNavigation() {
      var _this2 = this;

      this.navigationContainer = document.createElement('aside');
      this.navigationContainer.setAttribute('class', 'scroller__navigation');
      var list = document.createElement('ul');
      this.sections.forEach(function (section, index) {
        var listItem = document.createElement('li');
        listItem.addEventListener('click', function () {
          _this2.currentSectionIndex = index;

          _this2.scrollToCurrentSection();
        });
        list.appendChild(listItem);
      });
      this.navigationContainer.appendChild(list);
      document.body.appendChild(this.navigationContainer);
      this.selectActiveNavItem();
    }
  }, {
    key: "selectActiveNavItem",
    value: function selectActiveNavItem() {
      var _this3 = this;

      if (this.navigationContainer) {
        var navigationItem = this.navigationContainer.querySelectorAll('li');
        navigationItem.forEach(function (item, index) {
          if (index === _this3.currentSectionIndex) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    }
  }]);

  return Scroller;
}();