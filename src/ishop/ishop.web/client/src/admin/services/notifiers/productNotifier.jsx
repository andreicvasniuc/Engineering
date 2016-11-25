class ProductNotifier {
  constructor(notifier) {
    this.notifier = notifier;
    this.item = 'The product';
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
    this.notifier.success(`The product was ${published ? "" : "un"}published successfully.`); 
  }
}

export default ProductNotifier