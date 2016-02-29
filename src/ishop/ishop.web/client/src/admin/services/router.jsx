class RouterService {
  constructor($location) {
    this.location = $location;
  }

  goTo(url) {
    this.location.url(url);
  }
}

export default RouterService