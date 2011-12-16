module Api
  
class AppsController < ApplicationController
  
  def index
    @apps = App.all
    render(:json => @apps.map(&:to_hash))
  end
end

end
