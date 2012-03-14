module Api
  
class AppsController < ApplicationController
  
  def index
    @apps = (params[:apks] ? App.all : App.htmls).uniq
    render(:json => @apps.map(&:to_hash))
  end
  
  # destructive, but it's a hack since html5 post params are wonky
  def show
    @app = App.find(params[:id])
    if @app.installed?
      @app.update_attribute(:installed, false)
      Purchase.find_by_app_id_and_profile_id(@app.id, params[:profile_id]).tap{ |p| p.destroy if p }
    else
      @app.update_attribute(:installed, true)
      Purchase.find_or_create_by_app_id_and_profile_id(@app.id, params[:profile_id])
    end
    render(:json => @app.to_hash)
  end

end

end
