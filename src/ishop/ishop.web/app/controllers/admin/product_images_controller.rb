class Admin::ProductImagesController < ApplicationController

  # POST /admin/product_images/upload
  # POST /admin/product_images/upload.json
  def upload
    # save_file()

    flowFile = Flow::File.new(params)
    # iputs flowFile

    # iputs flowFile.save

    if flowFile.save
      # save in db
      render json: flowFile, status: :created, location: flowFile
    else
      render json: flowFile.errors, status: :unprocessable_entity
    end

    render json: { message: 'Ok' }, status: :ok

  end

end
