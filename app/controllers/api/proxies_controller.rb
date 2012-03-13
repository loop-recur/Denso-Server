require 'uri'
require 'cgi'
require 'open-uri'

module Api
  
class ProxiesController < ApplicationController
  
  def index
    url = params[:url].gsub(/\s+/, "%20")
    response = get(url)
    render(:text => response)
  end
  
private
  def get(url)
    r = '';
    open(url) { |f| r = f.read  }
    r
  end
  
  def post(url, params)
    Net::HTTP.post_form(URI.parse(url), params)
  end

end

end
