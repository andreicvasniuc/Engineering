class CollectionImageProcessor
  attr_reader :processor

  def initialize(collection_id, file)
    @processor = ImageProcessor.new(self.class.full_folder_name(collection_id), file)
  end

  def save_image
    @processor.save_image
  end

  def self.get_relative_image_path(collection_id, name, extension, size)
    ImageProcessor.get_relative_image_path(full_folder_name(collection_id), name, extension, size)
  end

  def self.delete_folder(collection_id, name=nil)
    ImageProcessor.delete_folder(full_folder_name(collection_id), name)
  end

  def self.full_folder_name(collection_id)
    "collection_#{collection_id}"
  end
end