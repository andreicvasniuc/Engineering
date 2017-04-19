class ProductImage::Processor

  def initialize(collection_id, product_id, file)
    @processor = Image::Processor.new(self.class.full_folder_name(collection_id, product_id), file)
  end

  def save_image
    @processor.save_image
  end

  def self.get_relative_image_path(collection_id, product_id, name, extension, size)
    Image::Processor.get_relative_image_path(full_folder_name(collection_id, product_id), name, extension, size)
  end

  def self.delete_folder(collection_id, product_id, name=nil)
    Image::Processor.delete_folder(full_folder_name(collection_id, product_id), name)
  end

  def self.full_folder_name(collection_id, product_id)
    "#{CollectionImage::Processor.full_folder_name(collection_id)}/product_#{product_id}"
  end
end