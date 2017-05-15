class SizeService {
  constructor(sizeResource, localeService) {
    this.sizeResource = sizeResource;
    this.localeService = localeService;
  }

  list(successCallback, errorCallback){
    this.sizeResource.list({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  add(size, successCallback, errorCallback) {
    this.sizeResource.save({ size: size, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  edit(size, successCallback, errorCallback) {
    this.sizeResource.update({ id: size._id.$oid, size: size, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  delete(size, successCallback, errorCallback){
    this.sizeResource.remove({ id: size._id.$oid, locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default SizeService