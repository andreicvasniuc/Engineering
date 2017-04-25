class Admin::SizesController < SecuredController
  before_action :set_size, only: [:update, :destroy]

  # GET /admin/sizes/list
  # GET /admin/sizes/list.json
  def list
    @sizes = Admin::Size.all

    render json: { sizes: @sizes }
  end

  # POST /admin/sizes
  # POST /admin/sizes.json
  def create
    @size = Admin::Size.new(size_params)

    if @size.save
      render json: @size, status: :created, location: @size
    else
      render json: @size.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/sizes/1
  # PATCH/PUT /admin/sizes/1.json
  def update
    if @size.update(size_params)
      render json: @size, status: :ok, location: @size
    else
      render json: @size.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/sizes/1
  # DELETE /admin/sizes/1.json
  def destroy
    @size.destroy

    render json: @size, status: :ok, location: @size
  end

  private
    def set_size
      @size = Admin::Size.find(params[:id])
    end

    def size_params
      params.require(:size).permit(:name)
    end
end
