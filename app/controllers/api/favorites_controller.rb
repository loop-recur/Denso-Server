module Api
  
class FavoritesController < ApplicationController
  
  def index
    @favorites = Favorite.where(:profile_id => params[:profile_id])
    render(:json => @favorites)
  end
  
end

end
