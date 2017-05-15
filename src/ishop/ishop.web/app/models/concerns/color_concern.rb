require 'active_support/concern'

module ColorConcern
  extend ActiveSupport::Concern

  included do
    store_in collection: 'colors'

    field :name, type: String, localize: true

    index name: 1

    default_scope -> { order(:name => :asc) }
  end
end