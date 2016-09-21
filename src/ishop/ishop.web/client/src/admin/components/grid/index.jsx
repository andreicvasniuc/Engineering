import $ from 'jquery';
import './style.styl';

import template from './template.html';
import gridRow from './grid-row.html';

class GridController {
  constructor($scope, $timeout, uiGridConstants) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.uiGridConstants = uiGridConstants;

    this.setGridId();
    this.setGridOptions();
    this.setGridHeight();
  }

  setGridId() {
    this.gridId = 'grid_' + Math.floor((Math.random() * 1000) + 1);
  }

  generalColumnDef() {
      return {
          enableColumnMenu: false
      };
  }

  columnDef(object) {
      let extendedObject = angular.extend({ enableSorting: false }, this.generalColumnDef(), object);
      return extendedObject;
  }

  createColumnDefs() {
    return this.columnDefinitions.map(item => {
        if (item.sortable) {
            delete item.sortable;
            return this.sortableColumnDef(item);
        } else {
            return this.columnDef(item);
        }
    });
  }

  setGridOptions() {
    this.gridOptions = {
        data: '$ctrl.gridData',
        useExternalSorting: true,
        enableHorizontalScrollbar: this.uiGridConstants.scrollbars.NEVER,
        enableVerticalScrollbar: this.uiGridConstants.scrollbars.WHEN_NEEDED,
        rowTemplate: gridRow,
        columnDefs: this.createColumnDefs()
    };
  }

  setGridHeight() {
    this.$scope.$on('setGridHeight', (event, rowHeight) => {
      let minGridHeight = 200;
      let headerHeight = 30;
      let windowHeight = $(window).height() * 0.7;
      let rowsCount = this.gridData.length;
      let customHeight = (rowsCount * rowHeight) + headerHeight + 2;
      let newHeight = customHeight;

      if (rowsCount == 0) {
          newHeight = minGridHeight;
      } else if (rowsCount > 3) {
          newHeight = customHeight > windowHeight ? windowHeight : customHeight;
      }

      if (newHeight < minGridHeight) {
          newHeight = minGridHeight;
      }

      this.$timeout(() => {
        $('#' + this.gridId).height(newHeight);
      });
    });
  }
}

let grid = {
  bindings: {
    columnDefinitions: '=',
    gridData: '=',
    totalCount: '=',
    sortByEnum: '=',
    sortBy: '=',
    sortByDirection: '=',
    callbacks: '='
  },
  controller: GridController,
  templateUrl: template
};

export default grid