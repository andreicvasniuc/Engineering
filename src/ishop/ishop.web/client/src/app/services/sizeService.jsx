class SizeService {
  constructor(sizeResource, localeService) {
    this.sizeResource = sizeResource;
    this.localeService = localeService;
  }

  list(successCallback, errorCallback){
    this.sizeResource.list({ locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default SizeService