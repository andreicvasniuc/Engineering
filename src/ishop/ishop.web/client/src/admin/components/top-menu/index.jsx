import template from './template.html';

class TopMenuController {
  constructor($route) {
    this.$route = $route;
  }

  alert() {
    alert('it is not implemented yet!');
  }

  logout() {
    sessionStorage.removeItem('auth_token');
    this.$route.reload();
  }
}

let topMenu = {
  bindings: {},
  controller: TopMenuController,
  templateUrl: template
};

export default topMenu