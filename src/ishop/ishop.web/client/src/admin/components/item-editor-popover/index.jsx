import $ from 'jquery';

import './style.styl';

import template from './template.html';

class ItemEditorPopoverController {
  constructor($translate, $timeout, modalAlert) {
    this.$translate = $translate;
    this.$timeout = $timeout;
    this.modalAlert = modalAlert;
  }

  add() {
    this.itemService.add(this.item, (response) => {
      this.loadItemsCallback({ clearCache: true });
      this.item.name = '';
    });
  }

  edit(item) {
    if(item.name) {
      this.itemService.edit(item, (response) => this.loadItemsCallback({ clearCache: true }));
    } else {
      this.deleteItem(item);
    }
  }

  editMode(item, event) {
    item.isEdit = true;
    this.$timeout(() => $(event.target).next().focus());
  }

  deleteItem(item) {
    this.$translate(this.deleteItemMessageTranslateId).then((message) => {
      this.$translate('NO').then((no) => {
        this.$translate('YES').then((yes) => {
          this.modalAlert.open({
            message: message,
            buttons: [{ label: no }, { label: yes, callback: () => this.itemService.delete(item, () => this.loadItemsCallback({ clearCache: true })) }]
          });
        });
      });
    });
  }
}

let itemEditorPopover = {
  bindings: {
    itemService: '=',
    items: '=',
    loadItemsCallback: '&',
    deleteItemMessageTranslateId: '@'
  },
  controller: ItemEditorPopoverController,
  templateUrl: template
};

export default itemEditorPopover