"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var scroller = new Scroller('#root');
  document.addEventListener('mousewheel', scroller.listenScroll);
});