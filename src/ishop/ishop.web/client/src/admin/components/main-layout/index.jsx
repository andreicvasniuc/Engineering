import template from './template.html';

class MainLayoutController {
  constructor() {
    //console.log('MainLayoutController');
  }
}

let mainLayout = {
  bindings: {},
  controller: MainLayoutController,
  templateUrl: template,
  transclude: true
};

export default mainLayout