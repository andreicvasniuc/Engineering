class CollectionProductController {
  constructor($scope, $rootScope, productService, productRouter, routeUrls, uiGridConstants) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.productService = productService;
    this.productRouter = productRouter;
    this.routeUrls = routeUrls;

    this.initialize();
    this.initializeSorting(uiGridConstants);
    this.loadProducts();

    $scope.$on('reloadGrid', () => this.reloadGrid());
    $scope.$on('loadMoreData', () => this.loadMoreData());
    $scope.$on('executeSorting', (event, sortByOptions) => this.executeSearch(sortByOptions));
  }

  initialize() {
    this.start = 1;
    this.range = 10;
    this.offset = 0;
    this.products = [];
  }

  initializeSorting(uiGridConstants) {
    this.sortByEnum = { code: 'code', published: 'published', updated_at: 'updated_at' };
    this.productRouter.initialize(this.sortByEnum, this.sortByEnum.updated_at, uiGridConstants.DESC);

    [this.sortBy, this.sortByDirection, this.searchText] = this.productRouter.getSortAndSearch();
  }

  loadProducts(successCallback) {
    this.isLoadingSpinner = true;

    let request = {
      collectionId: this.productRouter.getCollectionId(),
      pagination: {
        skip: this.offset,
        take: this.range
      },
      sorting: {
        field: this.sortBy,
        direction: this.sortByDirection
      },
      search: this.searchText
    };

    this.productService.search(request,
      (response) => {
        this.products = this.products.concat(response.products);
        this.totalCount = response.totalCount;
        this.isLoadingSpinner = false;
        if(successCallback) successCallback();
      }, 
      () => { console.log('error'); });
  }

  reloadProducts() {
    this.loadProducts(() => this.$scope.$broadcast('moreDataLoaded'));
  }

  reloadGrid() {
    this.initialize();
    this.reloadProducts();
  }

  loadMoreData() {
    this.start += 1;
    this.offset = (this.start - 1) * this.range;

    if (this.offset >= this.totalCount) return;

    this.reloadProducts();
  }

  executeSearch(sortByOptions) {
    this.sortBy = sortByOptions.sortBy;
    this.sortByDirection = sortByOptions.sortByDirection;

    this.search();
  }

  addProduct() {
    this.$rootScope.$broadcast('openProductEditorPopup');
  }

  search() {
    this.productRouter.goToSearchPage(this.routeUrls.products_search, this.sortBy, this.sortByDirection, this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.search();
  }
}

export default CollectionProductController