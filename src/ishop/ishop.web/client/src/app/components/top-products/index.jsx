import template from './template.html';

class TopProductsController {
  constructor($timeout, productService) {
    this.$timeout = $timeout;
    this.productService = productService;

    this.loadTopProducts();
  }

  loadTopProducts() {
    this.isLoadingSpinner = true;

    this.productService.topList((response) => {
      this.products = response.products || [];
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }
}

let topProducts = {
  bindings: {},
  controller: TopProductsController,
  templateUrl: template
};

export default topProducts