class Admin::CollectionsController < SecuredController
  before_action :set_collection, only: [:show, :update, :destroy, :upload_image]

  # POST /admin/collections/search
  # POST /admin/collections/search.json
  def search
    @collections, @total_count = Admin::Collection.search(params[:search], params[:pagination], params[:sorting])

    render json: { collections: @collections, totalCount: @total_count }
  end

  # GET /admin/collections/list
  # GET /admin/collections/list.json
  def list
    @collections = Admin::Collection.names

    render json: { collections: @collections }
  end

  # GET /admin/collections/1
  # GET /admin/collections/1.json
  def show
    render json: @collection
  end

  # POST /admin/collections
  # POST /admin/collections.json
  def create
    @collection = Admin::Collection.new(collection_params)

    if @collection.save
      render json: @collection, status: :created#, location: @collection
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/collections/1
  # PATCH/PUT /admin/collections/1.json
  def update
    if @collection.update(collection_params)
      render json: @collection, status: :ok#, location: @collection
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/collections/1
  # DELETE /admin/collections/1.json
  def destroy
    @collection.destroy

    render json: @collection, status: :ok#, location: @collection
  end

  # POST /admin/collections/1/upload_image
  # POST /admin/collections1/upload_image.json
  def upload_image
    delete_image() unless @collection.image.nil?

    @image = @collection.build_image(collection_image_params)

    if @image.save
      render json: @collection, status: :ok#, location: @collection
    else
      render json: image_processor.errors, status: :unprocessable_entity
    end
  end
  
  private

    def delete_image
      @collection.image.destroy
    end

    def set_collection
      # @collection = Admin::Collection.find(BSON::ObjectId.from_string(collection_id))
      @collection = Admin::Collection.find(collection_id)
    end

    def collection_id
      params[:id]
    end

    def collection_params
      params.require(:collection).permit(:name, :description, :published, :has_accessories)
    end

    def collection_image_params
      params.require(:image).permit(:url)
    end
end
