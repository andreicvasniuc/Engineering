import './style.styl';

import template from './template.html';

import enIcon from 'assets/images/flags/en.png';
import ruIcon from 'assets/images/flags/ru.png';
import uaIcon from 'assets/images/flags/ua.png';
import roIcon from 'assets/images/flags/ro.png';

class LanguageSelectorController {
  constructor($translate, languages) {
    this.$translate = $translate;
    this.languages = languages;

    this.createLanguageList();
    this.getLanguageFromCoockies();
  }

  createLanguageList() {
    this.languageList = [
      { key: this.languages.ua, icon: uaIcon, title: 'Українська' },
      { key: this.languages.ru, icon: ruIcon, title: 'Русский' },
      { key: this.languages.ro, icon: roIcon, title: 'Română' },
      { key: this.languages.en, icon: enIcon, title: 'English' }
    ];
  }

  getLanguageFromCoockies() {
    let languageKey = this.$translate.storage().get(this.$translate.storageKey());
    this.selectedLanguage = _.find(this.languageList, { key: languageKey });
  }

  selectLanguage(language) {
    this.selectedLanguage = language;
    this.$translate.use(this.selectedLanguage.key);
  }
}

let languageSelector = {
  bindings: {
  },
  controller: LanguageSelectorController,
  templateUrl: template
};

export default languageSelector
