class CollectionService {
  constructor(collectionResource, localeService) {
    this.collectionResource = collectionResource;
    this.localeService = localeService;
  }

  search(request, successCallback, errorCallback){
    request.locale = this.localeService.get();
    this.collectionResource.search(request, successCallback, errorCallback);
  }

  list(successCallback, errorCallback){
    this.collectionResource.list({ locale: this.localeService.get() }, successCallback, errorCallback);
  }

  get(id, successCallback, errorCallback) {
    this.collectionResource.get({ id: id, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  add(collection, successCallback, errorCallback) {
    this.collectionResource.save({ collection: collection, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  edit(collection, successCallback, errorCallback) {
    this.collectionResource.update({ id: collection._id.$oid, collection: collection, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  delete(collection, successCallback, errorCallback){
    this.collectionResource.remove({ id: collection._id.$oid, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  uploadImage(collection, successCallback, errorCallback){
    this.collectionResource.uploadImage({ id: collection._id.$oid, image: collection.image, locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default CollectionService