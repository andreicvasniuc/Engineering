require 'active_support/concern'

module ImageConcern
  extend ActiveSupport::Concern

  included do
    field :extension, type: String
    field :is_cover, type: Boolean

    index is_cover: 1

    default_scope -> { order(:_id => :asc) }

    attr_accessor :small_image_url, :medium_image_url, :large_image_url

    # after_save :set_urls

    private
      # def set_urls
      #   self.collection.create_image_url() unless self.collection.nil?
      #   self.product.create_image_url() unless self.product.nil?
      # end
  end
end