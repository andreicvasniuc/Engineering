class ProductService {
  constructor(productResource, localeService) {
    this.productResource = productResource;
    this.localeService = localeService;
  }

  topList(successCallback, errorCallback) {
    this.productResource.topList({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  list(successCallback, errorCallback) {
    this.productResource.list({ locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ProductService