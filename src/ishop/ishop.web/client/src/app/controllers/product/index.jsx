class ProductController {
  constructor($timeout, $translate, productResolver, titleTranslateId) {
    this.$timeout = $timeout;
    this.productResolver = productResolver;

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
}

export default ProductController