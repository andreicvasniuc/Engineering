class ProductController {
  constructor($scope, $rootScope, productService) {
    this.$rootScope = $rootScope;
    this.productService = productService;

    this.loadProductList();
    $scope.$on('reloadGrid', () => { this.loadProductList(); });
  }

  loadProductList(){
    this.isLoadingSpinner = true;
    this.productList = this.productService.getList(
      () => { this.isLoadingSpinner = false; }, 
      () => { console.log('error'); });
  }



  addProduct(){
    this.$rootScope.$broadcast('openProductEditorPopup');
  }
}

export default ProductController