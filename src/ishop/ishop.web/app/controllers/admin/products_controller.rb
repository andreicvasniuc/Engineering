class Admin::ProductsController < SecuredController
  before_action :set_collection
  before_action :set_product, only: [:show, :update, :destroy]

  # POST /admin/collections/:collection_id/products/search
  # POST /admin/collections/:collection_id/products/search.json
  # def search
  #   @products, @total_count = @collection.search(params[:search], params[:pagination], params[:sorting])

  #   render json: { products: @products, totalCount: @total_count }
  # end

  # GET /admin/products/1
  # GET /admin/products/1.json
  def show
    render json: @product
  end

  # POST /admin/products
  # POST /admin/products.json
  def create
    @product = @collection.products.build(product_params)

    if @product.save
      render json: @product, status: :created#, location: @collection
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/products/1
  # PATCH/PUT /admin/products/1.json
  def update
    if @product.update(product_params)
      render json: @product, status: :ok#, location: @collection
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/products/1
  # DELETE /admin/products/1.json
  def destroy
    @product.destroy

    render json: @product, status: :ok#, location: @collection
  end
  
  private

    def set_collection
      @collection = Admin::Collection.find(params[:collection_id])
    end

    def set_product
      @product = @collection.products.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name, :description, :size_id, :published)
    end
end
