class ButtonDefaultController {
  constructor() {
  }
}

let buttonDefault = {
  bindings: {
    label: '@',
    isDisabled: '=',
    clickCallback: '&',
    tabIndex: '='
  },
  controller: ButtonDefaultController,
  template: `<span>
      <button-spinner label="{{$ctrl.label}}" click-callback="$ctrl.clickCallback({event: event})" is-spinner-hidden="true" is-disabled="$ctrl.isDisabled" tabindex="{{$ctrl.tabIndex}}">
      </button-spinner>
    </span>`
};

export default buttonDefault
