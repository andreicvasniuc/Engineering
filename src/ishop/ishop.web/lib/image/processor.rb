class Image::Processor
  attr_reader :file, :folder_name, :errors

  def initialize(folder_name, file)
    @folder_name = folder_name
    @file = file
  end

  def save_image
    begin
      File.open(image_path, "w+b") { |f| f.write(@file.tempfile.read) }; return true
    rescue Exception => ex
      @errors = ex.message; return false
    end
  end

  def self.delete_image(folder_name, name, extension)
    image_path = get_image_path(folder_name, name, extension)
    File.delete(image_path) if File.exist?(image_path)
  end

  def self.delete_folder(folder_name)
    image_path = get_image_path(folder_name)
    FileUtils.rm_rf(image_path)
  end

  def self.get_relative_image_path(folder_name, name, extension)
    get_image_path(folder_name, name, extension, true)
  end

  private

    def image_path
      self.class.get_image_path(@folder_name, @file.name, @file.extension)
    end

    def self.get_image_path(folder_name, name=nil, extension=nil, is_relative=false)
      Image::Path.new(folder_name, name, extension, is_relative).to_s
    end
end