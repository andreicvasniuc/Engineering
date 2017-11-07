class CollectionService {
  constructor(collectionResource, localeService) {
    this.collectionResource = collectionResource;
    this.localeService = localeService;
  }

  // search(request, successCallback, errorCallback){
  //   request.locale = this.localeService.get();
  //   this.collectionResource.search(request, successCallback, errorCallback);
  // }

  get(id, successCallback, errorCallback) {
    return this.collectionResource.get({ locale: this.localeService.get(), id: id }, successCallback, errorCallback);
  }

  dresses(successCallback, errorCallback) {
    return this.collectionResource.dresses({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  accessories(successCallback, errorCallback) {
    return this.collectionResource.accessories({ locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default CollectionService