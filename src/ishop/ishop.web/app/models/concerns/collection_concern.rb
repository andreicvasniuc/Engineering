require 'active_support/concern'

module CollectionConcern
  extend ActiveSupport::Concern

  included do
    store_in collection: 'collections'

    field :name, type: String, localize: true
    field :description, type: String, localize: true
    field :published, type: Boolean

    index name: 1
    index published: 1

    attr_accessor :products_count
    # default_scope -> { order(:updated_at => :desc) }

    after_initialize :create_image_url

    def create_image_url
      if self.image.present?
        self.image.small_image_url  = create_image_url_by_size(self.image, :small )
        self.image.medium_image_url = create_image_url_by_size(self.image, :medium)
        self.image.large_image_url  = create_image_url_by_size(self.image, :large )
      end

      self.products.each do |product|
        product.create_image_url()
      end if self.products.present?
    end

    def as_json(options={})
      attrs = super(options)

      attrs["products_count"] = self.products_count

      attrs["image"].merge!({
          :small_image_url => self.image.small_image_url,
          :medium_image_url => self.image.medium_image_url,
          :large_image_url => self.image.large_image_url
      }) if self.image.present?

        self.products.each_with_index do |product, index|
          attrs["products"][index] = product.as_json(attrs["products"][index])
        end if self.products.present?
      
      attrs
    end

    private
      def create_image_url_by_size(image, size)
        url = CollectionImageProcessor.get_relative_image_path(self._id, image._id, image.extension, size)
        url = 'http://localhost:3000' + url if Rails.env.development? # TODO: change when add figaro gem or somethng like that to have settongs foe each env
        return url
      end

  end
end