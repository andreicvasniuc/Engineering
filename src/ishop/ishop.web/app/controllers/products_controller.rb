class ProductsController < ApplicationController
  # GET /products/top_list
  # GET /products/top_list.json
  def top_list
    @products = Product.top_list

    render json: { products: @products }
  end

  # GET /products/list
  # GET /products/list.json
  def list
    @products = Product.list

    render json: { products: @products }
  end
end
