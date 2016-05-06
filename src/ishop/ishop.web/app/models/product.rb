class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :code, type: String
  # field :_id, type: String, default: -> { code }
end
