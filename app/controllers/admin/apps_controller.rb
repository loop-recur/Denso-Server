module Admin
  
class AppsController < Admin::ApplicationController
  
  def index
    @apps = App.paginate(:page => params[:page], :per_page => 15)
  end
  
  def create
    @app = App.new(params[:app])
    @app.save ? redirect_to(admin_apps_path) : render(:action => :new)
  end
  
  def edit
    @app = App.find(params[:id])
  end
  
  def new
    @app = App.new
  end
  
  def destroy
    App.find(params[:id]).destroy
    redirect_to admin_apps_path
  end
  
  def update
    @app = App.find(params[:id])    
    @app.update_attributes(params[:app]) ? redirect_to(admin_apps_path) : render(:action => :edit)
  end

  
end

end
