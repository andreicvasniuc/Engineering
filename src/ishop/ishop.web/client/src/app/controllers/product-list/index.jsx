class ProductListController {
  constructor($timeout, $translate, productResolver, productRouter, titleTranslateId) {
    this.$timeout = $timeout;
    this.productResolver = productResolver;
    this.productRouter = productRouter;

    $translate(titleTranslateId).then((translation) => this.title = translation);

    this.loadProducts();
  }

  loadProducts() {
    this.isLoadingSpinner = true;

    this.productResolver.$promise.then((response) => {
      this.products = response.products || [];
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }

  getProductUrl(product) {
    return this.productRouter.getUrl(product);
  }
}

export default ProductListController