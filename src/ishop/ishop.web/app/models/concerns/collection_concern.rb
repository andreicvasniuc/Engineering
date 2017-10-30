require 'active_support/concern'

module CollectionConcern
  extend ActiveSupport::Concern

  included do
    store_in collection: 'collections'

    field :name, type: String, localize: true
    field :description, type: String, localize: true
    field :published, type: Boolean
    field :has_accessories, type: Boolean

    index name: 1
    index published: 1

    slug :name

    attr_accessor :products_count
    # default_scope -> { order(:updated_at => :desc) }

    def as_json(options={})
      attrs = super(options)

      attrs["products_count"] = self.products_count || (self.products || []).count
      attrs["slug"] = self.slug;

        self.products.each_with_index do |product, index|
          attrs["products"][index] = product.as_json(attrs["products"][index])
        end if self.products.present?
      
      attrs
    end

  end
end