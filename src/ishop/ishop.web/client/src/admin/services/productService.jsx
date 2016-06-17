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
}

export default ProductService