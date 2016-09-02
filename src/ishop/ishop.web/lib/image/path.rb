class Image::Path
  attr_reader :folder_name, :image_name, :image_extension, :is_relative, :path

  def initialize(folder_name, image_name=nil, image_extension=nil, is_relative=false)
    @folder_name = folder_name
    @image_name = image_name
    @image_extension = image_extension
    @is_relative = is_relative
    create_path()
  end

  def to_s
    @path
  end

  private
    def create_path
      @path = "/uploads/product_images"

      unless @is_relative
        @path =  Rails.root.join('public').to_s + @path
        create_directory(@path)
      end

      @path = "#{@path}/#{@folder_name}"

      unless @image_name.nil? || @image_extension.nil?
        create_directory(@path) unless @is_relative
        @path = "#{@path}/#{@image_name}.#{@image_extension}"
      end
    end

    def create_directory(dir_path)
      Dir.mkdir(dir_path) unless File.directory?(dir_path)
    end
end