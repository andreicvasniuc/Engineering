class ProductController {
  constructor($timeout, productService, router) {
    this.$timeout = $timeout;
    this.productService = productService;
    this.router = router;

    this.loadProduct();
  }

  loadProduct() {
    this.isLoadingSpinner = true;

    this.productService.get(this.router.getId(), (response) => {
      this.product = response.product;
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }
}

export default ProductController