class CollectionResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/collections/:id`, { id: '@id', locale: '@locale' }, {
        get: { method: 'GET' },
        search: { method: 'POST', url: `${env.getApiUrl()}/:locale/api/collections/search` }//,
        // getTopCollection: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/collections/get_top_collection` }
    });
  }
}

export default CollectionResource