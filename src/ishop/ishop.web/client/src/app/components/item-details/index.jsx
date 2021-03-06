import './style.styl';

import template from './template.html';

class ItemDetailsController {
  constructor() {
    console.log(this.item);
  }

  getNoCoverImages() {
    return _.filter(this.item.images, {is_cover: false});
  }

  getColor() {
    return 'color';
  }

  getSize() {
    return 'size';
  }
}

let itemDetails = {
  bindings: {
    item: '<'
  },
  controller: ItemDetailsController,
  templateUrl: template
};

export default itemDetails