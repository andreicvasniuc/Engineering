import angular from 'angular';
import $ from 'jquery';
// import loadingIcon from 'assets/images/loading.gif';

export default ($compile, $timeout) => { 
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
        let isEmpty = attrs.isEmpty;
        let msg = (attrs.showEmptyMessage) ? attrs.showEmptyMessage : 'Nothing to display';
        let template = "<div class='ui-grid-row.even ui-grid-no-results' ng-show='" + isEmpty + "'>" + msg + "</div>";
        let tmpl = angular.element(template);
        $compile(tmpl)(scope);
        $timeout(() => {
            $(element).find(".ui-grid-viewport").append(tmpl);
        });
     }
  }; 
};
