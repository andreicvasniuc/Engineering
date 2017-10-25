import template from './template.html';

class TopProductsController {
  constructor($timeout, productService, productRouter) {
    this.$timeout = $timeout;
    this.productService = productService;
    this.productRouter = productRouter;

    this.loadTopProducts();
  }

  loadTopProducts() {
    this.isLoadingSpinner = true;

    this.productService.topList((response) => {
      this.products = response.products || [];
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }

  getProductUrl(product) {
    return this.productRouter.getUrl(product);
  }

  getCoverImageSource(product) {
    return product.cover_image && product.cover_image.url;
  }
}

let topProducts = {
  bindings: {},
  controller: TopProductsController,
  templateUrl: template
};

export default topProducts