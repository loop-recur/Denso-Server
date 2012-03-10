module Api

class SearchesController < ApplicationController
  def index
    @apps = App.search(params[:term])
    render(:json => @apps.map(&:to_hash))
  end
end

end
