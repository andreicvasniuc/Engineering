# class Image::File
#   attr_reader :extension, :tempfile
#   attr_accessor :name

# # {"flowChunkNumber"=>"1", 
# # "flowChunkSize"=>"1048576", 
# # "flowCurrentChunkSize"=>"5262", 
# # "flowTotalSize"=>"5262", 
# # "flowIdentifier"=>"5262-indexjpeg", 
# # "flowFilename"=>"index.jpeg", 
# # "flowRelativePath"=>"index.jpeg", 
# # "flowTotalChunks"=>"1", 
# # "file"=>#<ActionDispatch::Http::UploadedFile:0x005612a36824f8 @tempfile=#<Tempfile:/tmp/RackMultipart20160730-7671-1uasgy9>, @original_filename="blob", @content_type="application/octet-stream", @headers="Content-Disposition: form-data; name=\"file\"; filename=\"blob\"\r\nContent-Type: application/octet-stream\r\n">, 
# # "controller"=>"admin/product_images", "action"=>"upload"}

#   def initialize(args)
#     @name = split_filename(args).first
#     @extension = split_filename(args).last
#     @tempfile = args[:file].tempfile
#   end

#   private
#     def split_filename(args)
#       args[:flowFilename].split(".")
#     end
# end