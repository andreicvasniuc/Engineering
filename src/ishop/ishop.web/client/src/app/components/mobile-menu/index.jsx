import template from './template.html';

class MobileMenuController {
  constructor(menuService) {
    console.log('MobileMenuController');
    this.menu = menuService.getMenu();

    $('html,body').addClass('fh5co-overflow');
  }
}

let mobileMenu = {
  bindings: {},
  controller: MobileMenuController,
  templateUrl: template
};

export default mobileMenu