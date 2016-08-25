class ImageProcessor
  attr_reader :flow_file, :folder_name, :errors

  def initialize(folder_name, flow_file)
    @folder_name = folder_name
    @flow_file = flow_file
  end

  def save
    begin
      File.open(product_image_path, "w+b") { |f| f.write(@flow_file.tempfile.read) }; return true
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

  def self.get_relative_image_path(folder_name, name, extension)
    relative_image_path = get_product_image_path(folder_name, name, extension)
    relative_image_path.sub(Rails.root.join('public').to_s, '')
  end

  private

    def product_image_path
      self.class.get_product_image_path(@folder_name, @flow_file.name, @flow_file.extension)
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