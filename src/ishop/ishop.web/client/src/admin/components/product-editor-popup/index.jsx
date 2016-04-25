import template from './template.html';

class ProductEditorPopupController {
  constructor() {
  }
}

let productEditorPopup = {
  bindings: {},
  controller: ProductEditorPopupController,
  templateUrl: template
};

export default productEditorPopup


// 'use strict';

// complianceTrackerModule.directive('calendarEditorPopup', function ($modal, templateUrlBuilder, calendarService, calendarNotifier, configurationService, modalAlert, dateFormatParser, rootScopeObserver, calendarRouter) {
//     var modal;

//     return {
//         restrict: 'E',
//         scope: {},
//         link: function (scope) {
//             var model = {
//                 calendar: {},
//                 isEdit: false,
//                 canChange: false,
//                 isLoadingSpinner: false,
//                 isSavingSpinner: false,
//                 setCalendar: false,
//                 calendarYearList: null,
//                 complianceGroupList: null,
//                 ownerList: null
//             };
//             scope.model = model;

//             scope.$on('openCalendarEditorPopup', function (event, calendarId) {
//                 model.isEdit = !!calendarId;
//                 resetModel();

//                 if (model.isEdit) loadCalendar(calendarId);

//                 modal = $modal.open({
//                     templateUrl: templateUrlBuilder.getFromCalendar('CalendarEditorPopup.html'),
//                     scope: scope,
//                     controller: function ($modalInstance) {
//                         scope.cancel = function () {
//                             $modalInstance.dismiss('cancel');
//                         };
//                     },
//                     windowClass: 'app-modal-window'
//                 });
//             });
//         }
//     };
// });