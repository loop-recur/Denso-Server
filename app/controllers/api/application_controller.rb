module Api
class ApplicationController < ::ApplicationController
  layout false
  skip_before_filter :require_http_authentication
  before_filter :authenticate_user!
  before_filter :allow_cross_domain_access

  def allow_cross_domain_access
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
  end
end
end
