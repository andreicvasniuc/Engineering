import template from './template.html';

class MainHeaderController {
  constructor() {
    console.log('MainHeaderController');
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader