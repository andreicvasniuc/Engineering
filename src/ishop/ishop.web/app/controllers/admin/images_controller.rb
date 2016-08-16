class Admin::ImagesController < ApplicationController
  before_action :set_product
  before_action :set_image, only: [:show]

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
      render json: @product, status: :ok, location: admin_product_url(@product)
    else
      render json: flow_file.errors, status: :unprocessable_entity
    end
  end

  private
    def product_id
      params[:product_id]
    end

    def set_product
      @product = Admin::Product.find(product_id)
    end

    # def is_cover
    #   params[:coverImageIdentifier] == params[:flowIdentifier]
    # end
end
