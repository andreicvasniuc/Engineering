class Admin::Product
  include Mongoid::Document
  include Mongoid::Timestamps
  include ProductConcern

  embeds_many :images, class_name: "Admin::ProductImage"
  embedded_in :collection, class_name: "Admin::Collection"

  after_destroy :delete_folder_with_images

  def delete_folder_with_images
    ProductImage::Processor.delete_folder(self.collection._id, self._id)
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
  #   # db.products.find({code: { '$regex':/search/}}},{code: 1, published: 1, updated_at: 1, images: {$elemMatch: {is_cover: true}}})
  #   list_json = collection.find({
  #     :code => {'$regex' => search}
  #     },{
  #     :projection => {
  #       :code => 1, 
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

  def as_json(options={})
    attrs = super(options)

    self.images.each_with_index do |image, index|
      attrs["images"][index].merge!({
        :small_image_url => image.small_image_url,
        :medium_image_url => image.medium_image_url,
        :large_image_url => image.large_image_url
      })
      attrs["cover_image"] = attrs["images"][index] if image.is_cover
    end
    
    attrs
  end
end
