class CollectionResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/collections/:id`, { id: '@id', locale: '@locale' }, {
        get: { method: 'GET', cache : true },
        // search: { method: 'POST', url: `${env.getApiUrl()}/:locale/api/collections/search` },
        dresses: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/collections/dresses`, cache : true },
        accessories: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/collections/accessories`, cache : true }
    });
  }
}

export default CollectionResource