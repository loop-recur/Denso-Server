class App < ActiveRecord::Base
  scope :htmls, proc { where(["package_file_name LIKE ?", "%zip"]) }
  validates :name, :description, :presence => true
  has_attached_file :package, PAPERCLIP_DEFAULTS
  has_attached_file :image, PAPERCLIP_DEFAULTS.merge(:default_url => ":class/:style.png",
                                                     :styles => { :thumb => "87x87#"})

  def to_hash
    attributes.merge(:price => price.to_s, :image => image.url, :download => package.url)
  end
end
