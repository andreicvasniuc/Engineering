class SizeService {
  constructor(sizeResource) {
    this.sizeResource = sizeResource;
  }

  list(successCallback, errorCallback){
    this.sizeResource.list({}, successCallback, errorCallback);
  }

  add(size, successCallback, errorCallback) {
    this.sizeResource.save({ size: size }, successCallback, errorCallback);
  }

  edit(size, successCallback, errorCallback) {
    this.sizeResource.update({ id: size._id.$oid, size: size }, successCallback, errorCallback);
  }

  delete(size, successCallback, errorCallback){
    this.sizeResource.remove({ id: size._id.$oid }, successCallback, errorCallback);
  }
}

export default SizeService