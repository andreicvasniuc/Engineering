import template from './template.html';

class MenuController {
  constructor($rootScope, menuService) {
    console.log('MenuController');
    this.menu = menuService.getMenu();

    this.superfishMainMenu();

    $rootScope.isMobileMenuVisible = false;
  }

  superfishMainMenu() {
    $('#fh5co-primary-menu').unbind('superfish').superfish({ delay: 0, animation: { opacity: 'show' }, speed: 'fast', cssArrows: true, disableHI: true });
  }

}

let menu = {
  bindings: {},
  controller: MenuController,
  templateUrl: template
};

export default menu