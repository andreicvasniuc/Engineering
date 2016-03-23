import template from './template.html';
import style from './style.styl';

class ProductGridController {
  constructor() {
    this.createColumnDefinitions();
  }

  createColumnDefinitions() {
    this.columnDefinitions = [
      {
          field: 'id',
          displayName: 'Id'
      },
      {
          field: 'name',
          displayName: 'Name'
      }
    ];
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