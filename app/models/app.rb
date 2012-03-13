class App < ActiveRecord::Base
  has_many :app_categories
  has_many :categories, :through => :app_categories

  scope :htmls, proc { where(["package_file_name LIKE ?", "%zip"]) }
  scope :search, proc { |term| where("name LIKE :term OR description LIKE :term", {:term => "%#{term}%"} ) }
  validates :name, :description, :presence => true
  has_attached_file :package, PAPERCLIP_DEFAULTS
  has_attached_file :image, PAPERCLIP_DEFAULTS.merge(:default_url => ":class/:style.png",
                                                     :styles => { :thumb => "87x87#"})
  def to_hash
    attributes.merge(:price => price.to_s, :image => image.url, :download => package.url, :installed => installed?)
  end
end
