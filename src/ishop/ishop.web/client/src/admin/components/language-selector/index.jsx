import './style.styl';

import template from './template.html';

import enIcon from 'images/flags/en.png';
import ruIcon from 'images/flags/ru.png';
import uaIcon from 'images/flags/ua.png';
import roIcon from 'images/flags/ro.png';

class LanguageSelectorController {
  constructor(localeService, languages) {
    this.localeService = localeService;
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
    let languageKey = this.localeService.get();
    this.selectedLanguage = _.find(this.languageList, { key: languageKey });
  }

  selectLanguage(language) {
    this.selectedLanguage = language;
    this.localeService.set(this.selectedLanguage.key);
  }
}

let languageSelector = {
  bindings: {
  },
  controller: LanguageSelectorController,
  templateUrl: template
};

export default languageSelector
