"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var scroller = new Scroller('#root');
  document.addEventListener('wheel', function (event) {
    return scroller.listenScroll(event);
  });
});