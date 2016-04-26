class ProductController {
  constructor($rootScope, productService) {
    //console.log('product controller', productService);
    this.$rootScope = $rootScope;
    this.productList = productService.getList();
  }

  addProduct(){
    this.$rootScope.$broadcast('openProductEditorPopup');
  }
}

export default ProductController