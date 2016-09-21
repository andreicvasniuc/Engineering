import './style.styl';

import template from './template.html';

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
    displayAfter: '=',
    focus: '<'
  },
  controller: LabeledInputController,
  templateUrl: template
};

export default labeledInput
