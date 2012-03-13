class YelpCaller
  class << self
  
    def call_yelp(params)
      @params = params
      response = get_yelp_response rescue get_fake_response
      response = get_fake_response if (!response || response["error"])
      response
    end
  
    def get_yelp_response
      client = Yelp::Client.new
      request = Yelp::V2::Search::Request::BoundingBox.new(:term => @params[:term],
                                                           :sw_latitude => @params[:sw_latitude],
                                                           :sw_longitude => @params[:sw_longitude],
                                                           :ne_latitude => @params[:ne_latitude],
                                                           :ne_longitude => @params[:ne_longitude],
                                                           :limit => 10,
                                                           :consumer_key => 'gHLA5xNWPRxc7vQv2ubDkw',
                                                           :consumer_secret => 'wdFGjzGnQz11O6_Ehxqj1dkPnXA',
                                                           :token => 'edoyaJIsvBtJaefxXE4nHD3f7eOZJhXf',
                                                           :token_secret => 'QcQTiW-fO_2sUL70XHvemcxD9gs')
      client.search(request)
    end
  
    def get_fake_response
      FakeYelp.response(@params[:term])
    end
  
    def call_key
      [@params[:term], @params[:sw_latitude]].join(",")
    end
  
    def rememoize(response)
      Rails.logger.info("\n\n\n========MEMOIZing: #{call_key.inspect}=======\n\n\n")
      responses[call_key] = response
      response
    end
  
    def memoized
      Rails.logger.info("\n\n\n========CHecking: #{call_key.inspect}=======\n\n\n")
      Rails.logger.info("\n\n\n========Responses: #{responses.inspect}=======\n\n\n")
      responses[call_key]
    end
  
    def responses
      @@responses ||= {}
    end
  end
end