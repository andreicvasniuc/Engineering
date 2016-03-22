class ProductService {
  constructor() {
    //console.log('requestService',requestService);

    this.productList = [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'},
        {id: 4, name: 'Product 4'},
        {id: 5, name: 'Product 5'}
    ];
  }

  getList(){
    //console.log('get products in service');
    return this.productList;
  }
}

export default ProductService