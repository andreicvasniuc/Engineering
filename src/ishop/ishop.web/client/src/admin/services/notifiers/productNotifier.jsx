class ProductNotifierService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  showSuccessSaveMessage() {
    this.notifier.success('The product was saved successfully.');
  }

  showSuccessCreateMessage() {
    this.notifier.success('The product was created successfully.');
  }

  showSuccessUpdateMessage() {
    this.notifier.success('The product was updated successfully.');
  }

  showSuccessDeleteMessage() {
    this.notifier.success('The product was deleted successfully.');
  }

  showSuccessPublishedMessage(published) {
    this.notifier.success(`The product was ${published ? "" : "un"}published successfully.`); 
  }
}

export default ProductNotifierService