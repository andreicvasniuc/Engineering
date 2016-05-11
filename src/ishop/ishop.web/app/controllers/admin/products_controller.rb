class Admin::ProductsController < ApplicationController
  before_action :set_admin_product, only: [:show, :update, :destroy]

  # GET /admin/products
  # GET /admin/products.json
  def index
    sleep 1.5
    @admin_products = Admin::Product.all
    iputs @admin_products.first

    render json: @admin_products
  end

  # GET /admin/products/1
  # GET /admin/products/1.json
  def show
    render json: @admin_product
  end

  # POST /admin/products
  # POST /admin/products.json
  def create
    @admin_product = Admin::Product.new(admin_product_params)

    if @admin_product.save
      render json: @admin_product, status: :created, location: @admin_product
    else
      render json: @admin_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/products/1
  # PATCH/PUT /admin/products/1.json
  def update
    @admin_product = Admin::Product.find(params[:id])

    if @admin_product.update(admin_product_params)
      head :no_content
    else
      render json: @admin_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/products/1
  # DELETE /admin/products/1.json
  def destroy
    @admin_product.destroy

    head :no_content
  end

  private

    def set_admin_product
      @admin_product = Admin::Product.find(params[:id])
    end

    def admin_product_params
      params[:admin_product]
    end
end
