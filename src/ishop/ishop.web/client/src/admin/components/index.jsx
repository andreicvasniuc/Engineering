import angular from 'angular';

import categoryGrid from './category-grid';
import productGrid from './product-grid';
import collectionGrid from './collection-grid';
import gridActionCell from './grid-action-cell';
import gridPublishedCell from './grid-published-cell';
import mainLayout from './main-layout';
import mainHeader from './main-header';
import sidebar from './sidebar';
import topMenu from './top-menu';
import pageHeading from './page-heading';
import breadcrumb from './breadcrumb';
import panel from './panel';
import grid from './grid';
import icon from './icon';
import loadingIcon from './loading-icon';
import buttonSpinner from './button-spinner';
import buttonDefault from './button-default';
import labeledInput from './labeled-input';
import labeledTextarea from './labeled-textarea';
import modalAlert from './modal-alert';
import productEditorPopup from './product-editor-popup';
import collectionEditorPopup from './collection-editor-popup';
import collectionSelectorPopup from './collection-selector-popup';
import languageSelector from './language-selector';

export default angular
    .module('admin.components', [])
    .component('categoryGrid', categoryGrid)
    .component('productGrid', productGrid)
    .component('collectionGrid', collectionGrid)
    .component('mainLayout', mainLayout)
    .component('mainHeader', mainHeader)
    .component('sidebar', sidebar)
    .component('topMenu', topMenu)
    .component('pageHeading', pageHeading)
    .component('breadcrumb', breadcrumb)
    .component('panel', panel)
    .component('grid', grid)
    .component('icon', icon)
    .component('loadingIcon', loadingIcon)
    .component('buttonSpinner', buttonSpinner)
    .component('buttonDefault', buttonDefault)
    .component('labeledInput', labeledInput)
    .component('labeledTextarea', labeledTextarea)
    .component('gridActionCell', gridActionCell)
    .component('gridPublishedCell', gridPublishedCell)
    .component('modalAlert', modalAlert)
    .component('productEditorPopup', productEditorPopup)
    .component('collectionEditorPopup', collectionEditorPopup)
    .component('collectionSelectorPopup', collectionSelectorPopup)
    .component('languageSelector', languageSelector)
    .name;