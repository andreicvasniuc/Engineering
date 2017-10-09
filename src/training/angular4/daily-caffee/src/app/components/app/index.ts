import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})

export class AppComponent {
  constructor(private location: Location) {
  }

  public isHidden(): boolean {
    let list = ["/login"];
    let route = this.location.path();

    return list.indexOf(route) > -1;
  }
}
