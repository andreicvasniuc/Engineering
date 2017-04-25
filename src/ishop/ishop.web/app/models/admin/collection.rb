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

    list_json = collection
    .aggregate([
      { '$match' => {
          '$or' => [
            {:name => {'$regex' => search}},
            {:description => {'$regex' => search}}
          ]
        }
      },
      { '$project' => {
          :name => 1, 
          :description => 1, 
          :published => 1, 
          :updated_at => 1,
          :image => 1,
          :products_count => { '$size' => { '$ifNull' => ['$products', []] } }
        }
      },
      { '$sort' => {
          sorting[:field] => directions[sorting[:direction].to_sym]
        }
      },
      {
        '$skip' => pagination[:skip]
      },
      {
        '$limit' => pagination[:take]
      }])

    # list_json = collection
    # .find({
    #     '$or' => [
    #       {:name => {'$regex' => search}},
    #       {:description => {'$regex' => search}}
    #     ]
    #   },
    #   {
    #     :projection => {
    #       :name => 1, 
    #       :description => 1, 
    #       :published => 1, 
    #       :updated_at => 1,
    #       :image => 1
    #   },
    #     :sort => {
    #       sorting[:field] => directions[sorting[:direction].to_sym]
    #     }
    # })
    # .skip(pagination[:skip])
    # .limit(pagination[:take])

    list_json = list_json.map { |item_json| self.new(item_json) }

    total_count = collection.count

    [list_json, total_count]
  end

  # def search(search, pagination, sorting)
  #   list = self.products.where({ name: /#{search}/i })
  #   # .sort {|x,y| sorting[:direction].to_sym == :asc ? x[sorting[:field].to_sym] <= y[sorting[:field].to_sym] : x[sorting[:field].to_sym] > y[sorting[:field].to_sym] }
    
  #   # .skip(pagination[:skip])
  #   # .limit(pagination[:take])
  #       # .order(sorting[:field] => sorting[:direction])
  #   #.elem_match(images: {is_cover: true})

  #   [list, self.products.size]
  # end

  def as_json(options={})
    attrs = super(options)

    attrs["products_count"] = self.products_count

    attrs["image"].merge!({
        :small_image_url => self.image.small_image_url,
        :medium_image_url => self.image.medium_image_url,
        :large_image_url => self.image.large_image_url
    }) if self.image.present?

      self.products.each_with_index do |product, index|
        attrs["products"][index] = product.as_json(attrs["products"][index])
      end if self.products.present?
    
    attrs
  end

  def delete_folder_with_images
    CollectionImage::Processor.delete_folder(self._id)
  end
end
