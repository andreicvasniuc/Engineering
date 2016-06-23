class ProductService {
  constructor(productResource) {
    this.productResource = productResource;
  }

  getList(successCallback, errorCallback){
    return this.productResource.query(successCallback, errorCallback);
  }

  save(product, successCallback, errorCallback){
    this.productResource.save({ product: product }, successCallback, errorCallback);
  }

  get(id, successCallback, errorCallback) {
    this.productResource.get({ id: id }, successCallback, errorCallback);
  }
}

export default ProductService