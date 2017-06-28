class Admin::Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embedded_in :collection, class_name: "Admin::Collection"
  embeds_many :images, class_name: "Admin::ProductImage"

  after_create :create_for_all_locales
  after_destroy :delete_folder_with_images

  def delete_folder_with_images
    ProductImageProcessor.delete_folder(self.collection._id, self._id)
  end

  def set_image_cover(image_id)
    self.images.each{ |image| image.is_cover = false }
    self.images.find(image_id).is_cover = true
    self.save
  end

  # get list and total count with cover images
  # def self.search(search, pagination, sorting)
  #   directions = { asc: 1, desc: -1 }

  #   # run this command
  #   # db.products.find({name: { '$regex':/search/}}},{name: 1, published: 1, updated_at: 1, images: {$elemMatch: {is_cover: true}}})
  #   list_json = collection.find({
  #     :name => {'$regex' => search}
  #     },{
  #     :projection => {
  #       :name => 1, 
  #       :published => 1, 
  #       :updated_at => 1, 
  #       :images => {'$elemMatch' => {:is_cover => true}}
  #     },
  #     :sort => {
  #       sorting[:field] => directions[sorting[:direction].to_sym]
  #     }
  #   })
  #   .skip(pagination[:skip])
  #   .limit(pagination[:take])

  #   list_json = list_json.map { |item_json| self.new(item_json) }

  #   total_count = collection.count

  #   [list_json, total_count]
  # end

  def create_for_all_locales
    saved_name = self.name
    saved_description = self.description
    
    LocaleLooper.run do
      self.name = saved_name
      self.description = saved_description
    end

    self.save
  end
end
