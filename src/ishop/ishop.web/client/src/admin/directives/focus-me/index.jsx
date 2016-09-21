import angular from 'angular';
import $ from 'jquery';

export default ($timeout) => { 
  return {
    restrict: 'A',
    scope: {
      trigger : '<focusMe'
    },
    link: (scope, element, attrs) => {
      scope.$watch('trigger', (value) => {
        if(!value) return;

        $timeout(() => {
          $(element).focus();
        });
      });
    }
  }; 
};
