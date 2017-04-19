class Admin::ProductImage < Admin::Image

  embedded_in :product, class_name: "Admin::Product"

  after_save :set_urls

  after_destroy :delete_image

  def delete_image
    ProductImage::Processor.delete_folder(self.product.collection._id, self.product._id, self._id)
  end

  private
    def set_urls
      self.product.create_image_url()
    end
end