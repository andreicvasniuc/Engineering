import angular from 'angular';
// import loadingIcon from 'assets/images/loading.gif';

class ShowEmtyMessageController {
  constructor($scope, $element, $attrs, $compile, $timeout) {
    //this.loadingIcon = loadingIcon;

    var isEmpty = $attrs.isEmpty;
    var msg = ($attrs.showEmptyMessage) ? $attrs.showEmptyMessage : 'Nothing to display';
    var template = "<div class='ui-grid-row.even ui-grid-no-results' ng-show='" + isEmpty + "'>" + msg + "</div>";
    var tmpl = angular.element(template);
    $compile(tmpl)($scope);
    $timeout(function () {
        console.log('el',$element.find(".ui-grid-viewport"), tmpl);
        $element.find(".ui-grid-viewport").append(tmpl);
    }, 200);
  }
}

let showEmptyMessage = {
  restrict: 'A',
  //controller: ShowEmtyMessageController,
  compile: function compile( tElement, tAttributes ) {
            console.log(' (compile)', arguments  );
            return function (scope, element, attrs) {
                var isEmpty = attrs.isEmpty;
                var msg = (attrs.showEmptyMessage) ? attrs.showEmptyMessage : 'Nothing to display';
                var template = "<div class='ui-grid-row.even ui-grid-no-results' ng-show='" + isEmpty + "'>" + msg + "</div>";
                var tmpl = angular.element(template);
                //$compile(tmpl)($scope);
                setTimeout(function () {
                    console.log('el',element, tmpl);
                    element.find(".ui-grid-viewport").append(tmpl);
                    scope.$apply();
                }, 3000);
            };
         }
};

export default () => { return showEmptyMessage; };


// complianceTrackerModule.directive('showEmptyMessage', function ($compile, $timeout) {

//     return {
//         restrict: 'A',
//         link: function (scope, element, attrs) {
//             var isEmpty = attrs.isEmpty;
//             var msg = (attrs.showEmptyMessage) ? attrs.showEmptyMessage : 'Nothing to display';
//             var template = "<div class='ui-grid-row.even ui-grid-no-results' ng-show='" + isEmpty + "'>" + msg + "</div>";
//             var tmpl = angular.element(template);
//             $compile(tmpl)(scope);
//             $timeout(function () {
//                 element.find(".ui-grid-viewport").append(tmpl);
//             }, 200);
//         }
//     };
// });