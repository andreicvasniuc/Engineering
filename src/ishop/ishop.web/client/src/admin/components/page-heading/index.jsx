import template from './template.html';

class PageHeadingController {
  constructor() {
    console.log('PageHeadingController');
  }
}

let pageHeading = {
  bindings: {},
  controller: PageHeadingController,
  templateUrl: template
};

export default pageHeading