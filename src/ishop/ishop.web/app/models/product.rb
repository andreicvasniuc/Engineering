class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  #default_scope -> { order(:code => :asc) }
end
