class ProductService {
  constructor(productResource, requestService, productRouter, localeService) {
    this.productResource = productResource;
    this.requestService = requestService;
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

  add(product, successCallback, errorCallback){
    this.productResource.save({ product: product, collectionId: this.productRouter.getCollectionId(), locale: this.localeService.get() }, successCallback, errorCallback);
  }

  edit(product, successCallback, errorCallback){
    this.productResource.update({ id: product._id.$oid, product: product, collectionId: this.productRouter.getCollectionId(), locale: this.localeService.get() }, successCallback, errorCallback);
  }

  delete(product, successCallback, errorCallback){
    this.productResource.remove({ id: product._id.$oid, collectionId: this.productRouter.getCollectionId(), locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ProductService