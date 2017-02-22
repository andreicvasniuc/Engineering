import './style.styl';

import template from './template.html';
import gridActionCell from './grid-action-cell.html';
import gridPublishedCell from './grid-published-cell.html';
import gridImageCell from './grid-image-cell.html';

class ProductGridController {
  constructor($scope, $rootScope, $timeout, $translate, productService, productNotifier, modalAlert) {
    self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.$translate = $translate;
    this.productService = productService;
    this.productNotifier = productNotifier;
    this.modalAlert = modalAlert;

    this.createColumnDefinitions();
    this.createCallbacks();
    this.setGridHeight();
  }

  createColumnDefinitions() {
    this.columnDefinitions = [
      {
          field: 'images',
          displayName: "COVER",
          headerCellFilter: "translate",
          cellTemplate: gridImageCell,
          clickable: false,
          width: 120
      },
      {
          field: 'code',
          displayName: 'CODE',
          headerCellFilter: "translate",
          sortable: true
      },
      {
          field: 'updated_at',
          displayName: 'EDIT_DATE',
          headerCellFilter: "translate",
          cellFilter: 'date:"dd/MM/yyyy"',
          sortable: true,
          width: 200
      },
      {
          field: 'published',
          displayName: '',
          cellTemplate: gridPublishedCell,
          clickable: false,
          sortable: true,
          width: 35
      },
      {
          field: 'action',
          displayName: '',
          cellTemplate: gridActionCell,
          clickable: false,
          width: 85
      }
    ];
  }

  createCallbacks() {
    this.callbacks = {
      edit: this.edit,
      upload: this.upload,
      delete: this.delete,
      clickOnRow: this.clickOnRow,
      publish: this.publish
    };
  }

  editProduct(entity, openImageUploadingTab) {
    self.productService.get(entity, (response) => {
      self.$rootScope.$broadcast('openProductEditorPopup', response, openImageUploadingTab);
    });
  }

  edit(entity, event) {
    self.editProduct(entity, false);
  }

  upload(entity, event) {
    self.editProduct(entity, true);
  }

  deleteProduct(product) {
    this.productService.delete(product, (response) => {
      this.$scope.$emit('reloadGrid');
      this.productNotifier.showSuccessDeleteMessage();
    });
  }

  delete(entity, event) {
    self.$translate('DELETE_PRODUCT_MESSAGE').then((message) => {
      self.$translate('NO').then((no) => {
        self.$translate('YES').then((yes) => {
          self.modalAlert.open({
            message: message,
            buttons: [{ label: no }, { label: yes, callback: () => { self.deleteProduct(entity); } }]
          });
        });
      });
    });
  }

  clickOnRow(entity, event, col, row) {
    if(col.colDef.clickable === false) return;
    this.edit(entity, event);
  }

  publish(entity, published, callback) {
    entity.published = published;
    self.productService.edit(entity, (response) => {
      self.productNotifier.showSuccessPublishedMessage(published);
      if(callback) callback();
    });
  }

  setGridHeight() {
    this.$scope.$watch(() => {
      return this.gridData.length;
    }, () => {
      this.$timeout(() => {
        let rowHeight = 170;
        this.$scope.$broadcast('setGridHeight', rowHeight);
      });
    });
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
    gridData: '=',
    totalCount: '=',
    sortByEnum: '=',
    sortBy: '=',
    sortByDirection: '='
  },
  controller: ProductGridController,
  //template: ($element, $attrs) => new ProductGridView($element, $attrs).template,
  templateUrl: template
};

export default productGrid