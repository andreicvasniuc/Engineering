class ProductController {
  constructor(productService) {
    //console.log('product controller', productService);
    this.productList = productService.productList;
  }
}

export default ProductController