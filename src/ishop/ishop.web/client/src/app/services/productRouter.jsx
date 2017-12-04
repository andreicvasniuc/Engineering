class ProductRouter {
  constructor($routeParams, router, routeUrls) {
    this.$routeParams = $routeParams;
    this.router = router;
    this.routeUrls = routeUrls;

    this.paramMasks = {
      product: ':product'
    };
  }

  getUrl(productId) {
    return this.routeUrls.product.replace(this.paramMasks.product, productId)
  }

  getId() {
    return this.$routeParams.product;
  }
}

export default ProductRouter