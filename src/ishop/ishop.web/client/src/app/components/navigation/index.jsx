import template from './template.html';

class NavigationController {
  constructor(routeUrls, translator) {
    this.routeUrls = routeUrls;
    this.translator = translator;

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
  }
}

let mainHeader = {
  bindings: {},
  controller: NavigationController,
  templateUrl: template
};

export default mainHeader