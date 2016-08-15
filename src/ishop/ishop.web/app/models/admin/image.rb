class Admin::Image
  include Mongoid::Document
  include ImageConcern

  embedded_in :product, class_name: "Admin::Product"
end
