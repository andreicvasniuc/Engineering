class RouterService {
  constructor($location) {
    this.location = $location;
  }

  goTo(url) {
    this.location.url(url);
  }

  getCurrentUrl() {
    return this.location.url();
  }
}

export default RouterService