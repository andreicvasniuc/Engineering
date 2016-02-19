import template from './template.html';

class SidebarController {
  constructor() {
    console.log('SidebarController');
  }
}

let sidebar = {
  bindings: {},
  controller: SidebarController,
  templateUrl: template
};

export default sidebar