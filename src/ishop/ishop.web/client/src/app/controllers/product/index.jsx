class ProductController {
  constructor($timeout, productService) {
    this.$timeout = $timeout;
    this.productService = productService;

    this.loadProducts();
  }

  loadProducts() {
    this.isLoadingSpinner = true;

    this.productService.list((response) => {
      this.products = response.products || [];
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }
}

export default ProductController