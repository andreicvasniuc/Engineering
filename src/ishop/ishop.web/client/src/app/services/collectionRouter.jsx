class CollectionRouter {
  constructor($routeParams, router, routeUrls) {
    this.$routeParams = $routeParams;
    this.router = router;
    this.routeUrls = routeUrls;

    this.paramMasks = {
      id: ':id'
    };
  }

  getUrl(product) {
    let url = product.is_accessory ? this.routeUrls.accessory : this.routeUrls.dress;
    return '/#' + url.replace(this.paramMasks.id, product._id.$oid)
  }
}

export default CollectionRouter