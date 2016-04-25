import template from './template.html';
import loadingIcon from 'assets/images/loading.gif';

class ButtonSpinnerController {
  constructor() {
    this.loadingIcon = loadingIcon;
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
