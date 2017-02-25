import template from './template.html';

import headerBackgroundIcon from 'images/hero4.jpg';

class MainHeaderController {
  constructor($translate, router, routeUrls, translator, $timeout) {
    this.$translate = $translate;
    this.router = router;
    this.routeUrls = routeUrls;
    this.translator = translator;
    this.headerBackgroundIcon = headerBackgroundIcon;

    this.$timeout = $timeout;

    this.createMainMenu();
  }

  createMainMenu() {
    this.menu = {
      list: [
          { name: 'HOME', url: this.routeUrls.home, isActive: true },
          { name: 'CATALOG', url: this.routeUrls.dresses, list: [
              { name: 'DRESSES', url: this.routeUrls.dresses },
              { name: 'ACCESSORIES', url: this.routeUrls.accessories }
          ] },
          { name: 'CONTACT', url: this.routeUrls.contact }
      ]
    };

    this.translator.translateDeep(this.menu, 'list', 'name');

    this.$timeout(() => {
      console.log(this.menu);
      this.menu.list.push({name: 'ola'});
    }, 2000);
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader