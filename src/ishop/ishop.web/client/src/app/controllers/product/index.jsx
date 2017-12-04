class ProductController {
  constructor($timeout, colorService, sizeService, collectionService, collectionRouter) {
    this.$timeout = $timeout;
    this.colorService = colorService;
    this.sizeService = sizeService;
    this.collectionService = collectionService;
    this.collectionRouter = collectionRouter;

    this.loadData();
  }

  loadData() {
    this.isLoadingSpinner = true;

    this.collectionService.get(this.collectionRouter.getId(), (collectionResponse) => {
      this.colorService.list((colorResponse) => {
        this.sizeService.list((sizeResponse) => {
          this.getProduct(collectionResponse.collection.products);
          this.setColor(colorResponse.colors);
          this.setSize(sizeResponse.sizes);
          this.$timeout(() => this.isLoadingSpinner = false, 50);
        });
      });
    });
  }

  getProduct(products) {
    this.product = products.find((product) => product.slug == this.collectionRouter.getProductId());
    if(!this.product) {
      // go to 404
      console.log('go to 404');
    }
  }

  setColor(colors) {
    this.product.color = this.getItem(colors, this.product.color_id);
  }

  setSize(sizes) {
    this.product.size = this.getItem(sizes, this.product.size_id);
  }

  getItem(items, itemId) {
    return items.find((item) => item._id.$oid == itemId);
  }
}

export default ProductController