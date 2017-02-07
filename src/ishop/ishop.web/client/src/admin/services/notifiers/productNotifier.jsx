class ProductNotifier {
  constructor(notifier) {
    this.notifier = notifier;
    this.item = 'PRODUCT';
  }

  showSuccessSaveMessage() {
    this.notifier.showSuccessSaveMessage(this.item);
  }

  showSuccessCreateMessage() {
    this.notifier.showSuccessCreateMessage(this.item);
  }

  showSuccessUpdateMessage() {
    this.notifier.showSuccessUpdateMessage(this.item);
  }

  showSuccessDeleteMessage() {
    this.notifier.showSuccessDeleteMessage(this.item);
  }

  showSuccessPublishedMessage(published) {
    this.notifier.success(`PRODUCT WAS ${published ? "" : "UN"}PUBLISHED SUCCESSFULLY`); 
  }
}

export default ProductNotifier