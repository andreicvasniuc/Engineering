class CollectionRouter {
  constructor($routeParams, productRouter, router, routeUrls) {
    this.$routeParams = $routeParams;
    this.productRouter = productRouter;
    this.router = router;
    this.routeUrls = routeUrls;

    this.paramMasks = {
      collection: ':collection'
    };
  }

  getUrl(collectionId) {
    return this.getCollectionUrl(collectionId);
  }

  getCollectionUrl(collectionId) {
    return this.routeUrls.collection.replace(this.paramMasks.collection, collectionId);
  }

  getProductUrl(collectionId, productId) {
    return this.productRouter.getUrl(productId).replace(this.paramMasks.collection, collectionId);
  }

  getId() {
    return this.$routeParams.collection;
  }

  getProductId() {
    return this.productRouter.getId();
  }

  goTo(collectionId) {
    let url = this.getCollectionUrl(collectionId);
    this.router.goTo(url);
  }
}

export default CollectionRouter