require 'active_support/concern'

module ProductConcern
  extend ActiveSupport::Concern

  included do
    # store_in collection: 'products'

    field :name, type: String, localize: true
    field :description, type: String, localize: true
    field :published, type: Boolean
    field :is_top, type: Boolean
    field :is_accessory, type: Boolean
    field :size_id, type: String
    field :color_id, type: String
    # field :_id, type: String, default: -> { name }

    # index name: 1
    # index published: 1

    default_scope -> { order(:updated_at => :desc) }

    # after_initialize :create_image_url

    def create_image_url
      self.images.each do |image|
        image.small_image_url  = create_image_url_by_size(image, :small )
        image.medium_image_url = create_image_url_by_size(image, :medium)
        image.large_image_url  = create_image_url_by_size(image, :large )
      end
    end

    def as_json(options={})
      attrs = super(options)

      self.images.each_with_index do |image, index|
        attrs["images"][index].merge!({
          :small_image_url => image.small_image_url,
          :medium_image_url => image.medium_image_url,
          :large_image_url => image.large_image_url
        })
        attrs["cover_image"] = attrs["images"][index] if image.is_cover
      end
      
      attrs
    end

    private
      def create_image_url_by_size(image, size)
        url = ProductImageProcessor.get_relative_image_path(self.collection._id, self._id, image._id, image.extension, size)
        url = 'http://localhost:3000' + url if Rails.env.development? # TODO: change when add figaro gem or somethng like that to have settongs foe each env
        return url
      end
  end

  # for the given article/event returns the first comment
  # def find_first_comment
  #     comments.first(created_at DESC)
  # end

  # module ClassMethods     
  #     def least_commented
  #        #returns the article/event which has the least number of comments
  #     end
  # end 
end