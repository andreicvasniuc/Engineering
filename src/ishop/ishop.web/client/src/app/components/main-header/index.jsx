import template from './template.html';

import headerBackgroundIcon from 'images/hero2.jpg';

class MainHeaderController {
  constructor($scope, $window) {
    this.$scope = $scope;
    this.$window = $window;
    this.headerBackgroundIcon = headerBackgroundIcon;
    this.headingOpacity = 1;

    $(this.$window).unbind('scroll').scroll(() => this.windowScroll());
  }

  windowScroll() {
    let scrollPos = $(this.$window).scrollTop();

    if ( $('body').hasClass('fh5co-mobile-menu-visible') ) {
      $('body').removeClass('fh5co-mobile-menu-visible');
    }

    this.isWindowScrolled = scrollPos > 70;
    this.headingOpacity = 1-(scrollPos / 300);

    this.$scope.$apply();
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader