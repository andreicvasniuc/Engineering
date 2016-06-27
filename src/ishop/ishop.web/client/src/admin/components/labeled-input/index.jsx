import template from './template.html';
import style from './style.styl';

class LabeledInputController {
  constructor() {
  }
}

let labeledInput = {
  bindings: {
    type: '@',
    label: '@',
    fieldId: '@',
    fieldName: '@',
    value: '=',
    isDisabled: '=',
    isRequired: '=',
    cssClass: '@',
    labelClass: '@',
    inputClass: '@',
    placeholder: '@',
    maxlength: '@',
    displayAfter: '='
  },
  controller: LabeledInputController,
  templateUrl: template
};

export default labeledInput
