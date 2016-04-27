import template from './template.html';

class ProductEditorPopupController {
  constructor($scope, $uibModal) {
    this.$uibModal = $uibModal;
    
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
    console.log('ok');
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