class Flow::FileUploader
  attr_reader :name, :tempfile

  def initialize(args)
    @name = args[:flowFilename]
    @tempfile = args[:file].tempfile
  end
end