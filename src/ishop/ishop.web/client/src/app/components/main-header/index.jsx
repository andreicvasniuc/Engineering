import template from './template.html';

import headerBackgroundIcon from 'images/hero2.jpg';

class MainHeaderController {
  constructor() {
    this.headerBackgroundIcon = headerBackgroundIcon;
  }
}

let mainHeader = {
  bindings: {},
  controller: MainHeaderController,
  templateUrl: template
};

export default mainHeader