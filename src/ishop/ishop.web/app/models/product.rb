class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :code, type: String
  # field :_id, type: String, default: -> { code }

  index code: 1

  default_scope -> { order(:updated_at => :desc) } 
end
