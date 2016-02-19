import template from './template.html';

class TopMenuController {
  constructor() {
    console.log('TopMenuController');
  }
}

let topMenu = {
  bindings: {},
  controller: TopMenuController,
  templateUrl: template
};

export default topMenu