class Admin::ImagesController < ApplicationController
  before_action :set_product

  # POST /admin/products/:product_id/images/upload
  # POST /admin/products/:product_id/images/upload.json
  def upload
    flow_file = Flow::File.new(product_id, params)
    @image = @product.images.build({ extension: flow_file.extension })

    unless @image.save
      render json: @image.errors, status: :unprocessable_entity; return
    end

    flow_file.name = @image._id;

    if flow_file.save
      # render json: @image, status: :ok, location: admin_product_image_url(@product, @image)
      render json: @product, status: :ok, location: @product
    else
      render json: flow_file.errors, status: :unprocessable_entity
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
