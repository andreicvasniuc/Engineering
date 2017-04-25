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
    this.translateMessage(message, (translatedMessage) => this.toastr.error(translatedMessage, title, optionsOverride))
  }

  showSuccessSaveMessage(item, ending) {
    this.success(`${item} WAS${ending ? '_' : ''} SAVED${ending ? '_' : ''} SUCCESSFULLY`);
  }

  showSuccessCreateMessage(item, ending) {
    this.success(`${item} WAS${ending ? '_' : ''} CREATED${ending ? '_' : ''} SUCCESSFULLY`);
  }

  showSuccessUpdateMessage(item, ending) {
    this.success(`${item} WAS${ending ? '_' : ''} UPDATED${ending ? '_' : ''} SUCCESSFULLY`);
  }

  showSuccessDeleteMessage(item, ending) {
    this.success(`${item} WAS${ending ? '_' : ''} DELETED${ending ? '_' : ''} SUCCESSFULLY`);
  }
}

export default Notifier