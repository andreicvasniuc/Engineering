class ProductService {
  constructor(productResource, localeService) {
    this.productResource = productResource;
    this.localeService = localeService;
  }

  topList(successCallback, errorCallback) {
    this.productResource.topList({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  dresses(successCallback, errorCallback) {
    return this.productResource.dresses({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  accessories(successCallback, errorCallback) {
    return this.productResource.accessories({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  get(id, successCallback, errorCallback) {
    this.productResource.get({ id: id, locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ProductService