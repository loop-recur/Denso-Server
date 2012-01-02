require 'spec_helper'

module Api
  
describe AppsController do
  render_views
  
  describe "unauthenticated" do
    before do
      @request.env["HTTP_AUTHORIZATION"] = nil
      get :index, :format => "json"
    end
    
    it { should respond_with 200 }
  end
  
  context "Authenticated" do
    before do
      @user = Factory(:user, :password => "passsword", :password_confirmation => "passsword")
      @request.env["HTTP_AUTHORIZATION"] = "Basic " + Base64::encode64("#{@user.email}:passsword")
      @app = Factory(:app, :name => "gumby")
    end
  
    describe "GET /index" do
      before do
        get :index, :format => "json"
      end
      
      it { should respond_with :success }
      
      it "renders apps to json" do
        response.body.to_s.should include('"name":"gumby"')
      end
    end
    
    describe "GET /show" do
      before do
        get :show, :id => @app.id, :format => "json"
      end
      
      it "sets the app as installed" do
        @app.reload.installed?.should be_true
      end
      
      it "sets the app as uninstalled" do
        @app.reload.installed?.should be_true
        get :show, :id => @app.id, :format => "json"
        @app.reload.installed?.should be_false
      end
    end
  end
end
end