require 'active_support/concern'

module ImageConcern
  extend ActiveSupport::Concern

  included do
    field :extension, type: String
    field :is_cover, type: Boolean

    index is_cover: 1

    default_scope -> { order(:is_cover => :desc) } 
  end
end