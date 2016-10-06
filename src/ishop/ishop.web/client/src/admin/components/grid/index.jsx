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
    return { enableColumnMenu: false };
  }

  columnDef(object) {
    let extendedObject = angular.extend({ enableSorting: false }, this.generalColumnDef(), object);
    return extendedObject;
  }

  getDirectionByField(sortByField) {
    return this.sortBy == this.sortByEnum[sortByField] ? this.sortByDirection : null;
  }

  sortableColumnDef(object) {
    object.sort = { direction: this.getDirectionByField(object.field) };
    object.suppressRemoveSort = true; // make the column to be limited to the two state sort
    let extendedObject = angular.extend({}, this.generalColumnDef(), object);
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
        enableVerticalScrollbar: this.uiGridConstants.scrollbars.ALWAYS,
        rowTemplate: gridRow,
        rowHeight: this.rowHeight,
        columnDefs: this.createColumnDefs(),
        onRegisterApi: (gridApi) => this.onRegisterApi(gridApi)
    };
  }

  onRegisterApi(gridApi) {
    gridApi.core.on.sortChanged(this.$scope, (grid, sortColumns) => this.onSortChanged(grid, sortColumns));

    // gridApi.core.on.rowsRendered(this.$scope, () => {
    //   console.log('rowsRendered', this.callbacks, this.callbacks.rowsRendered);
    //     // if (!this.callbacks.rowsRendered) return;
    //     // this.callbacks.rowsRendered();
    // });

    if (this.needLoadMoreData !== false) {
        gridApi.infiniteScroll.on.needLoadMoreData(this.$scope, () => { this.$scope.$emit('loadMoreData'); });

        this.$scope.$on('moreDataLoaded', () => { gridApi.infiniteScroll.dataLoaded(); });
    }
  }

  onSortChanged(grid, sortColumns) {
    let sortColumn = sortColumns[sortColumns.length-1];
    let sortByOptions = {
        sortBy: sortColumn.field,
        sortByDirection: sortColumn.sort.direction
    };
    this.$scope.$emit('executeSorting', sortByOptions);
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
    callbacks: '=',
    needLoadMoreData: '=',
    rowHeight: '='
  },
  controller: GridController,
  templateUrl: template
};

export default grid