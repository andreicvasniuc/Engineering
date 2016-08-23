require 'active_support/concern'

module ImageConcern
  extend ActiveSupport::Concern

  included do
    field :extension, type: String
    field :is_cover, type: Boolean

    field :url, type: String # used to send an url to UI, it is NOT saved in db

    index is_cover: 1

    default_scope -> { order(:_id => :asc) }
  end
end