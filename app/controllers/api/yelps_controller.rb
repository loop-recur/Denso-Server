module Api
  
class YelpsController < ApplicationController
  
  def index
    response = YelpCaller.call_yelp(params)
    render(:json => response)
  end

end

end
