import template from './template.html';

class ItemsController {
  constructor() {
  }

  getUrl(item) {
    return (item.cover_image && item.cover_image.url) || 'http://www.fyimusicnews.ca/sites/default/files/default_images/no-image-available.png';
  }
}

let items = {
  bindings: {
    list: '<',
    getUrlCallback: '&'
  },
  controller: ItemsController,
  templateUrl: template
};

export default items