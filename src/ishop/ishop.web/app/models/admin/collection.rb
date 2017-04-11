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

    list_json = list_json.map { |item_json| self.new(item_json) }

    total_count = collection.count

    [list_json, total_count]
  end

  def search(search, pagination, sorting)
    iputs 'search'
    iputs [sorting[:field].to_sym, sorting[:direction].to_sym]
    # iputs search
    # iputs pagination
     # iputs sorting
    # iputs collection
    # iputs self
    # iputs self.methods.sort



    list = self.products.where({ 
      code: /#{search}/i
    })
    # .sort {|x,y| sorting[:direction].to_sym == :asc ? x[sorting[:field].to_sym] <= y[sorting[:field].to_sym] : x[sorting[:field].to_sym] > y[sorting[:field].to_sym] }
    
    # .skip(pagination[:skip])
    # .limit(pagination[:take])
        # .order(sorting[:field] => sorting[:direction])
    #.elem_match(images: {is_cover: true})

    iputs 'upa11'
    iputs list

    [list, self.products.size]
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
