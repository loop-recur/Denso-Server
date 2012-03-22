module Api

class CategoriesController < ApplicationController
  def index
    unless params[:apks]
      @apps = Category.by_name(params[:category]).first.apps.uniq
    else
      @apps = Category.by_name(params[:category]).first.apps.select {|a| a.package_file_name =~ /.*\.zip$/}.uniq
    end
     
    hashes = @apps.map(&:to_hash).map {|a| a.merge(:category => params[:category].downcase)}
    render(:json => hashes)
  end
end

end
