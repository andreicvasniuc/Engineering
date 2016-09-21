class ImageService {
  constructor(imageResource) {
    this.imageResource = imageResource;
  }

  makeCover(product_id, image, successCallback, errorCallback){
    this.imageResource.makeCover({ product_id: product_id, id: image._id.$oid }, successCallback, errorCallback);
  }

  delete(product_id, image, successCallback, errorCallback){
    this.imageResource.remove({ product_id: product_id, id: image._id.$oid }, successCallback, errorCallback);
  }
}

export default ImageService