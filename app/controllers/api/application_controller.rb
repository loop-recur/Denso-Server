module Api
class ApplicationController < ::ApplicationController
  layout false
  skip_before_filter :require_http_authentication
  # before_filter :authenticate_user!
  # before_filter :allow_cross_domain_access
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

  # def allow_cross_domain_access
  #   Rails.logger.info("\n\n\n========setting headers!!!=======\n\n\n")
  #   response.headers["Access-Control-Allow-Origin"] = "*"
  #   response.headers["Access-Control-Allow-Methods"] = "*"
  #   Rails.logger.info("\n\n\n========response: #{response.headers.inspect}=======\n\n\n")
  # end
  
  
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    headers['Access-Control-Max-Age'] = "1728000"
  end
  
  def cors_preflight_check
    if request.method == :options
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version'
      headers['Access-Control-Max-Age'] = '1728000'
      render :text => '', :content_type => 'text/plain'
    end
  end
  
end
end
