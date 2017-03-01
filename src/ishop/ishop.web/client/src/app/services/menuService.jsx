class MenuService {
  constructor(routeUrls, translator) {
    this.routeUrls = routeUrls;
    this.translator = translator;
  }

  getMenu() {
    this.menu = this.createMenu();
    this.translator.translateDeep(this.menu, 'list', 'name');

    return this.menu;
  }

  createMenu() {
    return {
      list: [
          { name: 'HOME', url: this.routeUrls.home, isActive: true },
          { name: 'CATALOG', url: this.routeUrls.dresses, list: 
            [
              { name: 'DRESSES', url: this.routeUrls.dresses },
              { name: 'ACCESSORIES', url: this.routeUrls.accessories }
            ]
          },
          { name: 'CONTACT', url: this.routeUrls.contact }
      ]
    };
  }
}

export default MenuService