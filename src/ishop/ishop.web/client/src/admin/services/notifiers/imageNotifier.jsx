class ImageNotifier {
  constructor(notifier) {
    this.notifier = notifier;
    this.item = 'The image';
  }

  showSuccessUploadMessage() {
    this.notifier.success('The image was uploaded successfully.');
  }

  showSuccessDeleteMessage() {
    this.notifier.showSuccessDeleteMessage(this.item);
  }

  showSuccessMakeCoverMessage() {
    this.notifier.success('The image was made as cover successfully.');
  }
}

export default ImageNotifier