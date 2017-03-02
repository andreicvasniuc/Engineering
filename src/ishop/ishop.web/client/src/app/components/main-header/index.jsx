import template from './template.html';

import headerBackgroundIcon from 'images/hero2.jpg';

class MainHeaderController {
  constructor($scope, $rootScope, $window) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$window = $($window);
    this.headerBackgroundIcon = headerBackgroundIcon;
    this.headingOpacity = 1;

    this.$window.unbind('scroll').scroll(() => this.windowScroll());
    this.$window.unbind('resize').resize(() => this.windowResize());
    this.checkMobileWindowSize();
  }

  windowScroll() {
    let scrollPos = this.$window.scrollTop();

    this.isWindowScrolled = scrollPos > 70;
    this.headingOpacity = 1-(scrollPos / 300);

    this.$rootScope.isMobileMenuVisible = false;

    this.$scope.$apply();
  }

  windowResize() {
    this.checkMobileWindowSize();
    this.$scope.$apply();
  }

  checkMobileWindowSize() {
    this.$rootScope.isMobileWindowSize = this.$window.width() < 769;
    this.$rootScope.isMobileMenuVisible = false;
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader