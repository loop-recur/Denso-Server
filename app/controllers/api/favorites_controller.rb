module Api
  
class FavoritesController < ApplicationController
  
  def index
    @favorites = Favorite.where(:profile_id => params[:profile_id], :favorite => true)
    render(:json => @favorites.map(&:to_hash))
  end
  
  def create
    @favorite = Favorite.find_or_create_by_name_and_profile_id(:name => params[:name], :profile_id => params[:profile_id])
    @favorite.bind(params)
    @favorite.favorite = !@favorite.favorite?
    @favorite.save
    render(:json => @favorite.to_hash)
  end

end

end
