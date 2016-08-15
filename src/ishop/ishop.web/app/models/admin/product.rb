class Admin::Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embeds_many :images, class_name: "Admin::Image"

  after_destroy :delete_folder_with_images

  def delete_folder_with_images
    iputs 'delete_folder_with_images'
    iputs self
    Flow::File.delete_folder(self._id)
  end
end
