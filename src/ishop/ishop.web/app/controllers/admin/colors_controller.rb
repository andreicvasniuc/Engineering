class Admin::ColorsController < SecuredController
  before_action :set_color, only: [:update, :destroy]

  # GET /admin/colors/list
  # GET /admin/colors/list.json
  def list
    @colors = Admin::Color.all

    render json: { colors: @colors }
  end

  # POST /admin/colors
  # POST /admin/colors.json
  def create
    @color = Admin::Color.new(color_params)

    if @color.save
      render json: @color, status: :created#, location: @color
    else
      render json: @color.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/colors/1
  # PATCH/PUT /admin/colors/1.json
  def update
    if @color.update(color_params)
      render json: @color, status: :ok#, location: @color
    else
      render json: @color.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/colors/1
  # DELETE /admin/colors/1.json
  def destroy
    @color.destroy

    render json: @color, status: :ok#, location: @color
  end

  private
    def set_color
      @color = Admin::Color.find(params[:id])
    end

    def color_params
      params.require(:color).permit(:name)
    end
end
