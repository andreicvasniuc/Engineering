class Admin::Collection
  include Mongoid::Document
  include Mongoid::Timestamps
  include CollectionConcern

  embeds_one :image, class_name: "Admin::CollectionImage"
  embeds_many :products, class_name: "Admin::Product"

  after_destroy :delete_folder_with_images

  scope :published, -> { where(published: true) }
  scope :names, -> { only(:name) }

  def self.search(search, pagination, sorting)
    directions = { asc: 1, desc: -1 }

    list_json = collection.find({
      :name => {'$regex' => search},
      :description => {'$regex' => search}
      },{
      :projection => {
        :name => 1, 
        :description => 1, 
        :published => 1, 
        :updated_at => 1,
        :image => 1
      },
      :sort => {
        sorting[:field] => directions[sorting[:direction].to_sym]
      }
    })
    .skip(pagination[:skip])
    .limit(pagination[:take])

    iputs list_json

    list_json = list_json.map { |item_json| self.new(item_json) }

    iputs list_json

    total_count = collection.count

    [list_json, total_count]
  end

  def as_json(options={})
    attrs = super(options)

    return attrs if self.image.nil?

    attrs["image"].merge!({
        :small_image_url => self.image.small_image_url,
        :medium_image_url => self.image.medium_image_url,
        :large_image_url => self.image.large_image_url
    })
    
    attrs
  end

  def delete_folder_with_images
    self.image.delete_image # use this way because after_destroy event is not triggered for embeds_one association
    CollectionImage::Processor.delete_folder(self._id)
  end
end
