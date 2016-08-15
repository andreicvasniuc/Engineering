class Admin::ImagesController < ApplicationController
  before_action :set_product
  before_action :set_image, only: [:show]

  # POST /admin/products/:product_id/images/upload
  # POST /admin/products/:product_id/images/upload.json
  def upload
    iputs params
    iputs @product
    iputs is_cover

    flow_file = Flow::File.new(product_id, params)
    @image = @product.images.build(image_params(flow_file.extension))

    if @image.save
      # iputs @image
      flow_file.name = @image._id;

      if flow_file.save
        # render json: { message: 'The image was uploaded successfully.' }, status: :ok
        render json: @image, status: :created, location: admin_product_image_url(@product, @image)
      else
        render json: flow_file.errors, status: :unprocessable_entity
      end
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  private
    def product_id
      params[:product_id]
    end

    def set_product
      @product = Admin::Product.find(product_id)
    end

    def image_params(extension)
      { extension: extension, is_cover: is_cover }
    end

    def is_cover
      params[:coverImageIdentifier] == params[:flowIdentifier]
    end
end
