import './style.styl';

import template from './template.html';

class TopProductsController {
  constructor(productService) {
    this.productService = productService;

    this.loadTopProducts();
  }

  loadTopProducts() {
    this.isLoadingSpinner = true;

    this.productService.topList((response) => {
      this.products = response.products || [];
      this.isLoadingSpinner = false;
    });
  }
}

let topProducts = {
  bindings: {},
  controller: TopProductsController,
  templateUrl: template
};

export default topProducts