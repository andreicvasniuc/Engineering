class ProductService {
  constructor(requestService) {
    console.log('requestService',requestService);

    this.products = [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'},
        {id: 4, name: 'Product 4'},
        {id: 5, name: 'Product 5'}
    ];
  }

  getProducts(){
    //console.log('get products in service');
    return this.products;
  }
}

export { ProductService }