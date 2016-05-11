import angular from 'angular';
import $ from 'jquery';
import loadingIcon from 'assets/images/loading.gif';

export default ($compile, $timeout) => { 
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
        let template = "<div id='startloadingSpinner' class='loading-spinner' ng-show='" + attrs.loadingSpinner + "'><img alt='Loading Content' src='" + loadingIcon + "' /></div>";
        let tmpl = angular.element(template);
        $compile(tmpl)(scope);
        $timeout(() => {
            $(element).find('.ui-grid-viewport').append(tmpl);
        }, 100);
     }
  }; 
};
