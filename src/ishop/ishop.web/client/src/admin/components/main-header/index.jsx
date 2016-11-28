import template from './template.html';

class MainHeaderController {
  constructor(router, routeUrls) {
    this.router = router;
  }

  goToDashboard() {
    this.router.goTo(routeUrls.dashboard);
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader