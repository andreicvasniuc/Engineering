class CollectionController {
  constructor($timeout, collectionService, collectionRouter) {
    this.$timeout = $timeout;
    this.collectionService = collectionService;
    this.collectionRouter = collectionRouter;

    this.loadCollection();
  }

  loadCollection() {
    this.isLoadingSpinner = true;

    this.collectionService.get(this.collectionRouter.getId(), (response) => {
      this.collection = response.collection;
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }

  getProductUrl(product) {
    return this.collectionRouter.getProductUrl(this.collection.slug, product.slug);
  }

  getCoverProductImageSource(product) {
    return product.cover_image && product.cover_image.url;
  }
}

export default CollectionController