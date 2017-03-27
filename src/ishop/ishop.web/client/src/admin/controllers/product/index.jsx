class ProductController {
  constructor($rootScope, $timeout) {
    $timeout(() => $rootScope.$broadcast('openCollectionSelector'));
  }
}

export default ProductController