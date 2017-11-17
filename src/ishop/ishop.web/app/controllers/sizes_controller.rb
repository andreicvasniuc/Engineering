class SizesController < ApplicationController
  # GET /api/sizes/list
  # GET /api/sizes/list.json
  def list
    render json: { sizes: Size.all }
  end
end
