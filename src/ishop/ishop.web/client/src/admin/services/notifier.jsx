class NotifierService {
  constructor(toastr) {
    this.toastr = toastr;
  }

  success(message) {
    this.toastr.success(message);
  }

  error(message, title, optionsOverride) {
    this.toastr.error(message, title, optionsOverride);
  }

  showSuccessSaveMessage(item) {
    this.success(`${item} was saved successfully.`);
  }

  showSuccessCreateMessage(item) {
    this.success(`${item} was created successfully.`);
  }

  showSuccessUpdateMessage(item) {
    this.success(`${item} was updated successfully.`);
  }

  showSuccessDeleteMessage(item) {
    this.success(`${item} was deleted successfully.`);
  }
}

export default NotifierService