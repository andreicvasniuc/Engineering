class ImageService {
  constructor(imageResource, productRouter) {
    this.imageResource = imageResource;
    this.productRouter = productRouter;
  }

  makeCover(productId, image, successCallback, errorCallback){
    this.imageResource.makeCover({ collectionId: this.productRouter.getCollectionId(), productId: productId, id: image._id.$oid }, successCallback, errorCallback);
  }

  delete(productId, image, successCallback, errorCallback){
    this.imageResource.remove({ collectionId: this.productRouter.getCollectionId(), productId: productId, id: image._id.$oid }, successCallback, errorCallback);
  }
}

export default ImageService