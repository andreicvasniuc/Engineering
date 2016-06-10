class Admin::ProductsController < ApplicationController
  before_action :set_admin_product, only: [:show, :update, :destroy]

  # GET /admin/products
  # GET /admin/products.json
  def index
    # sleep 1.5
    @products = Admin::Product.all
    iputs @products.first

    render json: @products
  end

  # GET /admin/products/1
  # GET /admin/products/1.json
  def show
    render json: @product
  end

  # POST /admin/products
  # POST /admin/products.json
  def create
    iputs product_params
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
    @product = Admin::Product.find(params[:id])

    if @product.update(product_params)
      head :no_content
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/products/1
  # DELETE /admin/products/1.json
  def destroy
    @product.destroy

    head :no_content
  end

  private

    def set_admin_product
      @product = Admin::Product.find(params[:id])
    end

    def product_params
      params[:product]
    end
end
