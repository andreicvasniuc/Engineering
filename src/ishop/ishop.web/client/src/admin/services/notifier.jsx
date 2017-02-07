class Notifier {
  constructor(toastr, $translate) {
    this.toastr = toastr;
    this.$translate = $translate;
  }

  translateMessage(message, callback) {
    const delimiter = ' ';
    let translations = [];
    let translateIds = message.split(delimiter);

    translateIds.forEach((translateId, index) => {
      this.$translate(translateId).then((translation) => {
        translations.push(translation);

        if(index != translateIds.length-1 || !callback) return;

        callback(translations.join(delimiter));
      });
    });
  }

  success(message, trailingNonWordCharacter = '.') {
    this.translateMessage(message, (translatedMessage) => this.toastr.success(translatedMessage + trailingNonWordCharacter));
  }

  error(message, title, optionsOverride) {
    this.toastr.error(message, title, optionsOverride);
  }

  showSuccessSaveMessage(item) {
    this.success(`${item} WAS SAVED SUCCESSFULLY`);
  }

  showSuccessCreateMessage(item) {
    this.success(`${item} WAS CREATED SUCCESSFULLY`);
  }

  showSuccessUpdateMessage(item) {
    this.success(`${item} WAS UPDATED SUCCESSFULLY`);
  }

  showSuccessDeleteMessage(item) {
    this.success(`${item} WAS DELETED SUCCESSFULLY`);
  }
}

export default Notifier