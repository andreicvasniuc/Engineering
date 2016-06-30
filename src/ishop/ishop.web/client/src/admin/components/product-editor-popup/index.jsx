import './style.styl';

import template from './template.html';
import closeIcon from 'assets/images/close.png';

class ProductEditorPopupController {
  constructor($scope, $uibModal, $timeout, productService, productNotifier) {
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.$timeout = $timeout;
    this.productService = productService;
    this.productNotifier = productNotifier;
    this.closeIcon = closeIcon;

    this.tabs = {
      basicInformation: 0,
      imageUploading: 1
    };
    this.activeTab = this.tabs.basicInformation;

    this.createOpenPopupEvent();
  }

  createOpenPopupEvent() {
    this.$scope.$on('openProductEditorPopup', (event, product) => {
      this.initialize(product);
      this.stopSavingSpinner();
      this.openProductEditorPopup(); 
    });
  }

  initialize(product) {
    this.product = product;
    this.isEdit = !!product;
  }

  openProductEditorPopup() {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: this.$scope,
      backdrop: 'static',
      keyboard: false
    });
  }

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  add() {
    this.startSavingSpinner();
    this.productService.add(this.product, (response) => {
      this.initialize(response);
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessCreateMessage();
      this.stopSavingSpinner();

      this.$timeout(() => {
        this.activeTab = this.tabs.imageUploading;
        console.log('this.activeTab', this.activeTab);
      }, 5000);
    });
    //, (error) => {});
  }

  edit() {
    this.startSavingSpinner();
    this.productService.edit(this.product, (response) => {
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessUpdateMessage();
      this.stopSavingSpinner();
      this.cancel();
    });
    //, (error) => {});
  }

  cancel() {
    this.modal.dismiss('cancel');
  }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup