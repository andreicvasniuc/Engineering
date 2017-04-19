class ImageResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/admin/collections/:collectionId/products/:productId/images/:id`, { collectionId: '@collectionId', productId: '@productId', id: '@id' }, {
        //make_cover: { method: 'PUT' }
        makeCover: { method: 'PATCH', url: `${env.getApiUrl()}/admin/collections/:collectionId/products/:productId/images/:id/make_cover` }
    });
  }
}

export default ImageResource