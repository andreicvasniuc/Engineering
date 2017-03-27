import template from './template.html';
import closeIcon from 'images/close.png';

class CollectionSelectorPopupController {
  constructor($scope, $uibModal, $translate, collectionService, router, routeUrls) {
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.$translate = $translate;
    this.collectionService = collectionService;
    this.router = router;
    this.routeUrls = routeUrls;
    this.closeIcon = closeIcon;

    this.createOpenPopupEvent();
    this.loadCollectionList();
  }

  createOpenPopupEvent() {
    this.$scope.$on('openCollectionSelector', (event) => this.openCollectionSelectorPopup());
  }

  openCollectionSelectorPopup() {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: this.$scope,
      backdrop: 'static',
      keyboard: false
    });
  }

  select(collection, event) {
    console.log(collection, event);
    event.preventDefault();
    //create productRouter and use it to populate collectionId
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  loadCollectionList(successCallback) {
    this.isLoadingSpinner = true;

    this.collectionService.getPublishedList((response) => {
        this.collections = response.collections;
        this.isLoadingSpinner = false;
        if(successCallback) successCallback();
      }, 
      () => { console.log('error'); });
  }
}

let collectionSelectorPopup = {
  bindings: {},
  controller: CollectionSelectorPopupController
};

export default collectionSelectorPopup