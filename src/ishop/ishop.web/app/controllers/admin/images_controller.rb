class Admin::ImagesController < AuthenticationController
  before_action :set_product

  # POST /admin/products/:product_id/images/upload
  # POST /admin/products/:product_id/images/upload.json
  def upload
    image_file = ::Image::File.new(params)
    @image = @product.images.build({ extension: image_file.extension })

    unless @image.save
      render json: @image.errors, status: :unprocessable_entity; return
    end

    image_file.name = @image._id
    image_processor = Image::Processor.new(product_id, image_file)

    if image_processor.save_image
      render json: @product, status: :ok, location: @product
    else
      render json: image_processor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/products/:product_id/images/:id/make_cover
  # PATCH/PUT /admin/products/:product_id/images/:id/make_cover.json
  def make_cover
    if @product.set_image_cover(image_id)
      render json: @product, status: :ok, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/products/:product_id/images/:id
  # DELETE /admin/products/:product_id/images/:id.json
  def destroy
    image = @product.images.find(image_id)
    image.destroy

    render json: @product, status: :ok, location: @product
  end

  private
    def product_id
      params[:product_id]
    end

    def set_product
      @product = Admin::Product.find(product_id)
    end

    def image_id
      params[:id]
    end
end
