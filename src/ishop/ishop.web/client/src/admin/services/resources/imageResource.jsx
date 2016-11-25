class ImageResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/admin/products/:product_id/images/:id`, { product_id: '@product_id', id: '@id' }, {
        //make_cover: { method: 'PUT' }
        makeCover: { method: 'PUT', url: `${env.getApiUrl()}/admin/products/:product_id/images/:id/make_cover` }
    });
  }
}

export default ImageResource