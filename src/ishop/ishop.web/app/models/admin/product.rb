class Admin::Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Admin::Collection"
  embeds_many :images, class_name: "Admin::ProductImage"

  after_create :create_for_all_locales

  def set_image_cover(image_id)
    self.images.each{ |image| image.is_cover = false }
    self.images.find(image_id).is_cover = true
    self.save
  end

  def create_for_all_locales
    saved_name = self.name
    saved_description = self.description
    
    LocaleLooper.run do
      self.name = saved_name
      self.description = saved_description
    end

    self.save
  end
end
