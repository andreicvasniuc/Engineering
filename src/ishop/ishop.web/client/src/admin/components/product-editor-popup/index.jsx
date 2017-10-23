import './style.styl';

import template from './template.html';
import sizeTemplate from './sizeTemplate.html';
import colorTemplate from './colorTemplate.html';
import closeIcon from 'images/close.png';

class ProductEditorPopupController {
  constructor($scope, $timeout, $uibModal, $translate, $cacheFactory, productService, productNotifier, productRouter, imageService, imageNotifier, sizeService, colorService, modalAlert, env) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this.$translate = $translate;
    this.$cacheFactoryObject = $cacheFactory.get('$http');
    this.productService = productService;
    this.productNotifier = productNotifier;
    this.productRouter = productRouter;
    this.imageService = imageService;
    this.imageNotifier = imageNotifier;
    this.sizeService = sizeService;
    this.colorService = colorService;
    this.modalAlert = modalAlert;
    this.closeIcon = closeIcon;
    this.env = env;

    this.sizeTemplate = sizeTemplate;
    this.colorTemplate = colorTemplate;

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
      this.loadSizes();
      this.loadColors();
      this.stopSavingSpinner();
      this.openProductEditorPopup();
    });
  }

  initialize(product, activeTab) {
    this.product = product;
    this.isEdit = !!product;
    this.selectTab(activeTab);

    if(this.isEdit){
      //this.setUploadUrl();
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

  // setUploadUrl() {
  //   this.uploadUrl = `${this.env.getApiUrl()}/admin/collections/${this.productRouter.getCollectionId()}/products/${this.product._id.$oid}/images/upload/`;
  // }

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  loadSizes(clearCache) {
    if(clearCache) this.clearAllCache();

    this.sizeService.list((response) => {
      this.sizes = response.sizes;
      this.setIdToItems(this.sizes);
    });
  }

  loadColors(clearCache) {
    if(clearCache) this.clearAllCache();

    this.colorService.list((response) => {
      this.colors = response.colors;
      this.setIdToItems(this.colors);
    });
  }

  clearAllCache() {
    this.$cacheFactoryObject.removeAll();
  }

  setIdToItems(items) {
    items.forEach((item) => item.id = item._id.$oid);
  }

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
    this.$translate('DELETE_IMAGE_MESSAGE').then((message) => {
      this.$translate('NO').then((no) => {
        this.$translate('YES').then((yes) => {
          this.modalAlert.open({
            message: message,
            buttons: [{ label: no }, { label: yes, callback: () => { this.deleteImage(image); } }]
          });
        });
      });
    });
  }

  uploadImage() {
    this.imageService.upload(this.product._id.$oid, this.image, (response) => {
      this.product.images = response.images;
      this.image.url = '';
      this.imageNotifier.showSuccessUploadMessage();
      if(this.product.images && this.product.images.length == 1) {
        this.makeCover(this.product.images[0]);
      }
    });
  }

  // uploadedFileSize(file) {
  //   return Math.round(file.sizeUploaded() * 100/file.size);
  // }

  /* flow methods */

  // flowFileSuccess(file, response) {
  //   //file.cancel(); // delete the file from flow.files
  //   //this.product = JSON.parse(response);
  //   this.lastSuccessResponse = JSON.parse(response);
  //   this.imageNotifier.showSuccessUploadMessage();
  // }

  // flowComplete(flow) {
  //   this.$timeout(() => {
  //     flow.files = [];
  //     this.product = this.lastSuccessResponse;
  //   });
  // }

  // flowError(file, message, files) {
  //   console.log('flowError', file, message, files); 
  // }

  // flowFileAdded(flow, file, event) {
  //   this.$timeout(() => {
  //     this.startUpload(flow);
  //   });
  // }

  // startUpload(flow) {
  //   flow.opts.target = this.uploadUrl;
  //   flow.opts.headers = { Authorization : `Bearer ${sessionStorage.getItem('auth_token')}` };
  //   flow.upload();
  // }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup