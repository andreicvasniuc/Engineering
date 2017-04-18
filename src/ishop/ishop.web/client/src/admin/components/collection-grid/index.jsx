import './style.styl';

import template from './template.html';
import gridActionCell from './grid-action-cell.html';
import gridPublishedCell from './grid-published-cell.html';
import gridImageCell from './grid-image-cell.html';
import gridLinkCell from './grid-link-cell.html';

class CollectionGridController {
  constructor($scope, $rootScope, $timeout, $translate, collectionService, collectionNotifier, modalAlert, productRouter, routeUrls) {
    self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.$translate = $translate;
    this.collectionService = collectionService;
    this.collectionNotifier = collectionNotifier;
    this.modalAlert = modalAlert;
    this.productRouter = productRouter;
    this.routeUrls = routeUrls;

    this.createColumnDefinitions();
    this.createCallbacks();
    this.setGridHeight();
  }

  createColumnDefinitions() {
    this.columnDefinitions = [
      {
          field: 'image',
          displayName: "COVER",
          headerCellFilter: "translate",
          cellTemplate: gridImageCell,
          clickable: false,
          width: 120
      },
      {
          field: 'name',
          displayName: 'NAME',
          headerCellFilter: "translate",
          sortable: true
      },
      {
          field: 'description',
          displayName: 'DESCRIPTION',
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
          field: 'products_count',
          displayName: 'PRODUCTS_COUNT',
          headerCellFilter: "translate",
          cellTemplate: gridLinkCell,
          cellClass: 'text-center',
          clickable: false,
          width: 180
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
      publish: this.publish,
      goToProducts: this.goToProducts
    };
  }

  editCollection(entity, openImageUploadingTab) {
    self.collectionService.get(entity._id.$oid, (response) => {
      self.$rootScope.$broadcast('openCollectionEditorPopup', response, openImageUploadingTab);
    });
  }

  edit(entity, event) {
    self.editCollection(entity, false);
  }

  upload(entity, event) {
    self.editCollection(entity, true);
  }

  deleteCollection(collection) {
    this.collectionService.delete(collection, (response) => {
      this.$scope.$emit('reloadGrid');
      this.collectionNotifier.showSuccessDeleteMessage();
    });
  }

  delete(entity, event) {
    self.$translate('DELETE_COLLECTION_MESSAGE').then((message) => {
      self.$translate('NO').then((no) => {
        self.$translate('YES').then((yes) => {
          self.modalAlert.open({
            message: message,
            buttons: [{ label: no }, { label: yes, callback: () => { self.deleteCollection(entity); } }]
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
    self.collectionService.edit(entity, (response) => {
      self.collectionNotifier.showSuccessPublishedMessage(published);
      if(callback) callback();
    });
  }

  goToProducts(entity) {
    self.productRouter.goTo(self.routeUrls.collection_products, entity._id.$oid);
  }

  setGridHeight() {
    this.rowHeight = 170;
    this.$scope.$watch(() => {
      return this.gridData.length;
    }, () => {
      this.$timeout(() => {
        this.$scope.$broadcast('setGridHeight', this.rowHeight);
      });
    });
  }
}

let collectionGrid = {
  bindings: { 
    gridData: '=',
    totalCount: '=',
    sortByEnum: '=',
    sortBy: '=',
    sortByDirection: '='
  },
  controller: CollectionGridController,
  templateUrl: template
};

export default collectionGrid