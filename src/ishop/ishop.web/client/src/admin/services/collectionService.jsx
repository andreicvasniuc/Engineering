class CollectionService {
  constructor(collectionResource) {
    this.collectionResource = collectionResource;
  }

  search(request, successCallback, errorCallback){
    this.collectionResource.search(request, successCallback, errorCallback);
  }

  get(collection, successCallback, errorCallback) {
    this.collectionResource.get({ id: collection._id.$oid }, successCallback, errorCallback);
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