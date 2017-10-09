import { Component } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: 'template.html'
})
export class MainHeaderComponent {
  public logo: any = require('images/logo.png');

  constructor() { }
}
