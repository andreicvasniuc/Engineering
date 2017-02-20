import template from './template.html';

import headerBackgroundIcon from 'images/hero4.jpg';

class MainHeaderController {
  constructor(router, routeUrls) {
    this.router = router;
    this.routeUrls = routeUrls;
    this.headerBackgroundIcon = headerBackgroundIcon;
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader