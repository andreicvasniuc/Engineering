import template from './template.html';

class SidebarController {
  constructor($route, router, navigator) {
    this.$route = $route;
    this.router = router;

    this.navigationItems = navigator.navigationItems;
  }

  goTo(url) {
    if(this.isActive(url)) {
      this.$route.reload();
    } else {
      this.router.goTo(url);
    }
  }

  isActive(url) {
    return url == this.router.getCurrentUrl();
  }

  alert() {
    alert('it is not implemented yet!');
  }
}

let sidebar = {
  bindings: {},
  controller: SidebarController,
  templateUrl: template
};

export default sidebar