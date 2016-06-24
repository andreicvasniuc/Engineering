class ModalAlert {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }

  open(config) {
    this.$rootScope.$broadcast('openModalAlert', config);
  }
}

export default ModalAlert