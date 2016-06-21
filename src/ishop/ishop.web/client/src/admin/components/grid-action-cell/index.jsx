import template from './template.html';

import editIcon from 'assets/images/edit.png';
import editIconHover from 'assets/images/edit-hover.png';
import deleteIcon from 'assets/images/delete.png';
import deleteIconHover from 'assets/images/delete-hover.png';

class GridActionCellController {
  constructor() {
    this.editIcon = editIcon;
    this.editIconHover = editIconHover;
    this.deleteIcon = deleteIcon;
    this.deleteIconHover = deleteIconHover;
  }
}

let gridActionCell = {
  bindings: {
    entity: '=',
    editCallback: '&',
    deleteCallback: '&'
  },
  controller: GridActionCellController,
  templateUrl: template
};

export default gridActionCell