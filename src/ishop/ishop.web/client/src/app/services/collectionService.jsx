class CollectionService {
  constructor(collectionResource, localeService) {
    this.collectionResource = collectionResource;
    this.localeService = localeService;
  }

  search(request, successCallback, errorCallback){
    request.locale = this.localeService.get();
    this.collectionResource.search(request, successCallback, errorCallback);
  }
}

export default CollectionService