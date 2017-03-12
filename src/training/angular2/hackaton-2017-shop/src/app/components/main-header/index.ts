import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: 'template.html'
})
export class MainHeaderComponent implements OnInit {
  public searchText: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  search() {
    let link = ['/search', this.searchText];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => params['searchText'] ? params['searchText'] as string : '')
      .subscribe(searchText => this.searchText = searchText);
  }
}
