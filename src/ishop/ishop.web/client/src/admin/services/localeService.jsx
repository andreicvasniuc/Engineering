class LocaleService {
  constructor($translate) {
    this.$translate = $translate;
  }

  set(locale) {
    this.$translate.use(locale);
  }

  get() {
    return this.$translate.storage().get(this.$translate.storageKey());
  }
}

export default LocaleService