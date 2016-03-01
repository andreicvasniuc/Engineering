import template from './template.html';

class SidebarController {
  constructor(router, navigator) {
    this.router = router;

    this.navigationItems = navigator.navigationItems;
  }

  goTo(url) {
    this.router.goTo(url);
  }

  isActive(url) {
    return url == this.router.getCurrentUrl();
  }
}

let sidebar = {
  bindings: {},
  controller: SidebarController,
  templateUrl: template
};

export default sidebar