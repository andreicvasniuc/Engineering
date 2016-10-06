import $ from 'jquery';

class RouterService {
  constructor($location, $routeParams, uiGridConstants) {
    this.$location = $location;
    this.$routeParams = $routeParams;
    this.uiGridConstants = uiGridConstants;

    this.paramMasks = {
      sortBy: ':sortBy',
      sortByDirection: ':sortByDirection',
      searchText: ':searchText?'
    };
  }

  initialize(sortByEnum, defaultSortByEnumItem, defaultSortByDirectionEnumItem) {
    this.sortByEnum = sortByEnum;
    this.defaultSortByEnumItem = defaultSortByEnumItem;
    this.defaultSortByDirectionEnumItem = defaultSortByDirectionEnumItem || this.uiGridConstants.ASC;
    // this.sortByEnumItems = this.createArrayFromObject(sortByEnum);
    // this.sortByDirectionEnumItems = this.createArrayFromObject(this.sortByDirectionEnum);
  }

  getSortByDirection() {
    return this.$routeParams.sortByDirection ? this.uiGridConstants[this.$routeParams.sortByDirection.toUpperCase()] : this.defaultSortByDirectionEnumItem;
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

  // createArrayFromObject(object) {
  //   return $.map(object, function (value, key) { return { key: key, value: value }; });
  // }

  goTo(url) {
    this.$location.url(url);
  }

  goToSearchPage(url, sortBy, sortByDirection, searchText) {
    url = url.replace(this.paramMasks.sortBy, sortBy);
    url = url.replace(this.paramMasks.sortByDirection, sortByDirection);
    url = url.replace(this.paramMasks.searchText, searchText);
    this.goTo(url);
  }

  getCurrentUrl() {
    return this.$location.url();
  }

  doesUrlContain(url) {
    return this.getCurrentUrl().indexOf(url) != -1;
  }
}

export default RouterService