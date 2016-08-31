class Admin::Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embeds_many :images, class_name: "Admin::Image"

  after_destroy :delete_folder_with_images

  def delete_folder_with_images
    Image::Processor.delete_folder(self._id)
  end

  def set_image_cover(image_id)
    self.images.each{ |image| image.is_cover = false }
    self.images.find(image_id).is_cover = true
    self.save
  end

  def self.get_list_with_cover_images
    # run this command 
    # db.products.find({},{code: 1, published: 1, updated_at: 1, images: {$elemMatch: {is_cover: true}}})
    list_json = collection.find({},{
      :projection => {
        :code => 1, 
        :published => 1, 
        :updated_at => 1, 
        :images => {'$elemMatch' => {:is_cover => true}}
      },
      :sort => {
        :updated_at => -1 # default sorting in Admin::Product
      }
    })
    list_json.map { |item_json| self.new(item_json) }
  end
end
