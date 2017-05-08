class ProductResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/:id`, { collectionId: '@collectionId', id: '@id' }, {
        update: { method: 'PUT' },
        search: { method: 'POST', url: `${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/search` }
        //synchronize: { method: 'POST', url: '/api/values/synchronize' }
    });
  }
}

export default ProductResource