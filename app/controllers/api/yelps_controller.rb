module Api
  
class YelpsController < ApplicationController
  
  def index
    client = Yelp::Client.new
    request = Yelp::V2::Search::Request::BoundingBox.new(:term => params[:term],
                                                         :sw_latitude => params[:sw_latitude],
                                                         :sw_longitude => params[:sw_longitude],
                                                         :ne_latitude => params[:ne_latitude],
                                                         :ne_longitude => params[:ne_longitude],
                                                         :limit => 10,
                                                         :consumer_key => 'gHLA5xNWPRxc7vQv2ubDkw',
                                                         :consumer_secret => 'wdFGjzGnQz11O6_Ehxqj1dkPnXA',
                                                         :token => 'edoyaJIsvBtJaefxXE4nHD3f7eOZJhXf',
                                                         :token_secret => 'QcQTiW-fO_2sUL70XHvemcxD9gs')
    response = client.search(request)
    render(:json => response)
  end
end

end
