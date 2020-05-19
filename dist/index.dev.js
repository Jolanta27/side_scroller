"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var scroller = new Scroller('#root');
  document.addEventListener('wheel', function (event) {
    return scroller.listenScroll(event);
  });
  document.addEventListener('swipeUp', function () {
    return scroller.scroll(1);
  });
  document.addEventListener('swipeDown', function () {
    return scroller.scroll(-1);
  });
  document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 40:
        return scroller.scroll(1);

      case 38:
        return scroller.scroll(-1);

      default:
        return;
    }
  });
});