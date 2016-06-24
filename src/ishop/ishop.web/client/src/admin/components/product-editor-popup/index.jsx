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
      this.openProductEditorPopup(); 
    });
  }

  openProductEditorPopup() {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: this.$scope,
      backdrop: 'static',
      keyboard: false
    });
  }

  add() {
    this.productService.add(this.product, (response) => {
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessCreateMessage();
      this.cancel();
    });
    //, (error) => {});
  }

  edit() {
    this.productService.edit(this.product, (response) => {
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessUpdateMessage();
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