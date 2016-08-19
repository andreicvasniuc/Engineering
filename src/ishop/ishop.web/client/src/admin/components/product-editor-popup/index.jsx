import './style.styl';

import template from './template.html';
import closeIcon from 'assets/images/close.png';

class ProductEditorPopupController {
  constructor($scope, $timeout, $uibModal, productService, productNotifier, imageService, imageNotifier, modalAlert) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this.productService = productService;
    this.productNotifier = productNotifier;
    this.imageService = imageService;
    this.imageNotifier = imageNotifier;
    this.modalAlert = modalAlert;
    this.closeIcon = closeIcon;

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
    console.log(product);
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
    console.log(this.product);
    this.uploadUrl = `http://localhost:3000/admin/products/${this.product._id.$oid}/images/upload/`;
    console.log(this.uploadUrl);
    //this.uploadUrl = `http://localhost:3000/admin/product_images/upload/`;
  }

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  add() {
    this.startSavingSpinner();
    this.productService.add(this.product, (response) => {
      this.initialize(response, this.activeTab);
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessCreateMessage();
      this.stopSavingSpinner();
      this.selectTab(this.tabs.imageUploading);
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

  getImageSrc(image) {
    return `http://localhost:3000/product_images/${this.product._id.$oid}/${image._id.$oid}.${image.extension}`;
  }

  setCoverImageId() {
    if(!this.product.images || this.product.images.length == 0) return;

    let coverImage = _.find(this.product.images, { is_cover: true });
    this.coverImageId = coverImage ? coverImage._id.$oid : null; // used just for select a radio button
  }

  makeCover(image) {
    this.imageService.make_cover(this.product._id.$oid, image, (response) => {
      this.product = response;
      this.setCoverImageId();
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

  /* flow methods */

  flowFileSuccess(file, response) {
    console.log('flowFileSuccess');
    console.log(JSON.parse(response));
    // console.log(flow.files.length);
    // flow.files = _.reject(flow.files, { uniqueIdentifier: file.uniqueIdentifier });
    // console.log(flow.files.length);

    //file.cancel(); // delete the file from flow.files
    //this.product = JSON.parse(response);
    this.lastSuccessResponse = JSON.parse(response);
  }

  flowComplete(flow) {
    this.$timeout(() => {
      console.log('flowComplete', this.lastSuccessResponse);
      flow.files = [];
      this.product = this.lastSuccessResponse;
    });
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