class CollectionResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/admin/collections/:id`, { id: '@id', locale: '@locale' }, {
        get: { method: 'GET' },
        update: { method: 'PUT' },
        search: { method: 'POST', url: `${env.getApiUrl()}/:locale/admin/collections/search` },
        list: { method: 'GET', url: `${env.getApiUrl()}/:locale/admin/collections/list` },
        uploadImage: { method: 'POST', url: `${env.getApiUrl()}/:locale/admin/collections/:id/upload_image` }
    });
  }
}

export default CollectionResource