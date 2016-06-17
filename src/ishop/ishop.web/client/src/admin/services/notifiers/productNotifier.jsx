class ProductNotifierService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  showSuccessSaveMessage() {
    this.notifier.success('The product was saved successfully.');
  }
}

export default ProductNotifierService