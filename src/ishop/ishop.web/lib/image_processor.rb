class ImageProcessor
  attr_reader :file, :folder_name, :errors

  def initialize(folder_name, file)
    @folder_name = folder_name
    @file = file
  end

  def save_image
    begin
      save_and_resize_images(); return true
    rescue Exception => ex
      @errors = ex.message; return false
    end
  end

  # def self.delete_image(folder_name, name, extension)
  #   image_path = get_image_path(folder_name, name, extension)
  #   File.delete(image_path) if File.exist?(image_path)
  # end

  def self.delete_folder(folder_name, name=nil)
    image_path = get_image_path(folder_name, name)
    FileUtils.rm_rf(image_path)
  end

  def self.get_relative_image_path(folder_name, name, extension, size)
    get_image_path(folder_name, name, extension, size, true)
  end

  private

    def save_and_resize_images
      image = MiniMagick::Image.new(@file.tempfile.path)

      image.resize "1200" # 1200x1800
      image.write image_path(:large)

      image.resize "450" # 450x675
      image.write image_path(:medium)

      image.resize "150" # 150x225
      image.write image_path(:small)

      # File.open(image_path, "w+b") do |f| 
      #   f.write(@file.tempfile.read)
      # end
    end

    def image_path(size)
      self.class.get_image_path(@folder_name, @file.name, @file.extension, size)
    end

    def self.get_image_path(folder_name, name=nil, extension=nil, size=:small, is_relative=false)
      ImagePath.new(folder_name, name.nil? ? "" : "image_#{name}", extension, size, is_relative).to_s
    end
end