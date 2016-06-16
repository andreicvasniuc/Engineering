class ProductController {
  constructor($rootScope, productService) {
    //console.log('product controller', productService);
    this.$rootScope = $rootScope;
    this.productService = productService;

    this.loadProductList();
  }

  loadProductList(){
    this.isLoadingSpinner = true;
    this.productList = this.productService.getList(
      () => {
       this.isLoadingSpinner = false;
      }, 
      () => {
        console.log('error');
      });
  }

  addProduct(){
    this.$rootScope.$broadcast('openProductEditorPopup');
  }
}

export default ProductController