class CollectionListController {
  constructor($timeout, $translate, collectionResolver, collectionRouter, titleTranslateId) {
    console.log(collectionResolver);
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
      this.$timeout(() => this.isLoadingSpinner = false, 50);
    });
  }

  getCollectionUrl(collection) {
    console.log('collection', collection);
    return 'collection';
    // return this.productRouter.getUrl(product);
  }
}

export default CollectionListController