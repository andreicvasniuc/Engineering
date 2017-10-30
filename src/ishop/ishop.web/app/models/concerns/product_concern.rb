require 'active_support/concern'

module ProductConcern
  extend ActiveSupport::Concern

  included do
    field :name, type: String, localize: true
    field :description, type: String, localize: true
    field :published, type: Boolean
    field :is_top, type: Boolean
    field :size_id, type: String
    field :color_id, type: String

    slug :name

    default_scope -> { order(:updated_at => :desc) }

    def as_json(options={})
      attrs = super(options)

      attrs["slug"] = self.slug;

      self.images.each_with_index do |image, index|
        attrs["cover_image"] = attrs["images"][index] if image.is_cover
      end
      
      attrs
    end
  end
end