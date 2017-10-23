class ImageResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/:productId/images/:id`, { collectionId: '@collectionId', productId: '@productId', id: '@id', locale: '@locale' }, {
        //make_cover: { method: 'PUT' }
        makeCover: { method: 'PATCH', url: `${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/:productId/images/:id/make_cover` },
        upload: { method: 'POST', url: `${env.getApiUrl()}/:locale/admin/collections/:collectionId/products/:productId/images/upload` }
    });
  }
}

export default ImageResource