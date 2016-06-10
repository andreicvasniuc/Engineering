import template from './template.html';

class ProductEditorPopupController {
  constructor($scope, $uibModal, productService) {
    this.$uibModal = $uibModal;
    this.productService = productService;
    
    $scope.$on('openProductEditorPopup', () => {
      this.product = null;
      this.openProductEditorPopup($scope); 
    });
  }

  openProductEditorPopup(scope) {
    this.modal = this.$uibModal.open({
      templateUrl: template,
      scope: scope
    });
  }

  ok(){
    console.log('ok', this.productService);
    this.productService.save({ product: this.product });
  }

  cancel(){
    this.modal.dismiss('cancel');
  }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController
};

export default productEditorPopup