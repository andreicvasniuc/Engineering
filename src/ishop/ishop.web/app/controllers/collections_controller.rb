class CollectionsController < ApplicationController
  # POST /api/collections/search
  # POST /api/collections/search.json
  def search
    @collections, @total_count = Collection.search(params[:search], params[:pagination], params[:sorting])

    render json: { collections: @collections, totalCount: @total_count }
  end

  # GET /api/collections
  # GET /api/collections.json
  def index
    iputs params
    # @collection = Collection.get_top_collection()
    render json: []
  end
end
