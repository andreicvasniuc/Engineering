class SizeResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/sizes/:id`, { id: '@id', locale: '@locale' }, {
      list: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/sizes/list`, cache: true }
    });
  }
}

export default SizeResource