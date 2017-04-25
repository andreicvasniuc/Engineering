class CollectionResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/admin/collections/:id`, { id: '@id' }, {
        get: { method: 'GET', cache: true },
        update: { method: 'PUT' },
        search: { method: 'POST', url: `${env.getApiUrl()}/admin/collections/search` },
        list: { method: 'GET', url: `${env.getApiUrl()}/admin/collections/list` }
    });
  }
}

export default CollectionResource