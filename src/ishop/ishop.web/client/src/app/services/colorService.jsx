class ColorService {
  constructor(colorResource, localeService) {
    this.colorResource = colorResource;
    this.localeService = localeService;
  }

  list(successCallback, errorCallback){
    this.colorResource.list({ locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ColorService