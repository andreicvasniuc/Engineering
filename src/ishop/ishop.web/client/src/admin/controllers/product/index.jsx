class ProductController {
  constructor($scope, $rootScope, productService, router, sortByDirectionEnum) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.productService = productService;
    this.router = router;

    this.initializeScrolling();
    this.initializeSorting(sortByDirectionEnum);
    this.loadProductList();

    $scope.$on('reloadGrid', () => this.loadProductList());
    $scope.$on('loadMoreData', () => this.loadMoreData());
  }

  initializeScrolling() {
    this.start = 1;
    this.range = 5;
    this.offset = 0;
  }

  initializeSorting(sortByDirectionEnum) {
    this.sortByEnum = { code: 0, published: 1, updated_at: 2 };
    this.router.initialize(this.sortByEnum, this.sortByEnum.updated_at, sortByDirectionEnum.descending);

    [this.sortBy, this.sortByDirection, this.searchText] = this.router.getSortAndSearch();
  }

  loadProductList(successCallback) {
    this.isLoadingSpinner = true;

    let request = {
      skip: this.offset,
      take: this.range
    };

    this.productList = this.productService.getList(request,
      () => { 
        this.isLoadingSpinner = false;
        if(successCallback) successCallback();
      }, 
      () => { console.log('error'); });
  }

  loadMoreData() {
    this.start += 1;
    this.offset = (this.start - 1) * this.range;

    // totalCount ????
    if (this.offset >= this.totalCount) return;

    loadProductList(() => this.$scope.$broadcast(moreDataLoaded));
  }

  addProduct() {
    this.$rootScope.$broadcast('openProductEditorPopup');
  }
}

export default ProductController