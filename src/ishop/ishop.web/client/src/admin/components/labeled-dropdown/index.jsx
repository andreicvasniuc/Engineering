import './style.styl';

import template from './template.html';

class LabeledDropdownController {
  constructor() {}
}

let labeledDropdown = {
  bindings: {
    value: '=',
    items: '=',
    isDisabled: '=',
    textProperty: '@',
    valueProperty: '@',
    label: '@',
    fieldId: '@',
    fieldName: '@',
    cssClass: '@',
    labelClass: '@',
    selectClass: '@',
    isRequired: '='
  },
  controller: LabeledDropdownController,
  templateUrl: template
};

export default labeledDropdown
