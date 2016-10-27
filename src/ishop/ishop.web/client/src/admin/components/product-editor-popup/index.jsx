import './style.styl';

import template from './template.html';
import closeIcon from 'assets/images/close.png';

class ProductEditorPopupController {
  constructor($scope, $timeout, $uibModal, productService, productNotifier, imageService, imageNotifier, modalAlert, envService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this.productService = productService;
    this.productNotifier = productNotifier;
    this.imageService = imageService;
    this.imageNotifier = imageNotifier;
    this.modalAlert = modalAlert;
    this.closeIcon = closeIcon;
    this.envService = envService;

    this.tabs = {
      basicInformation: 0,
      imageUploading: 1
    };

    this.createOpenPopupEvent();
  }

  createOpenPopupEvent() {
    this.$scope.$on('openProductEditorPopup', (event, product, openImageUploadingTab) => {
      let activeTab = openImageUploadingTab ? this.tabs.imageUploading : this.tabs.basicInformation;
      this.initialize(product, activeTab);
      this.stopSavingSpinner();
      this.openProductEditorPopup(); 
    });
  }

  initialize(product, activeTab) {
    this.product = product;
    this.isEdit = !!product;
    this.selectTab(activeTab);

    if(this.isEdit){
      this.setUploadUrl();
      this.setCoverImageId();
    }
  }

  openProductEditorPopup() {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: this.$scope,
      backdrop: 'static',
      keyboard: false
    });
  }

  setUploadUrl() {
    this.uploadUrl = `${this.envService.getApiUrl()}/admin/products/${this.product._id.$oid}/images/upload/`;
  }

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  add() {
    this.startSavingSpinner();
    this.productService.add(this.product, (response) => {
      this.initialize(response, this.activeTab);
      // this.reloadGrid();
      this.productNotifier.showSuccessCreateMessage();
      this.stopSavingSpinner();
      this.selectTab(this.tabs.imageUploading);
    });
    //, (error) => {});
  }

  edit() {
    this.startSavingSpinner();
    this.productService.edit(this.product, (response) => {
      // this.reloadGrid();
      this.productNotifier.showSuccessUpdateMessage();
      this.stopSavingSpinner();
      // this.cancel();
    });
    //, (error) => {});
  }

  reloadGrid() {
    this.$scope.$emit('reloadGrid');
  }

  cancel() {
    this.reloadGrid();
    this.modal.dismiss('cancel');
  }

  selectTab(tab) {
    this.activeTab = tab;
  }

  isCurrentTab(tab) {
    return this.activeTab == tab;
  }

  setCoverImageId() {
    if(!this.product.images || this.product.images.length == 0) return;

    let coverImage = _.find(this.product.images, { is_cover: true });
    this.coverImageId = coverImage ? coverImage._id.$oid : null; // used just for select a radio button
  }

  makeCover(image) {
    this.imageService.makeCover(this.product._id.$oid, image, (response) => {
      this.product = response;
      this.setCoverImageId();
      this.imageNotifier.showSuccessMakeCoverMessage();
    });
  }

  deleteImage(image) {
    this.imageService.delete(this.product._id.$oid, image, (response) => {
      this.product = response;
      this.imageNotifier.showSuccessDeleteMessage();
    });
  }

  delete(image) {
    this.modalAlert.open({
      message: 'Are you sure you want to delete this image?',
      buttons: [{ label: 'No' }, { label: 'Yes', callback: () => { this.deleteImage(image); } }]
    });
  }

  uploadedFileSize(file) {
    return Math.round(file.sizeUploaded() * 100/file.size);
  }

  /* flow methods */

  flowFileSuccess(file, response) {
    //file.cancel(); // delete the file from flow.files
    //this.product = JSON.parse(response);
    this.lastSuccessResponse = JSON.parse(response);
    this.imageNotifier.showSuccessUploadMessage();
  }

  flowComplete(flow) {
    this.$timeout(() => {
      flow.files = [];
      this.product = this.lastSuccessResponse;
    });
  }

  flowError(file, message, files) {
    console.log('flowError', file, message, files); 
  }

  flowFileAdded(flow, file, event) {
    this.$timeout(() => {
      this.startUpload(flow);
    });
  }

  startUpload(flow) {
    flow.opts.target = this.uploadUrl;
    flow.opts.headers = { Authorization : `Bearer ${sessionStorage.getItem('auth_token')}` };
    flow.upload();
  }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup