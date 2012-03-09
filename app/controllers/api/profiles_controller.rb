module Api
  
class ProfilesController < ApplicationController
  
  def index
    @profiles = Profile.all
    render(:json => @profiles.map(&:to_hash))
  end
  
  def update
    @profile = Profile.find(params[:id])
    @profile.update_attributes(params[:profile])
    render(:json => Profile.all.map(&:to_hash))
  end
  
end

end
