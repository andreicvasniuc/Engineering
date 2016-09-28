import $ from 'jquery';

class RouterService {
  constructor($location, $routeParams, sortByDirectionEnum) {
    this.$location = $location;
    this.$routeParams = $routeParams;
    this.sortByDirectionEnum = sortByDirectionEnum;

    this.paramMasks = {
      sortBy: ':sortBy',
      sortByDirection: ':sortByDirection',
      searchText: ':searchText?'
    };
  }

  initialize(sortByEnum, defaultSortByEnumItem, defaultSortByDirectionEnumItem) {
    this.sortByEnum = sortByEnum;
    this.defaultSortByEnumItem = defaultSortByEnumItem;
    this.defaultSortByDirectionEnumItem = defaultSortByDirectionEnumItem || this.sortByDirectionEnum.ascending;
    this.sortByEnumItems = this.createArrayFromObject(sortByEnum);
  }

  getSortByDirection() {
    return this.$routeParams.sortByDirection ? this.sortByDirectionEnum[this.$routeParams.sortByDirection] : this.defaultSortByDirectionEnumItem;
  }

  getSortBy() {
      return this.$routeParams.sortBy ? this.sortByEnum[this.$routeParams.sortBy] : this.defaultSortByEnumItem;
  }

  getSearchText() {
      return this.$routeParams.searchText || '';
  }

  getSortAndSearch() {
    return [this.getSortBy(), this.getSortByDirection(), this.getSearchText()];
  }

  createArrayFromObject(object) {
    return $.map(object, function (value, key) { return { key: key, value: value }; });
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
}

export default RouterService