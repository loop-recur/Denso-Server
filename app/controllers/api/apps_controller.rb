module Api
  
class AppsController < ApplicationController
  
  def index
    @apps = params[:apks] ? App.all : App.htmls
    render(:json => @apps.map(&:to_hash))
  end
  
  # destructive, but it's a hack since html5 post params are wonky
  def show
    @app = App.find(params[:id])
    @app.update_attribute(:installed, !@app.installed)
    render(:json => @app.to_hash)
  end
end

end
