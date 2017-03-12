import { Component, Input, OnInit } from '@angular/core';

import { NavigationService } from '../../services/navigation.service';
import { Navigation } from '../../models/navigation';

@Component({
  selector: 'navigation',
  templateUrl: 'template.html'
})
export class NavigationComponent implements OnInit {
  public navigation: Navigation;
  @Input() isTitleBold: boolean;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigation = this.navigationService.getNavigation();
  }
}
