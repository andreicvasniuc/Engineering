import template from './template.html';

import hero2Icon from 'images/hero2.jpg';
import hero3Icon from 'images/hero3.jpg';
import hero4Icon from 'images/hero4.jpg';

class CarouselController {
  constructor($timeout) {
    this.createIconList();
    $timeout(() => this.createCarousel(), 50);
  }

  createIconList() {
    this.iconList = [hero2Icon, hero3Icon, hero4Icon];
  }

  createCarousel() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      lazyLoad: true,
      responsiveClass: true,
      nav: true,
      dots: true,
      smartSpeed: 500,
      navText: [
        "<i class='ti-arrow-left owl-direction'></i>",
        "<i class='ti-arrow-right owl-direction'></i>"
      ],
      responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true
          }
      }
    });

  }
}

let carousel = {
  bindings: {},
  controller: CarouselController,
  templateUrl: template
};

export default carousel