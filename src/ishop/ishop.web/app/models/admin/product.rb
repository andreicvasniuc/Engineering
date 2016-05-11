class Admin::Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern
end
