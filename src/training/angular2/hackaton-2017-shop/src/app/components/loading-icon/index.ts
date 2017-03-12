import { Component } from '@angular/core';

@Component({
  selector: 'loading-icon',
  templateUrl: 'template.html'
})
export class LoadingIconComponent {
  public loadingIcon: any = require('images/loading.gif');

  constructor() { }
}

