import template from './template.html';

class ProductEditorPopupController {
  constructor($scope, $uibModal, productService, productNotifier) {
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.productService = productService;
    this.productNotifier = productNotifier;
    
    this.$scope.$on('openProductEditorPopup', (event, product) => {
      this.product = product;
      this.isEdit = !!product;
      this.openProductEditorPopup($scope); 
    });
  }

  openProductEditorPopup(scope) {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: scope,
      backdrop  : 'static',
      keyboard  : false
    });
  }

  ok() {
    this.productService.save(this.product, (response) => {
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessSaveMessage();
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