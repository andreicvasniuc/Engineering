import './style.styl';

import template from './template.html';

import enIcon from 'images/flags/en.png';
import ruIcon from 'images/flags/ru.png';
import uaIcon from 'images/flags/ua.png';
import roIcon from 'images/flags/ro.png';

class LanguageSelectorController {
  constructor($route, $translate, $timeout, $window, $rootScope, languages) {
    this.$route = $route;
    this.$translate = $translate;
    this.$timeout = $timeout;
    this.$window = $window;
    this.languages = languages;
    this.$rootScope = $rootScope;

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

    this.$timeout(() => {
      this.$route.reload();

      if(this.$rootScope.isMobileMenuVisible) {
        this.$timeout(() => this.$rootScope.isMobileMenuVisible = true, 50); // to display mobile menu
      } else {
        $(this.$window).scrollTop($(this.$window).scrollTop() + 1); // to display sticky menu
      }
    }, 50);
  }
}

let languageSelector = {
  bindings: {
  },
  controller: LanguageSelectorController,
  templateUrl: template
};

export default languageSelector
