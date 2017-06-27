class ProductService {
  constructor(productResource, productRouter, localeService) {
    this.productResource = productResource;
    this.productRouter = productRouter;
    this.localeService = localeService;
  }

  // search(request, successCallback, errorCallback){
  //   request.collectionId = this.productRouter.getCollectionId();
  //   request.locale = this.localeService.get();
  //   this.productResource.search(request, successCallback, errorCallback);
  // }

  get(product, successCallback, errorCallback) {
    this.productResource.get({ id: product._id.$oid, collectionId: this.productRouter.getCollectionId(), locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ProductService