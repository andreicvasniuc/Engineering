class Admin::ProductsController < SecuredController
  before_action :set_product, only: [:show, :update, :destroy]

  # POST /admin/collections/:collection_id/products/search
  # POST /admin/collections/:collection_id/products/search.json
  def search
    # get collectionId and related products !!!!!!!!!!!!!
    @products, @total_count = Admin::Product.search(params[:search], params[:pagination], params[:sorting])

    render json: { products: @products, totalCount: @total_count }
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
      @product = Admin::Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:code, :published)
    end
end
