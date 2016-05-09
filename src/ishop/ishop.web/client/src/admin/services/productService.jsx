class ProductService {
  constructor($resource) {
    return $resource('http://localhost:3000/api/products/:id', { id: '@id' }, {
        update: { method: 'PUT' }//,
        //synchronize: { method: 'POST', url: '/api/values/synchronize' }
    });
  }

  getList(){
    //console.log('get products in service');
    return this.productList;
  }
}

export default ProductService