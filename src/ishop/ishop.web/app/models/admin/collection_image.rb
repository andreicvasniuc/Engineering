class Admin::CollectionImage < Admin::Image
  embedded_in :collection, class_name: "Admin::Collection"

  after_save :set_urls

  after_destroy :delete_image

  def delete_image
    CollectionImage::Processor.delete_folder(self.collection._id, self._id)
  end

  private
    def set_urls
      self.collection.create_image_url()
    end
end