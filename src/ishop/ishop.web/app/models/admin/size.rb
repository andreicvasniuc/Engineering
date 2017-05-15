class Admin::Size
  include Mongoid::Document
  include SizeConcern

  after_create :create_for_all_locales

  def create_for_all_locales
    saved_name = self.name
    
    LocaleLooper.run do
      self.name = saved_name
    end

    self.save
  end
end
