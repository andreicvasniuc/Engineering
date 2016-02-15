import template from './template.html';

class CategoryGridController {
  constructor() {
    console.log('CategoryGridController');
  }
}

let categoryGrid = {
  bindings: { data: '=' },
  controller: CategoryGridController,
  templateUrl: template
};

export default categoryGrid