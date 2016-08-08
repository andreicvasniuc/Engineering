import './style.styl';

import template from './template.html';
import closeIcon from 'assets/images/close.png';

class ProductEditorPopupController {
  constructor($scope, $uibModal, productService, productNotifier) {
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.productService = productService;
    this.productNotifier = productNotifier;
    this.closeIcon = closeIcon;

    this.tabs = {
      basicInformation: 0,
      imageUploading: 1
    };

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
    this.activeTab = this.tabs.basicInformation;
    // this.uploadUrl = `http://localhost:3000/admin/products/${product._id.$oid}/upload/`;
    this.uploadUrl = `http://localhost:3000/admin/product_images/upload/`;
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
      this.activeTab = this.tabs.imageUploading;
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

  /* flow methods */

  flowFileSuccess(message) {
    console.log('flowFileSuccess', message);
  }

  flowComplete() {
    console.log('flowComplete');
  }

  flowError(file, message, files) {
    console.log('flowError', file, message, files); 
  }

  flowFileAdded(flow, file, event) {
    // console.log('flowFileAdded', file, event); 
    this.startUpload(flow);
  }

  startUpload(flow) {
    // console.log('startUpload', flow);
    flow.opts.query = { product_id: this.product._id.$oid };
    flow.upload();
  }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup