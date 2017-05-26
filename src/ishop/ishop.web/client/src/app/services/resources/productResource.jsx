class ProductResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/collections/:collectionId/products/:id`, { collectionId: '@collectionId', id: '@id', locale: '@locale' });
  }
}

export default ProductResource