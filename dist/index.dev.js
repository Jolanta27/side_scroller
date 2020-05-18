"use strict";

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello world');
  var rootElement = document.querySelector('#root');
  var sections = document.querySelectorAll('section');
  document.addEventListener('mousewheel', function (event) {
    console.log(event.wheelDelta);
  });
});