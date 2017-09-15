class Admin::CollectionImage < Admin::Image
  embedded_in :collection, class_name: "Admin::Collection"
end