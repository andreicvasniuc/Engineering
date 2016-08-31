require 'active_support/concern'

module ProductConcern
  extend ActiveSupport::Concern

  included do
    store_in collection: 'products'

    field :code, type: String
    field :published, type: Boolean
    # field :_id, type: String, default: -> { code }

    index code: 1
    index published: 1

    default_scope -> { order(:updated_at => :desc) }

    after_initialize :create_image_url

    def create_image_url
      self.images.each do |image|
        image.url = Image::Processor.get_relative_image_path(self._id, image._id, image.extension)
        image.url = 'http://localhost:3000' + image.url if Rails.env.development? # TODO: change when add figaro gem or somethng like that to have settongs foe each env
      end
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