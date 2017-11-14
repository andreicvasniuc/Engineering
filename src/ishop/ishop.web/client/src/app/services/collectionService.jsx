class CollectionService {
  constructor(collectionResource, localeService) {
    this.collectionResource = collectionResource;
    this.localeService = localeService;
  }

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