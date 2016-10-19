class Admin::ProductsController < AuthenticationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /admin/products
  # GET /admin/products.json
  # def index
  #   # sleep 1.5
  #   iputs params

  #   # request.base_url
  #   @products = Admin::Product.get_list_with_cover_images()

  #   # iputs @products
  #   # @products.each { |p| p.images.each { |i| iputs i.url } }

  #   render json: @products
  # end

  # POST /admin/products/list
  # POST /admin/products/list.json
  def list
    iputs params

    @products, @total_count = Admin::Product.get_list_and_total_count(params[:search], params[:pagination], params[:sorting])

    render json: { productList: @products, totalCount: @total_count }
  end

  # GET /admin/products/1
  # GET /admin/products/1.json
  def show
    # iputs @product
    render json: @product
  end

  # POST /admin/products
  # POST /admin/products.json
  def create
    # iputs product_params
    @product = Admin::Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/products/1
  # PATCH/PUT /admin/products/1.json
  def update
    if @product.update(product_params)
      render json: @product, status: :ok, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/products/1
  # DELETE /admin/products/1.json
  def destroy
    @product.destroy

    render json: @product, status: :ok, location: @product
  end
  
  private

    def set_product
      iputs params[:id]
      @product = Admin::Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:code, :published)
    end
end
