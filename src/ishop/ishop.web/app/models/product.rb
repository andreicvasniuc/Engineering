class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"

  def self.top_list
    collections = Collection.only(:products).where("products.is_top" => true)
    products = collections.map { |collection| collection.products }.flatten
    products
  end
end
