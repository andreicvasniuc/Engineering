class ProductRouter {
  constructor($routeParams, router) {
    this.$routeParams = $routeParams;
    this.router = router;

    this.paramMasks = {
      collectionId: ':collectionId'
    };
  }

  initialize(sortByEnum, defaultSortByEnumItem, defaultSortByDirectionEnumItem) {
    this.router.initialize(sortByEnum, defaultSortByEnumItem, defaultSortByDirectionEnumItem);
  }

  getCollectionId() {
    return this.$routeParams.collectionId;
  }

  getSortAndSearch() {
    return this.router.getSortAndSearch();
  }

  goTo(url, collectionId) {
    url = url.replace(this.paramMasks.collectionId, collectionId);
    this.router.goTo(url);
  }

  goToSearchPage(url, collectionId, sortBy, sortByDirection, searchText) {
    url = url.replace(this.paramMasks.collectionId, collectionId);
    this.router.goToSearchPage(url, sortBy, sortByDirection, searchText);
  }
}

export default ProductRouter