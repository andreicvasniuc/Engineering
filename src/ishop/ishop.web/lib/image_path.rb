class ImagePath
  attr_reader :folder_name, :image_name, :image_extension, :image_size, :is_relative, :path

  def initialize(folder_name, image_name=nil, image_extension=nil, image_size=nil, is_relative=false)
    @folder_name = folder_name
    @image_name = image_name
    @image_extension = image_extension
    @image_size = image_size
    @is_relative = is_relative
    create_path()
  end

  def to_s
    @path
  end

  private
    def create_path
      @path = "/uploads"

      unless @is_relative
        @path =  Rails.root.join('public').to_s + @path
        create_directory(@path)
      end

      @path = "#{@path}/collection_product_images"
      create_directory(@path) unless @is_relative

      @path = "#{@path}/#{@folder_name}"

      unless @image_name.nil?
        create_directory(@path) unless @is_relative
        @path = "#{@path}/#{@image_name}"
      end

      unless @image_extension.nil? || @image_size.nil?
        create_directory(@path) unless @is_relative
        @path = "#{@path}/#{@image_size}.#{@image_extension}"
      end
    end

    def create_directory(dir_path)
      Dir.mkdir(dir_path) unless File.directory?(dir_path)
    end
end