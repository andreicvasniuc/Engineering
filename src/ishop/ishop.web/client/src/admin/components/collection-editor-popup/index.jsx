import './style.styl';

import template from './template.html';
import closeIcon from 'images/close.png';

class CollectionEditorPopupController {
  constructor($scope, $timeout, $uibModal, $translate, collectionService, collectionNotifier, imageService, imageNotifier, modalAlert, env) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this.$translate = $translate;
    this.collectionService = collectionService;
    this.collectionNotifier = collectionNotifier;
    this.imageService = imageService;
    this.imageNotifier = imageNotifier;
    this.modalAlert = modalAlert;
    this.closeIcon = closeIcon;
    this.env = env;

    this.tabs = {
      basicInformation: 0,
      imageUploading: 1
    };

    this.createOpenPopupEvent();
  }

  createOpenPopupEvent() {
    this.$scope.$on('openCollectionEditorPopup', (event, collection, openImageUploadingTab) => {
      let activeTab = openImageUploadingTab ? this.tabs.imageUploading : this.tabs.basicInformation;
      this.initialize(collection, activeTab);
      this.stopSavingSpinner();
      this.openCollectionEditorPopup(); 
    });
  }

  initialize(collection, activeTab) {
    this.collection = collection;
    this.isEdit = !!collection;
    this.selectTab(activeTab);

    if(this.isEdit){
      this.setUploadUrl();
    }
  }

  openCollectionEditorPopup() {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: this.$scope,
      backdrop: 'static',
      keyboard: false
    });
  }

  setUploadUrl() {
    this.uploadUrl = `${this.env.getApiUrl()}/admin/collections/${this.collection._id.$oid}/upload_image/`;
  }

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  add() {
    this.startSavingSpinner();
    this.collectionService.add(this.collection, (response) => {
      this.initialize(response, this.activeTab);
      this.collectionNotifier.showSuccessCreateMessage();
      this.stopSavingSpinner();
      this.selectTab(this.tabs.imageUploading);
    });
  }

  edit() {
    this.startSavingSpinner();
    this.collectionService.edit(this.collection, (response) => {
      this.collectionNotifier.showSuccessUpdateMessage();
      this.stopSavingSpinner();
    });
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

  uploadedFileSize(file) {
    return Math.round(file.sizeUploaded() * 100/file.size);
  }

  /* flow methods */

  flowFileSuccess(file, response) {
    //file.cancel(); // delete the file from flow.files
    //this.collection = JSON.parse(response);
    this.lastSuccessResponse = JSON.parse(response);
    this.imageNotifier.showSuccessUploadMessage();
  }

  flowComplete(flow) {
    this.$timeout(() => {
      flow.files = [];
      this.collection = this.lastSuccessResponse;
    });
  }

  flowError(file, message, files) {
    console.log('flowError', file, message, files); 
  }

  flowFileAdded(flow, file, event) {
    this.$timeout(() => {
      this.collection.image = null;
      this.startUpload(flow);
    });
  }

  startUpload(flow) {
    flow.opts.target = this.uploadUrl;
    flow.opts.headers = { Authorization : `Bearer ${sessionStorage.getItem('auth_token')}` };
    flow.upload();
  }
}

let collectionEditorPopup = {
  bindings: {},
  controller: CollectionEditorPopupController
};

export default collectionEditorPopup