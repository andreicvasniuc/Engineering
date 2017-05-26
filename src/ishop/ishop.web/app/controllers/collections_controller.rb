class CollectionsController < ApplicationController
  # POST /api/collections/search
  # POST /api/collections/search.json
  def search
    @collections, @total_count = Collection.search(params[:search], params[:pagination], params[:sorting])

    render json: { collections: @collections, totalCount: @total_count }
  end
end
