class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"

  def self.top_list
    # products = Collection.only(:products).where("products.is_top" => true).pluck(:products).flatten
    # products_json = Collection.only(:products).pluck(:products).flatten
    # products = products_json.map do |product_json| 
    #   product = self.new(product_json)
    #   product.create_image_url()
    # end
    collections = Collection.only(:products)
    products = collections.map { |collection| collection.products }.flatten[0..5]
    iputs products.size
    products
  end
end
