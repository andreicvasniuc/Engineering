class ProductResource {
  constructor($resource, envService) {
    return $resource(`${envService.getApiUrl()}/admin/products/:id`, { id: '@id' }, {
        update: { method: 'PUT' },
        list: { method: 'POST', url: `${envService.getApiUrl()}/admin/products/list` }
        //synchronize: { method: 'POST', url: '/api/values/synchronize' }
    });
  }
}

export default ProductResource