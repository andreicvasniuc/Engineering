class CollectionsController < ApplicationController
  # POST /api/collections/search
  # POST /api/collections/search.json
  # def search
  #   @collections, @total_count = Collection.search(params[:search], params[:pagination], params[:sorting])

  #   render json: { collections: @collections, totalCount: @total_count }
  # end

  # GET /api/collections/:id
  # GET /api/collections/:id.json
  def show
    render json: { collection: Collection.find(collection_id) }
  end

  # GET /api/collections/dresses
  # GET /api/collections/dresses.json
  def dresses
    render json: { collections: Collection.dresses }
  end

  # GET /api/collections/accessories
  # GET /api/collections/accessories.json
  def accessories
    render json: { collections: Collection.published.accessories }
  end

  private
    def collection_id
      params[:id]
    end
end
