import template from './template.html';

class ButtonSpinnerController {
  constructor() {
  }
}

let buttonSpinner = {
  bindings: {
    label: '@',
    isLoadingSpinner: '=',
    isDisabled: '=',
    isSpinnerHidden: '=',
    clickCallback: '&'
  },
  controller: ButtonSpinnerController,
  templateUrl: template
};

export default buttonSpinner
