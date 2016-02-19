import template from './template.html';

class BreadcrumbController {
  constructor() {
    console.log('BreadcrumbController');
  }
}

let breadcrumb = {
  bindings: {},
  controller: BreadcrumbController,
  templateUrl: template
};

export default breadcrumb