module Api
  
class ProfilesController < ApplicationController
  
  def index
    @profiles = Profile.all
    render(:json => @profiles.map(&:to_hash))
  end
  
  def create
    @profile = Profile.find(params[:id])
    @profile.update_attribute(:avatar, params[:avatar])
    render(:json => Profile.all.map(&:to_hash))
  end
  
  def update
    @profile = Profile.find(params[:id])
    @profile.update_attribute(:avatar, params[:avatar])
    render(:json => Profile.all.map(&:to_hash))
  end
  
end

end
