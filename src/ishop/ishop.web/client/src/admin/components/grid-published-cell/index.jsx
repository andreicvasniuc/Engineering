import template from './template.html';
import publishedIcon from 'images/published.png';
import unpublishedIcon from 'images/unpublished.png';

class GridPublishedCellController {
  constructor() {
    this.publishedIcon = publishedIcon;
    this.unpublishedIcon = unpublishedIcon;
  }

  startSavingSpinner() { this.isSavingSpinner = true; }
  stopSavingSpinner() { this.isSavingSpinner = false; }

  publish() {
    this.startSavingSpinner();
    this.toggleCallback({ published: true, callback: () => { this.stopSavingSpinner(); } });
  }

  unpublish() {
    this.startSavingSpinner();
    this.toggleCallback({ published: false, callback: () => { this.stopSavingSpinner(); } }); 
  }
}

let gridPublishedCell = {
  bindings: {
    published: '=',
    toggleCallback: '&'
  },
  controller: GridPublishedCellController,
  templateUrl: template
};

export default gridPublishedCell