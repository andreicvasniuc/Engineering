class ProductController {
  constructor(productService) {
    //console.log('product controller', productService);
    this.productList = productService.getList();
  }

  addProduct(){
    console.log('add product');
  }
}

export default ProductController