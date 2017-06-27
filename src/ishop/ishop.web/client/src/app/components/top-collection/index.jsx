import template from './template.html';

class TopCollectionController {
  constructor(collectionService) {
    this.title = 'Top collection';
    this.collectionService = collectionService;

    this.loadCollection();
  }

  loadCollection() {
    this.isLoadingSpinner = true;

    this.collectionService.getTopCollection((collection) => {
      this.collection = collection;
      this.products = collection.products || [];
      this.isLoadingSpinner = false;
    });
  }
}

let topCollection = {
  bindings: {},
  controller: TopCollectionController,
  templateUrl: template
};

export default topCollection