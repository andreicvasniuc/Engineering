class ProductImage::Processor

  def initialize(collection_id, product_id, file)
    @processor = Image::Processor.new(self.class.full_folder_name(collection_id, product_id), file)
  end

  def save_image
    @processor.save_image
  end

  def self.full_folder_name(collection_id, product_id)
    "#{CollectionImage::Processor.full_folder_name(collection_id)}/product_#{product_id}"
  end
end