import template from './template.html';

import editIcon from 'images/edit.png';
import editIconHover from 'images/edit-hover.png';
import uploadIcon from 'images/upload.png';
import deleteIcon from 'images/delete.png';
import deleteIconHover from 'images/delete-hover.png';

class GridActionCellController {
  constructor() {
    this.editIcon = editIcon;
    this.editIconHover = editIconHover;
    this.uploadIcon = uploadIcon;
    this.deleteIcon = deleteIcon;
    this.deleteIconHover = deleteIconHover;
  }
}

let gridActionCell = {
  bindings: {
    entity: '=',
    editCallback: '&',
    uploadCallback: '&',
    deleteCallback: '&'
  },
  controller: GridActionCellController,
  templateUrl: template
};

export default gridActionCell