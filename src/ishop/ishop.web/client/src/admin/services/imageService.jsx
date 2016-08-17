class ImageService {
  constructor(imageResource) {
    this.imageResource = imageResource;
  }

  make_cover(product_id, image, successCallback, errorCallback){
    this.imageResource.make_cover({ product_id: product_id, id: image._id.$oid }, successCallback, errorCallback);
  }

  delete(product_id, image, successCallback, errorCallback){
    this.imageResource.remove({ product_id: product_id, id: image._id.$oid }, successCallback, errorCallback);
  }
}

export default ImageService