class Collection
  include Mongoid::Document
  include Mongoid::Timestamps
  include CollectionConcern

  embeds_one :image, class_name: "CollectionImage"
  embeds_many :products, class_name: "Product"

  scope :published, -> { where(published: true) }

  def self.search(search, pagination, sorting)
    ### this query does NOT provide a way to get products_count
    query = self.published
                .or({name: {'$regex' => search}}, {:description => {'$regex' => search}})
                .only(:name, :description)
                .order_by(sorting[:field]=> sorting[:direction])
                .skip(pagination[:skip])
                .limit(pagination[:take])

    [query, self.count]
  end
end
