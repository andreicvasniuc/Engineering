class ProductService {
  constructor(productResource, requestService, productRouter) {
    this.productResource = productResource;
    this.requestService = requestService;
    this.productRouter = productRouter;
  }

  search(request, successCallback, errorCallback){
    request.collectionId = this.productRouter.getCollectionId();
    this.productResource.search(request, successCallback, errorCallback);
  }

  get(product, successCallback, errorCallback) {
    this.productResource.get({ id: product._id.$oid, collectionId: this.productRouter.getCollectionId() }, successCallback, errorCallback);
  }

  add(product, successCallback, errorCallback){
    this.productResource.save({ product: product, collectionId: this.productRouter.getCollectionId() }, successCallback, errorCallback);
  }

  edit(product, successCallback, errorCallback){
    this.productResource.update({ id: product._id.$oid, product: product, collectionId: this.productRouter.getCollectionId() }, successCallback, errorCallback);
  }

  delete(product, successCallback, errorCallback){
    this.productResource.remove({ id: product._id.$oid, collectionId: this.productRouter.getCollectionId() }, successCallback, errorCallback);
  }
}

export default ProductService