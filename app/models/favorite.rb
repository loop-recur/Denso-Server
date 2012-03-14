class Favorite < ActiveRecord::Base
  
  def to_hash
    attributes.merge(:location => {:coordinate => {:latitude => latitude, :longitude => longitude}, :display_address => [address]})
  end
  
  def bind(params)
    self.latitude = params[:location][:coordinate][:latitude]
    self.longitude = params[:location][:coordinate][:longitude]
    self.address = params[:location][:display_address].first
    self.name = params[:name]
    self.rating_img_url = params[:rating_img_url]
    self.profile_id = params[:profile_id]
  end
end
