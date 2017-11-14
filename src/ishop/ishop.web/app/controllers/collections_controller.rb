class CollectionsController < ApplicationController
  # GET /api/collections/:id
  # GET /api/collections/:id.json
  def show
    render json: { collection: Collection.find(collection_id) }
  end

  # GET /api/collections/dresses
  # GET /api/collections/dresses.json
  def dresses
    render json: { collections: Collection.published_dresses }
  end

  # GET /api/collections/accessories
  # GET /api/collections/accessories.json
  def accessories
    render json: { collections: Collection.published_accessories }
  end

  private
    def collection_id
      params[:id]
    end
end
