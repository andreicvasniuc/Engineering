class Admin::Collection
  include Mongoid::Document
  include Mongoid::Timestamps
  include CollectionConcern

  embeds_one :image, class_name: "Admin::CollectionImage"
  embeds_many :products, class_name: "Admin::Product"

  after_create :create_for_all_locales
  after_destroy :delete_folder_with_images

  scope :published, -> { where(published: true) }
  scope :names, -> { only(:name) }

  def self.search(search, pagination, sorting)
    ### this query does NOT provide a way to get products_count
    # query = self.or({name: {'$regex' => search}}, {:description => {'$regex' => search}})
    #             .only(:name, :description, :published, :created_at, :updated_at)
    #             .order_by(sorting[:field]=> sorting[:direction])
    #             .skip(pagination[:skip])
    #             .limit(pagination[:take])

    # [query, self.count]


    directions = { asc: 1, desc: -1 }
    
    list_json = collection
    .aggregate([
      { '$match' => {
          '$or' => [
            {"name.#{I18n.locale}" => {'$regex' => search}},
            {"description.#{I18n.locale}" => {'$regex' => search}}
          ]
        }
      },
      { '$project' => {
          "name.#{I18n.locale}" => 1, 
          "description.#{I18n.locale}" => 1, 
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

    list_json = list_json.map do |item_json| 
      item_json["name"] = item_json["name"][I18n.locale]
      item_json["description"] = item_json["description"][I18n.locale]
      self.new(item_json)
    end

    [list_json, collection.count]
  end

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
    ::CollectionImage::Processor.delete_folder(self._id)
  end

  def create_for_all_locales
    saved_name = self.name
    saved_description = self.description;
    
    LocaleLooper.run do
      self.name = saved_name
      self.description = saved_description;
    end

    self.save
  end
end
