import template from './template.html';

import headerBackgroundIcon from 'images/hero4.jpg';

class MainHeaderController {
  constructor($translate, router, routeUrls) {
    this.$translate = $translate;
    this.router = router;
    this.routeUrls = routeUrls;
    this.headerBackgroundIcon = headerBackgroundIcon;

    this.createMainMenu();
  }

  createMainMenu() {
    this.menuList = [
        { name: 'HOME', url: this.routeUrls.home, isActive: true },
        { name: 'CATALOG', url: this.routeUrls.dresses, subMenuList: [
            { name: 'DRESSES', url: this.routeUrls.dresses },
            { name: 'ACCESSORIES', url: this.routeUrls.accessories }
        ] },
        { name: 'CONTACT', url: this.routeUrls.contact }
    ];

    console.log(_.flatten(this.menuList));

    this.$translate(['HOME', 'CONTACT']).then((translation) => {
        console.log('translation', translation);
    });

    this.translateList();
  }

  translateList(list, translatePropertyName, childListPropertyName) {
    list.forEach((item) => {

        this.$translate(item[translatePropertyName]).then((translation) => {

        });
    });
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader