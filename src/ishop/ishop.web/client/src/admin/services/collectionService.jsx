class CollectionService {
  constructor(collectionResource) {
    this.collectionResource = collectionResource;
  }

  search(request, successCallback, errorCallback){
    this.collectionResource.search(request, successCallback, errorCallback);
  }

  list(successCallback, errorCallback){
    this.collectionResource.list({}, successCallback, errorCallback);
  }

  get(id, successCallback, errorCallback) {
    this.collectionResource.get({ id: id }, successCallback, errorCallback);
  }

  add(collection, successCallback, errorCallback) {
    this.collectionResource.save({ collection: collection }, successCallback, errorCallback);
  }

  edit(collection, successCallback, errorCallback) {
    this.collectionResource.update({ id: collection._id.$oid, collection: collection }, successCallback, errorCallback);
  }

  delete(collection, successCallback, errorCallback){
    this.collectionResource.remove({ id: collection._id.$oid }, successCallback, errorCallback);
  }
}

export default CollectionService