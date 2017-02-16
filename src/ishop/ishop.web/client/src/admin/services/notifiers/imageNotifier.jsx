class ImageNotifier {
  constructor(notifier) {
    this.notifier = notifier;
    this.item = 'IMAGE';
  }

  showSuccessUploadMessage() {
    this.notifier.success(`${this.item} WAS UPLOADED SUCCESSFULLY`);
  }

  showSuccessDeleteMessage() {
    this.notifier.showSuccessDeleteMessage(this.item);
  }

  showSuccessMakeCoverMessage() {
    this.notifier.success(`${this.item} WAS MADE AS_COVER SUCCESSFULLY`);
  }
}

export default ImageNotifier