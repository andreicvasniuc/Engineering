class CollectionImage < Image
  embedded_in :collection, class_name: "Collection"
end
