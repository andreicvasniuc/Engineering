class CollectionResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/collections/:id`, { id: '@id', locale: '@locale' }, {
        get: { method: 'GET' },
        search: { method: 'POST', url: `${env.getApiUrl()}/:locale/api/collections/search` },
        list: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/collections/list` }
    });
  }
}

export default CollectionResource