class Admin::ProductImagesController < ApplicationController

  # POST /admin/products/upload
  # POST /admin/products/upload.json
  def upload
    iputs uploaded_file.tempfile.methods

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


  end

  private

  def uploaded_file
    params[:file]
  end

end
