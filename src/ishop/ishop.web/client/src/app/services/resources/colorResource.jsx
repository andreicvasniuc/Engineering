class ColorResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/api/colors/:id`, { id: '@id', locale: '@locale' }, {
      list: { method: 'GET', url: `${env.getApiUrl()}/:locale/api/colors/list`, cache: true }
    });
  }
}

export default ColorResource