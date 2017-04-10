class ProductService {
  constructor(productResource, requestService) {
    this.productResource = productResource;
    this.requestService = requestService;
  }

  search(request, successCallback, errorCallback){
    this.productResource.search(request, successCallback, errorCallback);
  }

  get(product, successCallback, errorCallback) {
    this.productResource.get({ id: product._id.$oid }, successCallback, errorCallback);
  }

  add(product, successCallback, errorCallback){
    this.productResource.save({ product: product }, successCallback, errorCallback);
  }

  edit(product, successCallback, errorCallback){
    this.productResource.update({ id: product._id.$oid, product: product }, successCallback, errorCallback);
  }

  delete(product, successCallback, errorCallback){
    this.productResource.remove({ id: product._id.$oid }, successCallback, errorCallback);
  }
}

export default ProductService