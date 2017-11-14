class ProductsController < ApplicationController
  def top_list
    render json: { products: Product.top_list }
  end

  # def dresses
  #   render json: { products: Product.dresses }
  # end

  # def accessories
  #   render json: { products: Product.accessories }
  # end

  # def show
  #   render json: { product: Product.get(product_id) }
  # end

  # private
  #   def product_id
  #     params[:id]
  #   end
end
