class ProductController {
  constructor($rootScope, productService) {
    //console.log('product controller', productService);
    this.$rootScope = $rootScope;
    this.productService = productService;

    this.loadProductList();
  }

  loadProductList(){
    this.productList = [];
    return;
    
    this.isLoadingSpinner = true;
    this.productList = this.productService.query(() => {
       this.isLoadingSpinner = false;
    });
  }

  addProduct(){
    this.$rootScope.$broadcast('openProductEditorPopup');
  }
}

export default ProductController