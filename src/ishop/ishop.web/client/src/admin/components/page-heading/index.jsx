import template from './template.html';

class PageHeadingController {
  constructor(navigator) {
    this.currentNavigationItem = navigator.getCurrentNavigationItem();
  }
}

let pageHeading = {
  bindings: {
    preTitle: '@'
  },
  controller: PageHeadingController,
  templateUrl: template
};

export default pageHeading