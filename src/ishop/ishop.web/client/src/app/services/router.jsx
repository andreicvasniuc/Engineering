class Router {
  constructor($location, $routeParams) {
    this.$location = $location;
    this.$routeParams = $routeParams;
  }

  goTo(url) {
    this.$location.url(url);
  }

  getCurrentUrl() {
    return this.$location.url();
  }

  doesUrlContain(url) {
    return this.getCurrentUrl().indexOf(url) != -1;
  }

  getId() {
    return this.$routeParams.id;
  }
}

export default Router