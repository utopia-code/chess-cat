/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


import { Collapse as Collapse, Carousel as Carousel } from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {

  // add active class navigation based on url

  var current = location.pathname.split('/')[1];
  var menuItems = document.querySelectorAll('.js-nav__link');
  
  if (current === "") {
      menuItems[0].classList.add('nav__link--active')
      return;
  }
  // if (current === "museum.html") {
  //     menuItems[1].classList.add('is-active')
  //     return;
  // }
  for (var i = 0, l = menuItems.length; i < l; i++) {
      if (menuItems[i].getAttribute('href').indexOf(current) !== -1) {
          menuItems[i].classList.add('nav__link--active');
      }
  }
} )();