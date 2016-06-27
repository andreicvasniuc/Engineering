import template from './template.html';
import style from './style.styl';

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

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  add() {
    this.startSavingSpinner();
    this.productService.add(this.product, (response) => {
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessCreateMessage();
      this.stopSavingSpinner();
      this.cancel();
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
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup