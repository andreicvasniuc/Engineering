class ProductResource {
  constructor($resource) {
    return $resource('http://localhost:3000/admin/products/:id', { id: '@id' }, {
        update: { method: 'PUT' }//,
        //synchronize: { method: 'POST', url: '/api/values/synchronize' }
    });
  }
}

export default ProductResource