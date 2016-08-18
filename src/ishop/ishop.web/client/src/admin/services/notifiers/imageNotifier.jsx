class ImageNotifierService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  showSuccessDeleteMessage() {
    this.notifier.success('The image was deleted successfully.');
  }
}

export default ImageNotifierService