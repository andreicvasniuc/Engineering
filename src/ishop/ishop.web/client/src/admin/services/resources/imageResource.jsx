class ImageResource {
  constructor($resource) {
    return $resource('http://localhost:3000/admin/products/:product_id/images/:id', { product_id: '@product_id', id: '@id' }, {
        //make_cover: { method: 'PUT' }
        makeCover: { method: 'PUT', url: 'http://localhost:3000/admin/products/:product_id/images/:id/make_cover' }
    });
  }
}

export default ImageResource