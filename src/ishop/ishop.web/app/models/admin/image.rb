class Admin::Image
  include Mongoid::Document
  include ImageConcern

  embedded_in :product, class_name: "Admin::Product"

  after_destroy :delete_image

  def delete_image
    Flow::File.delete_image(self.product._id, self._id, self.extension)
    Flow::File.delete_folder(self.product._id) if self.product.images.empty?
  end
end
