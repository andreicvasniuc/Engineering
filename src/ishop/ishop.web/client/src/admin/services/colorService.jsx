class ColorService {
  constructor(colorResource, localeService) {
    this.colorResource = colorResource;
    this.localeService = localeService;
  }

  list(successCallback, errorCallback){
    this.colorResource.list({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  add(color, successCallback, errorCallback) {
    this.colorResource.save({ color: color, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  edit(color, successCallback, errorCallback) {
    this.colorResource.update({ id: color._id.$oid, color: color, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  delete(color, successCallback, errorCallback){
    this.colorResource.remove({ id: color._id.$oid, locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ColorService