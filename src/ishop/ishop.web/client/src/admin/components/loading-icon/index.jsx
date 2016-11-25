import loading from 'images/loading.gif';

class LoadingIconController {
  constructor() {
    this.loading = loading;
  }
}

let loadingIcon = {
  bindings: {
  },
  controller: LoadingIconController,
  template: '<img alt="Loading Spinner" ng-src="{{$ctrl.loading}}"/>'
};

export default loadingIcon
