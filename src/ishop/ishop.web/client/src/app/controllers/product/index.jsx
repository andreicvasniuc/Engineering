class ProductController {
  constructor($timeout, collectionService, collectionRouter) {
    this.$timeout = $timeout;
    this.collectionService = collectionService;
    this.collectionRouter = collectionRouter;

    this.loadCollection();
  }

  loadCollection() {
    this.isLoadingSpinner = true;

    this.collectionService.get(this.collectionRouter.getId(), (response) => {
      this.getProduct(response.collection);
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }

  getProduct(collection) {
    this.product = collection.products.find((product) => product.slug == this.collectionRouter.getProductId());
    if(!this.product) {
      // go to 404
    }
  }
}

export default ProductController