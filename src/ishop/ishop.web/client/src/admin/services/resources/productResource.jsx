class ProductResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/:id`, { collectionId: '@collectionId', id: '@id', locale: '@locale' }, {
        update: { method: 'PUT' }//,
        // search: { method: 'POST', url: `${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/search` }
    });
  }
}

export default ProductResource