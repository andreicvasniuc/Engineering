class ProductController {
  constructor($scope, $rootScope, productService, router, routeUrls, uiGridConstants) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.productService = productService;
    this.router = router;
    this.routeUrls = routeUrls;

    this.initialize();
    this.initializeSorting(uiGridConstants);
    this.loadProductList();

    $scope.$on('reloadGrid', () => this.reloadGrid());
    $scope.$on('loadMoreData', () => this.loadMoreData());
    $scope.$on('executeSorting', (event, sortByOptions) => this.executeSearch(sortByOptions));
  }

  initialize() {
    this.start = 1;
    this.range = 10;
    this.offset = 0;
    this.productList = [];
  }

  initializeSorting(uiGridConstants) {
    this.sortByEnum = { code: 'code', published: 'published', updated_at: 'updated_at' };
    this.router.initialize(this.sortByEnum, this.sortByEnum.updated_at, uiGridConstants.DESC);

    [this.sortBy, this.sortByDirection, this.searchText] = this.router.getSortAndSearch();
  }

  loadProductList(successCallback) {
    this.isLoadingSpinner = true;

    let request = {
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

    this.productService.getList(request,
      (response) => {
        this.productList = this.productList.concat(response.productList);
        this.totalCount = response.totalCount;
        this.isLoadingSpinner = false;
        if(successCallback) successCallback();
      }, 
      () => { console.log('error'); });
  }

  reloadProductList() {
    this.loadProductList(() => this.$scope.$broadcast('moreDataLoaded'));
  }

  reloadGrid() {
    this.initialize();
    this.reloadProductList();
  }

  loadMoreData() {
    this.start += 1;
    this.offset = (this.start - 1) * this.range;

    if (this.offset >= this.totalCount) return;

    this.reloadProductList();
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
    this.router.goToSearchPage(this.routeUrls.products_search, this.sortBy, this.sortByDirection, this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.search();
  }
}

export default ProductController