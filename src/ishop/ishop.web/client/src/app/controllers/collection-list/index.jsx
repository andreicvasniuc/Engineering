class CollectionListController {
  constructor($timeout, $translate, collectionResolver, collectionRouter, titleTranslateId) {
    this.$timeout = $timeout;
    this.collectionResolver = collectionResolver;
    this.collectionRouter = collectionRouter;

    $translate(titleTranslateId).then((translation) => this.title = translation);

    this.loadCollections();
  }

  loadCollections() {
    this.isLoadingSpinner = true;

    this.collectionResolver.$promise.then((response) => {
      this.collections = response.collections || [];
      if(this.collections.length == 1) this.goToCollection(this.collections[0]);
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }

  goToCollection(collection) {
    this.collectionRouter.goTo(collection.slug);
  }

  getCollectionUrl(collection) {
    return this.collectionRouter.getUrl(collection.slug);
  }

  getImageSource(collection) {
    return collection.image && collection.image.url;
  }
}

export default CollectionListController