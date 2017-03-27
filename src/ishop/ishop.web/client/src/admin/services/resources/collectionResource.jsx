class CollectionResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/admin/collections/:id`, { id: '@id' }, {
        update: { method: 'PUT' },
        search: { method: 'POST', url: `${env.getApiUrl()}/admin/collections/search` },
        getPublishedList: { method: 'GET', url: `${env.getApiUrl()}/admin/collections/get_published_list` }
    });
  }
}

export default CollectionResource