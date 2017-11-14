class Collection
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Slug
  include CollectionConcern

  embeds_one :image, class_name: "CollectionImage"
  embeds_many :products, class_name: "Product"

  scope :published, -> { where( published: true ) }
  scope :dresses, -> { any_of({ has_accessories: false }, { has_accessories: nil }) }
  scope :accessories, -> { where( has_accessories: true ) }
  scope :latest, -> { order( created_at: :desc ) }
  scope :base_info, -> { only( :name, :description, :image, :_slugs ) }

  # def self.search(search, pagination, sorting)
  #   ### this query does NOT provide a way to get products_count
  #   query = self.published
  #               .or({name: {'$regex' => search}}, {:description => {'$regex' => search}})
  #               .only(:name, :description)
  #               .order_by(sorting[:field]=> sorting[:direction])
  #               .skip(pagination[:skip])
  #               .limit(pagination[:take])

  #   [query, self.count]
  # end

  def self.published_dresses
    self.published.dresses.latest.base_info
  end

  def self.published_accessories
    self.published.accessories.latest.base_info
  end
end
