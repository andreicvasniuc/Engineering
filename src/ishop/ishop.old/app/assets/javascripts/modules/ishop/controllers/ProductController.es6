class ProductController {
  constructor(productService) {
    this.title = 'Product List';

    this.productService = productService;
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
    //console.log(this.productService, this.products);
  }
}

export { ProductController }