class CollectionImage::Processor
  attr_reader :processor

  def initialize(collection_id, file)
    @processor = Image::Processor.new(self.class.full_folder_name(collection_id), file)
  end

  def save_image
    @processor.save_image
  end

  def self.get_relative_image_path(folder_name, name, extension, size)
    Image::Processor.get_relative_image_path(full_folder_name(folder_name), name, extension, size)
  end

  def self.delete_folder(folder_name, name=nil)
    Image::Processor.delete_folder(full_folder_name(folder_name), name)
  end

  def self.full_folder_name(collection_id)
    "collection_#{collection_id}"
  end
end