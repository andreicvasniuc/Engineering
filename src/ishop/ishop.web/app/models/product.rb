class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Collection"
  embeds_many :images, class_name: "ProductImage"

  scope :published, -> { where("products.published" => true) }

  def self.top_list
    get_products { |query| query.where("products.is_top" => true) }
  end

  def self.list
    get_products
  end

  private
    def self.get_products
      collection_query = Collection.only(:products).published
      yield(collection_query) if block_given?
      products = collection_query.map { |collection| collection.products }.flatten
      products
    end
end
