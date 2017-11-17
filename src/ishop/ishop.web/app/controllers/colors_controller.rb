class ColorsController < ApplicationController
  # GET /api/colors/list
  # GET /api/colors/list.json
  def list
    render json: { colors: Color.all }
  end
end
