import template from './template.html';

class ItemsController {
  constructor() {
  }
}

let items = {
  bindings: {
    list: '<'
  },
  controller: ItemsController,
  templateUrl: template
};

export default items