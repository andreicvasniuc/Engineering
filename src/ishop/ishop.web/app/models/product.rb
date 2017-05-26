class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"
end
