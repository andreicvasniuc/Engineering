class Flow::File
  attr_reader :extension, :tempfile, :folder_name, :errors
  attr_accessor :name

# {"flowChunkNumber"=>"1", 
# "flowChunkSize"=>"1048576", 
# "flowCurrentChunkSize"=>"5262", 
# "flowTotalSize"=>"5262", 
# "flowIdentifier"=>"5262-indexjpeg", 
# "flowFilename"=>"index.jpeg", 
# "flowRelativePath"=>"index.jpeg", 
# "flowTotalChunks"=>"1", 
# "file"=>#<ActionDispatch::Http::UploadedFile:0x005612a36824f8 @tempfile=#<Tempfile:/tmp/RackMultipart20160730-7671-1uasgy9>, @original_filename="blob", @content_type="application/octet-stream", @headers="Content-Disposition: form-data; name=\"file\"; filename=\"blob\"\r\nContent-Type: application/octet-stream\r\n">, 
# "controller"=>"admin/product_images", "action"=>"upload"}

  def initialize(folder_name, args)
    @folder_name = folder_name
    @name = split_filename(args).first
    @extension = split_filename(args).last
    @tempfile = args[:file].tempfile
  end

  def save
    begin
      File.open(product_image_path, "w+b") { |f| f.write(@tempfile.read) }; return true
    rescue Exception => ex
      @errors = ex.message; return false
    end
  end

  def self.delete_image(folder_name, name, extension)
    product_image_path = get_product_image_path(folder_name, name, extension)
    File.delete(product_image_path) if File.exist?(product_image_path)
  end

  def self.delete_folder(folder_name)
    uploaded_product_image_path = get_uploaded_product_image_path(folder_name)
    FileUtils.rm_rf(uploaded_product_image_path)
  end

  private
    def split_filename(args)
      args[:flowFilename].split(".")
    end

    def product_image_path
      self.class.get_product_image_path(@folder_name, @name, @extension)
    end

    def self.get_product_image_path(folder_name, name, extension)
      uploaded_product_image_path = get_uploaded_product_image_path(folder_name)
      create_directory(uploaded_product_image_path)
      
      "#{uploaded_product_image_path}/#{name}.#{extension}"
    end

    def self.get_uploaded_product_image_path(folder_name)
      uploaded_images_path = Rails.root.join('public', 'product_images').to_s
      create_directory(uploaded_images_path)

      "#{uploaded_images_path}/#{folder_name}"
    end

    def self.create_directory(dir_path)
      Dir.mkdir(dir_path) unless File.directory?(dir_path)
    end
end