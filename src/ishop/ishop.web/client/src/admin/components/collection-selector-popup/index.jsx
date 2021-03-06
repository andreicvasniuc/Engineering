import template from './template.html';
import closeIcon from 'images/close.png';

class CollectionSelectorPopupController {
  constructor($scope, $uibModal, $translate, collectionService, router, routeUrls, productRouter) {
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.$translate = $translate;
    this.collectionService = collectionService;
    this.router = router;
    this.productRouter = productRouter;
    this.routeUrls = routeUrls;
    this.closeIcon = closeIcon;

    this.createOpenPopupEvent();
    this.loadCollections();
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
    event.preventDefault();
    this.productRouter.goTo(this.routeUrls.collection_products, collection._id.$oid);
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  loadCollections(successCallback) {
    this.isLoadingSpinner = true;

    this.collectionService.list((response) => {
        this.collections = response.collections;
        this.isLoadingSpinner = false;
        if(successCallback) successCallback();
      }, 
      () => { console.log('error'); });
  }

  goToCollections() {
    this.cancel();
    this.router.goTo(this.routeUrls.collections);
  }
}

let collectionSelectorPopup = {
  bindings: {},
  controller: CollectionSelectorPopupController
};

export default collectionSelectorPopup