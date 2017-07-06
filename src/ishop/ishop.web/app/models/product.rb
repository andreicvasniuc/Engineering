class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"

  def self.top_list
    Collection.only(:products).where("products.is_top" => true).pluck(:products).flatten
  end
end
