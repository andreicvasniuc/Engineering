import './style.styl';

import template from './template.html';
import closeIcon from 'assets/images/close.png';

class ProductEditorPopupController {
  constructor($scope, $timeout, $uibModal, productService, productNotifier) {
    this.$scope = $scope;
    this.$timeout = $timeout;
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
    this.uploadUrl = `http://localhost:3000/admin/products/${product._id.$oid}/images/upload/`;
    //this.uploadUrl = `http://localhost:3000/admin/product_images/upload/`;
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

  selectTab(tab) {
    this.activeTab = tab;
  }

  isCurrentTab(tab) {
    return this.activeTab == tab;
  }

  /* flow methods */

  flowFileSuccess(file, response) {
    console.log('flowFileSuccess');
    console.log(JSON.parse(response));
    // console.log(flow.files.length);
    // flow.files = _.reject(flow.files, { uniqueIdentifier: file.uniqueIdentifier });
    // console.log(flow.files.length);

    file.cancel(); // delete the file from flow.files
    this.product = JSON.parse(response);
  }

  flowComplete(flow) {
    console.log('flowComplete');
  }

  flowError(file, message, files) {
    console.log('flowError', file, message, files); 
  }

  flowFileAdded(flow, file, event) {
    console.log('flowFileAdded', file, event); 
    this.$timeout(() => {
      this.startUpload(flow);
    });
  }

  startUpload(flow) {
    console.log('startUpload', this.coverImageIdentifier, flow);
    // flow.opts.query = { coverImageIdentifier: this.coverImageIdentifier };
    flow.upload();
  }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup