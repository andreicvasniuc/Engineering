class ImageNotifierService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  showSuccessUploadMessage() {
    this.notifier.success('The image was uploaded successfully.');
  }

  showSuccessDeleteMessage() {
    this.notifier.success('The image was deleted successfully.');
  }

  showSuccessMakeCoverMessage() {
    this.notifier.success('The image was made as cover successfully.');
  }
}

export default ImageNotifierService