import template from './template.html';
import gridActionCell from './gridActionCell.html';

import style from './style.styl';

class ProductGridController {
  constructor() {
    this.createColumnDefinitions();
    this.createCallbacks();
  }

  createColumnDefinitions() {
    this.columnDefinitions = [
      {
          field: 'code',
          displayName: 'Code'
      },
      {
          field: 'updated_at',
          displayName: 'Edit Date',
          cellFilter: 'date:"longDate"',
          width: 200
      },
      {
          field: 'action',
          displayName: '',
          cellTemplate: gridActionCell,
          width: 50
      }
    ];
  }

  createCallbacks(){
    this.callbacks = {
      edit: this.edit,
      clickOnRow: this.edit,
      delete: this.delete
    };
  }

  edit(entity, event) {
    console.log('edit', entity, event);
  }

  delete(entity, event) {
    console.log('delete', entity, event);
  }
}

// class ProductGridView {
//   constructor($element, $attrs) {
//     this.$element = $element;
//     this.$attrs = $attrs;
//   }

//   createTemplate(){
//     this.template = 
//               `<div ng-repeat="product in productGrid.data">
//                 <span>{{product.name}}</span>
//                 <button type="button" ng-show="product.isSelected" ng-click="productGrid.unselect(product);">Unselect</button>
//                 <button type="button" ng-hide="product.isSelected" ng-click="productGrid.select(product);">Select</button>
//               </div>`;
//   }
// }

let productGrid = {
  bindings: { 
    gridData: '='
  },
  controller: ProductGridController,
  //template: ($element, $attrs) => new ProductGridView($element, $attrs).template,
  templateUrl: template
};

export default productGrid