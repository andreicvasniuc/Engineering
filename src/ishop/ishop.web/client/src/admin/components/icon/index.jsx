class IconController {
  constructor() {
  }
}

let icon = {
  bindings: {
    alt: '@',
    source: '@',
    width: '@',
    height: '@'
  },
  controller: IconController,
  template: '<img alt="{{$ctrl.alt}}" ng-src="{{$ctrl.source}}" ng-style="{ width: $ctrl.width,  height: $ctrl.height }"/>'
};

export default icon
