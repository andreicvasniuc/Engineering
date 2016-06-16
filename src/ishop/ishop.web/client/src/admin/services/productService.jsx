class ProductService {
  constructor(productResource) {
    this.productResource = productResource;
  }

  getList(successCallback, errorCallback){
    return this.productResource.query(successCallback, errorCallback);
  }

  save(product){
    this.productResource.save({ product: product });
  }
}

export default ProductService