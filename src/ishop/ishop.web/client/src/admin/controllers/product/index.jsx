class ProductController {
  constructor(productService) {
    //console.log('product controller', productService);
    this.productList = productService.getList();
  }
}

export default ProductController