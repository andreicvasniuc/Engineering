import template from './template.html';

class PanelController {
  constructor() {}
}

let panel = {
  bindings: { type:'@', heading:'@', count:'=', iconClass:'@' },
  controller: PanelController,
  templateUrl: template
};

export default panel