import { Component, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'product-tile',
  templateUrl: 'template.html'
})

export class ProductTileComponent {
  @Input() product: Product;

  constructor() { }
}
