class CollectionRouter {
  constructor($routeParams, router, routeUrls) {
    this.$routeParams = $routeParams;
    this.router = router;
    this.routeUrls = routeUrls;

    this.paramMasks = {
      id: ':id'
    };
  }

  getUrl(collection) {
    return '/#' + this.routeUrls.collection.replace(this.paramMasks.id, collection.slug)
  }
}

export default CollectionRouter