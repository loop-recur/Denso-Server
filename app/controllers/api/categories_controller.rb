module Api

class CategoriesController < ApplicationController
  def index
    @apps = Category.by_name(params[:category]).first.apps.uniq
    render(:json => @apps.map(&:to_hash))
  end
end

end
