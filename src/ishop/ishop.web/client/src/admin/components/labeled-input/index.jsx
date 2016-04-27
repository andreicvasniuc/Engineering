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
    labelClass: '@',
    inputClass: '@',
    placeholder: '@',
    maxlength: '@'
  },
  controller: LabeledInputController,
  templateUrl: template
};

export default labeledInput
