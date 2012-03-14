module Api
class ApplicationController < ::ApplicationController
  layout false
  skip_before_filter :require_http_authentication
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers
  before_filter :parse_json

  
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    headers['Access-Control-Max-Age'] = "1728000"
  end
  
  def cors_preflight_check
    if request.method =~ /options/i
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, UserAgent'
      headers['Access-Control-Max-Age'] = '1728000'

      render :text => '', :content_type => 'text/plain'
    end
  end
  
private

  def parse_json
    setJsonParams(JSON.parse(params[:json])) if params[:json]
  end
  
  def setJsonParams(attrs)
    params.merge!(attrs);
  end
  
end
end
