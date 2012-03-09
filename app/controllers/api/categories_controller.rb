module Api

class CategoriesController < ApplicationController
  def index
    @apps = Category.find_by_name(params[:category]).apps.uniq
    render(:json => @apps.map(&:to_hash))
  end
end

end
