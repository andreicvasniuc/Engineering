class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"

  # scope :published, -> { where("products.published" => true) }

  def self.top_list
    collection_query = published_collection.where("products.is_top" => true)
    get_products(collection_query)
  end

  def self.dresses
    collection_query = published_collection.or({"products.is_accessory" => false}, {"products.is_accessory" => nil})
    get_products(collection_query)
  end

  def self.accessories
    collection_query = published_collection.where("products.is_accessory" => true)
    get_products(collection_query)
  end

  private
    def self.published_collection
      Collection.only(:products).published.where("products.published" => true)
    end

    def self.get_products(collection_query)
      collection_query.map { |collection| collection.products }.flatten
    end
end
