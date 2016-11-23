//import './style.styl';

import template from './template.html';

import enIcon from 'assets/images/flags/en.png';
import ruIcon from 'assets/images/flags/ru.png';
import uaIcon from 'assets/images/flags/ua.png';
import roIcon from 'assets/images/flags/ro.png';

class LanguageSelectorController {
  constructor(languages) {
    this.languages = languages;

    this.createLanguageList();
    this.selectedLanguage = this.languageList[0]; // get it from coockies
  }

  createLanguageList() {
    this.languageList = [
      { key: this.languages.ua, icon: uaIcon },
      { key: this.languages.ru, icon: ruIcon },
      { key: this.languages.ro, icon: roIcon },
      { key: this.languages.en, icon: enIcon }
    ];
  }
}

let languageSelector = {
  bindings: {
  },
  controller: LanguageSelectorController,
  templateUrl: template
};

export default languageSelector
