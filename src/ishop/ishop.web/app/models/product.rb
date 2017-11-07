class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Slug
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"

  # scope :published, -> { where("products.published" => true) }

  def self.top_list
    criteria = published_collection.where("products.is_top" => true)
    get_products(criteria).select{ |product| product.published && product.is_top }
  end

  # def self.dresses
  #   criteria = published_collection.or({"products.is_accessory" => false}, {"products.is_accessory" => nil})
  #   get_products(criteria)
  # end

  # def self.accessories
  #   criteria = published_collection.where("products.is_accessory" => true)
  #   get_products(criteria)
  # end

  def self.get(id)
    criteria = published_collection.where("products._id" => BSON::ObjectId(id))
    get_products(criteria).first
  end

  private
    def self.published_collection
      Collection.only(:products, :_slugs).published.where("products.published" => true)
    end

    def self.get_products(criteria)
      criteria.map { |collection| collection.products }.flatten
    end
end
