import './style.styl';

import template from './template.html';
import closeIcon from 'images/close.png';

class CollectionEditorPopupController {
  constructor($scope, $timeout, $uibModal, $translate, collectionService, collectionNotifier, imageNotifier) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this.$translate = $translate;
    this.collectionService = collectionService;
    this.collectionNotifier = collectionNotifier;
    this.imageNotifier = imageNotifier;
    this.closeIcon = closeIcon;

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
  }

  openCollectionEditorPopup() {
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

  uploadImage() {
    this.collectionService.uploadImage(this.collection, (response) => {
      this.imageNotifier.showSuccessUploadMessage();
    });
  }

  deleteImage() {
    delete this.collection.image;
  }
}

let collectionEditorPopup = {
  bindings: {},
  controller: CollectionEditorPopupController
};

export default collectionEditorPopup