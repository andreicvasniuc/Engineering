class Flow::File
  attr_reader :name, :tempfile, :product_id, :errors

# {"flowChunkNumber"=>"1", 
# "flowChunkSize"=>"1048576", 
# "flowCurrentChunkSize"=>"5262", 
# "flowTotalSize"=>"5262", 
# "flowIdentifier"=>"5262-indexjpeg", 
# "flowFilename"=>"index.jpeg", 
# "flowRelativePath"=>"index.jpeg", 
# "flowTotalChunks"=>"1", 
# "id"=>"576f96222bee510853000000", 
# "file"=>#<ActionDispatch::Http::UploadedFile:0x005612a36824f8 @tempfile=#<Tempfile:/tmp/RackMultipart20160730-7671-1uasgy9>, @original_filename="blob", @content_type="application/octet-stream", @headers="Content-Disposition: form-data; name=\"file\"; filename=\"blob\"\r\nContent-Type: application/octet-stream\r\n">, 
# "controller"=>"admin/product_images", "action"=>"upload"}

  def initialize(args)
    @name = args[:flowFilename]
    @tempfile = args[:file].tempfile
    @product_id = args[:product_id]
  end

  def save
    begin
      File.open(product_image_path, "w+b") { |f| f.write(@tempfile.read) }; return true
    rescue Exception => ex
      @errors = ex.message; return false
    end
  end

  private
    def product_image_path
      uploaded_images_path = Rails.root.join('public', 'uploaded_images').to_s
      create_directory(uploaded_images_path)

      uploaded_product_image_path = "#{uploaded_images_path}/#{@product_id}"
      create_directory(uploaded_product_image_path)
      
      "#{uploaded_product_image_path}/#{@name}"
    end

    def create_directory(dir_path)
      Dir.mkdir(dir_path) unless File.directory?(dir_path)
    end
end