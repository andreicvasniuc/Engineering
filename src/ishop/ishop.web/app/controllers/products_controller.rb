class ProductsController < ApplicationController
  # GET /products/top_list
  # GET /products/top_list.json
  def top_list
    @products = Product.top_list

    render json: { products: @products }
  end
end
