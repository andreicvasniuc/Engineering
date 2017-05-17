class ColorResource {
  constructor($resource, env) {
    return $resource(`${env.getApiUrl()}/:locale/admin/colors/:id`, { id: '@id', locale: '@locale' }, {
      update: { method: 'PUT' },
      list: { method: 'GET', url: `${env.getApiUrl()}/:locale/admin/colors/list`, cache: true }
    });
  }
}

export default ColorResource