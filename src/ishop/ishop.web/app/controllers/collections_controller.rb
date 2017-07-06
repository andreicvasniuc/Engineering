class CollectionsController < ApplicationController
  # POST /api/collections/search
  # POST /api/collections/search.json
  def search
    @collections, @total_count = Collection.search(params[:search], params[:pagination], params[:sorting])

    render json: { collections: @collections, totalCount: @total_count }
  end

  # GET /api/collections/get_top_collection
  # GET /api/collections/get_top_collection.json
  # def get_top_collection
  #   @collection = Collection.get_top_collection()
  #   render json: @collection
  # end
end
