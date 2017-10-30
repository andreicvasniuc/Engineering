class ProductRouter {
  constructor($routeParams, router, routeUrls) {
    this.$routeParams = $routeParams;
    this.router = router;
    this.routeUrls = routeUrls;

    this.paramMasks = {
      id: ':id'
    };
  }

  getUrl(product) {
    return '/#' + this.routeUrls.dress.replace(this.paramMasks.id, product._id.$oid)
  }
}

export default ProductRouter