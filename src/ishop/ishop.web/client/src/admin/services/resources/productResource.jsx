class ProductResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/admin/products/:id`, { id: '@id' }, {
        update: { method: 'PUT' },
        list: { method: 'POST', url: `${env.getApiUrl()}/admin/products/list` }
        //synchronize: { method: 'POST', url: '/api/values/synchronize' }
    });
  }
}

export default ProductResource