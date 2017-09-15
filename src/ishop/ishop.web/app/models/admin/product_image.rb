class Admin::ProductImage < Admin::Image
  embedded_in :product, class_name: "Admin::Product"
end