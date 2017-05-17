class CollectionProductController {
  constructor($scope, $rootScope, collectionService, productService, productRouter, routeUrls, uiGridConstants) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.collectionService = collectionService;
    this.productService = productService;
    this.productRouter = productRouter;
    this.routeUrls = routeUrls;
    this.uiGridConstants = uiGridConstants;

    this.initialize();
    this.initializeSorting();
    this.loadCollection();
    //this.loadProducts();

    $scope.$on('reloadGrid', () => this.reloadGrid());
    $scope.$on('loadMoreData', () => this.loadMoreData());
    $scope.$on('executeSorting', (event, sortByOptions) => this.executeSearch(sortByOptions));
  }

  initialize() {
    // this.start = 1;
    // this.range = 10;
    // this.offset = 0;
    this.products = [];
  }

  initializeSorting() {
    this.sortByEnum = { name: 'name', description: 'description', published: 'published', updated_at: 'updated_at' };
    this.productRouter.initialize(this.sortByEnum, this.sortByEnum.updated_at, this.uiGridConstants.DESC);

    [this.sortBy, this.sortByDirection, this.searchText] = this.productRouter.getSortAndSearch();
  }

  loadCollection() {
    this.isLoadingSpinner = true;

    this.collectionService.get(this.productRouter.getCollectionId(), (collection) => {
      this.collection = collection;
      this.products = this.searchProducts(collection.products);
      this.totalCount = this.products.length;
      this.isLoadingSpinner = false;
    });
  }

  searchProducts(products) {
    if(!products) return [];

    if(this.searchText) {
      products = _.filter(products, (product) => product.name && product.name.indexOf(this.searchText) != -1);
    }

    products = _.sortBy(products, (product) => product[this.sortBy] && product[this.sortBy].toLowerCase && product[this.sortBy].toLowerCase());

    if (this.sortByDirection == this.uiGridConstants.DESC) {
        products = products.reverse();
    }

    return products;
  }

  // loadProducts(successCallback) {
  //   this.isLoadingSpinner = true;

  //   let request = {
  //     pagination: {
  //       skip: this.offset,
  //       take: this.range
  //     },
  //     sorting: {
  //       field: this.sortBy,
  //       direction: this.sortByDirection
  //     },
  //     search: this.searchText
  //   };

  //   this.productService.search(request,
  //     (response) => {
  //       this.products = this.products.concat(response.products);
  //       this.totalCount = response.totalCount;
  //       this.isLoadingSpinner = false;
  //       if(successCallback) successCallback();
  //     }, 
  //     () => { console.log('error'); });
  // }

  // reloadProducts() {
  //   this.loadProducts(() => this.$scope.$broadcast('moreDataLoaded'));
  // }

  reloadGrid() {
    this.loadCollection();
    //this.initialize();
    // this.reloadProducts();
  }

  loadMoreData() {
    // this.start += 1;
    // this.offset = (this.start - 1) * this.range;

    // if (this.offset >= this.totalCount) return;

    //this.reloadProducts();
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
    this.productRouter.goToSearchPage(this.routeUrls.collection_products_search, this.sortBy, this.sortByDirection, this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.search();
  }
}

export default CollectionProductController