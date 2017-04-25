class SizeResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/admin/sizes/:id`, { id: '@id' }, {
      update: { method: 'PUT' },
      list: { method: 'GET', url: `${env.getApiUrl()}/admin/sizes/list` }
    });
  }
}

export default SizeResource