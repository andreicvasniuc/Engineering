class Admin::ProductImagesController < ApplicationController

  # POST /admin/product_images/upload
  # POST /admin/product_images/upload.json
  def upload
    # save_file()

    flowFile = FlowFile.new(params)
    iputs flowFile

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

    render json: { message: 'Ok' }, status: :ok

  end

  private

  def uploaded_file
    params[:file].tempfile
  end

  def uploaded_file_name
    params[:flowFilename]
  end

  def uploaded_file_folder
    params[:product_id]
  end

  def create_uploaded_images_path
    uploaded_images_path = "#{Rails.root.join('public', 'uploaded_images').to_s}/#{uploaded_file_folder}"
    
    Dir.mkdir(uploaded_images_path) unless File.directory?(uploaded_images_path)
    
    "#{uploaded_images_path}/#{uploaded_file_name}"
  end

  def save_file
    uploaded_images_path = create_uploaded_images_path()

    File.open(uploaded_images_path, "w+b") do |f| 
      f.write(uploaded_file.read)
    end
  end

end
