import template from './template.html';

class BreadcrumbController {
  constructor(navigator) {
    this.currentNavigationItem = navigator.getCurrentNavigationItem();
  }
}

let breadcrumb = {
  bindings: {},
  controller: BreadcrumbController,
  templateUrl: template
};

export default breadcrumb