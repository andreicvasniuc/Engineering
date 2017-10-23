class ImageService {
  constructor(imageResource, productRouter, localeService) {
    this.imageResource = imageResource;
    this.productRouter = productRouter;
    this.localeService = localeService;
  }

  upload(productId, image, successCallback, errorCallback){
    this.imageResource.upload({ collectionId: this.productRouter.getCollectionId(), productId: productId, image: image, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  makeCover(productId, image, successCallback, errorCallback){
    this.imageResource.makeCover({ collectionId: this.productRouter.getCollectionId(), productId: productId, id: image._id.$oid, locale: this.localeService.get() }, successCallback, errorCallback);
  }

  delete(productId, image, successCallback, errorCallback){
    this.imageResource.remove({ collectionId: this.productRouter.getCollectionId(), productId: productId, id: image._id.$oid, locale: this.localeService.get() }, successCallback, errorCallback);
  }
}

export default ImageService