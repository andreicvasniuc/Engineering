class ProductResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/collections/:collectionId/products/:id`, { collectionId: '@collectionId', id: '@id', locale: '@locale' }, {
        topList: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/products/top_list` }
    });
  }
}

export default ProductResource