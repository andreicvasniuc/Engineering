class ProductController {
  constructor($scope, $rootScope, productService, router, sortByDirectionEnum) {
    this.$rootScope = $rootScope;
    this.productService = productService;
    this.router = router;

    this.initSorting(sortByDirectionEnum);
    this.loadProductList();
    $scope.$on('reloadGrid', () => { this.loadProductList(); });
  }

  initSorting(sortByDirectionEnum) {
    this.sortByEnum = { code: 0, published: 1, updated_at: 2 };
    this.router.initialize(this.sortByEnum, this.sortByEnum.updated_at, sortByDirectionEnum.descending);

    [this.sortBy, this.sortByDirection, this.searchText] = this.router.getSortAndSearch();
  }

  loadProductList() {
    this.isLoadingSpinner = true;
    this.productList = this.productService.getList(
      () => { this.isLoadingSpinner = false; }, 
      () => { console.log('error'); });
  }

  addProduct() {
    this.$rootScope.$broadcast('openProductEditorPopup');
  }
}

export default ProductController