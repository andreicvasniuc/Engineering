import './style.styl';

import template from './template.html';

class ItemDetailsController {
  constructor($timeout) {
    $timeout(() => this.image = this.item.cover_image);
  }

  selectImage(image, event) {
    event.preventDefault();

    this.image = image;
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