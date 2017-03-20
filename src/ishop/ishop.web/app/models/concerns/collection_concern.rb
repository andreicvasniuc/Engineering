require 'active_support/concern'

module CollectionConcern
  extend ActiveSupport::Concern

  included do
    store_in collection: 'collections'

    field :name, type: String
    field :description, type: String
    field :published, type: Boolean

    index name: 1
    index published: 1

    default_scope -> { order(:updated_at => :desc) }

    after_initialize :create_image_url

    def create_image_url
      return if self.image.nil?
      self.image.small_image_url  = create_image_url_by_size(self.image, :small )
      self.image.medium_image_url = create_image_url_by_size(self.image, :medium)
      self.image.large_image_url  = create_image_url_by_size(self.image, :large )
    end

    private
      def create_image_url_by_size(image, size)
        url = CollectionImage::Processor.get_relative_image_path(self._id, image._id, image.extension, size)
        url = 'http://localhost:3000' + url if Rails.env.development? # TODO: change when add figaro gem or somethng like that to have settongs foe each env
        return url
      end

  end
end