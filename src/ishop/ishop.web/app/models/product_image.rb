class ProductImage < Image
  embedded_in :product, class_name: "Product"
end
