import template from './template.html';

class CategoryGridController {
  constructor() {}
}

let categoryGrid = {
  bindings: { data: '=' },
  controller: CategoryGridController,
  templateUrl: template
};

export default categoryGrid