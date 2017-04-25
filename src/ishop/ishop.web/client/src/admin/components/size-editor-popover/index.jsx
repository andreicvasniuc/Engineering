import $ from 'jquery';

import './style.styl';

import template from './template.html';

class SizeEditorPopoverController {
  constructor($translate, $timeout, sizeService, modalAlert) {
    this.$translate = $translate;
    this.$timeout = $timeout;
    this.sizeService = sizeService;
    this.modalAlert = modalAlert;
  }

  add() {
    this.sizeService.add(this.size, (response) => {
      this.loadSizesCallback();
      this.size.name = '';
    });
  }

  edit(size) {
    if(size.name) {
      this.sizeService.edit(size, (response) => this.loadSizesCallback());
    } else {
      this.deleteSize(size);
    }
  }

  editMode(size, event) {
    size.isEdit = true;
    this.$timeout(() => $(event.target).next().focus());
  }

  deleteSize(size) {
    this.$translate('DELETE_SIZE_MESSAGE').then((message) => {
      this.$translate('NO').then((no) => {
        this.$translate('YES').then((yes) => {
          this.modalAlert.open({
            message: message,
            buttons: [{ label: no }, { label: yes, callback: () => this.sizeService.delete(size, () => this.loadSizesCallback()) }]
          });
        });
      });
    });
  }
}

let sizeEditorPopover = {
  bindings: {
    sizes: '=',
    loadSizesCallback: '&'
  },
  controller: SizeEditorPopoverController,
  templateUrl: template
};

export default sizeEditorPopover