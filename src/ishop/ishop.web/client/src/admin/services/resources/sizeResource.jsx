class SizeResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/admin/sizes/:id`, { id: '@id', locale: '@locale' }, {
      update: { method: 'PUT' },
      list: { method: 'GET', url: `${env.getApiUrl()}/:locale/admin/sizes/list`, cache: true }
    });
  }
}

export default SizeResource