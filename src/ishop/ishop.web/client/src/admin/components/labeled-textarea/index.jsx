import './style.styl';

import template from './template.html';

class LabeledTextareaController {
  constructor() {
  }
}

let labeledTextare = {
  bindings: {
    label: '@',
    fieldId: '@',
    fieldName: '@',
    value: '=',
    isDisabled: '=',
    isRequired: '=',
    cssClass: '@',
    labelClass: '@',
    textareaClass: '@',
    placeholder: '@',
    maxlength: '@',
    displayAfter: '=',
    focus: '<'
  },
  controller: LabeledTextareaController,
  templateUrl: template
};

export default labeledTextare
