import template from './template.html';

class GridController {
  constructor(uiGridConstants) {
    this.uiGridConstants = uiGridConstants;

    this.setGridId();
    this.setGridOptions();
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
    console.log(this.createColumnDefs(), this.gridData);
    this.gridOptions = {
        data: this.gridData,
        useExternalSorting: true,
        enableHorizontalScrollbar: this.uiGridConstants.scrollbars.NEVER,
        enableVerticalScrollbar: this.uiGridConstants.scrollbars.WHEN_NEEDED,
        columnDefs: this.createColumnDefs()
    };
  }
}

let grid = {
  bindings: {
    columnDefinitions: '=',
    gridData: '=',
    totalCount: '=',
    sortByEnum: '=',
    sortBy: '=',
    sortByDirection: '='
  },
  controller: GridController,
  templateUrl: template
};

export default grid