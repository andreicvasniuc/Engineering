class CollectionRouter {
  constructor($routeParams, productRouter, routeUrls) {
    this.$routeParams = $routeParams;
    this.productRouter = productRouter;
    this.routeUrls = routeUrls;

    this.paramMasks = {
      collection: ':collection'
    };
  }

  getUrl(collection) {
    return '/#' + this.routeUrls.collection.replace(this.paramMasks.collection, collection.slug)
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
}

export default CollectionRouter