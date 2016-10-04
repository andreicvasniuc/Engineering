class ProductResource {
  constructor($resource) {
    return $resource('http://localhost:3000/admin/products/:id', { id: '@id' }, {
        update: { method: 'PUT' },
        list: { method: 'POST', url: 'http://localhost:3000/admin/products/list' }
        //synchronize: { method: 'POST', url: '/api/values/synchronize' }
    });
  }
}

export default ProductResource