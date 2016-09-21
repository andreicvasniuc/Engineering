import template from './template.html';

class MainLayoutController {
  constructor() {}
}

let mainLayout = {
  bindings: {},
  controller: MainLayoutController,
  templateUrl: template,
  transclude: true
};

export default mainLayout