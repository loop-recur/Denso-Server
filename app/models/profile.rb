class Profile < ActiveRecord::Base
  after_initialize :set_defaults
  has_attached_file :avatar, PAPERCLIP_DEFAULTS.merge(:default_url => "/:class/:style.png",
                                                      :styles => { :thumb => "87x87#"})
  has_many :cars_profiles
  has_many :cars, :through => :cars_profiles
  
  def to_hash
    attributes.merge(:cars => cars, :avatar => avatar.url(:thumb))
  end
  
  def cars=(attributes)
    #ignore
  end
  
private
  
  def set_defaults
    self[:name] ||= "New Driver #{id}"
  end
  
end
