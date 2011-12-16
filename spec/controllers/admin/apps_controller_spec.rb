require 'spec_helper'

module Admin
  
describe AppsController do
  fixtures :apps, :users
  render_views 
  
  describe "should require authentication" do
    it "redirects if not authenticated" do
      get :index
      response.should redirect_to(new_user_session_path)
    end
  end
  
  describe "Authenticated examples" do
    before do
      @user = users(:one)
      sign_in(@user)
      @app = apps(:one)
    end
    
    describe "POST /create" do
      context "valid" do
        before do
          App.any_instance.stubs(:valid?).returns(true)
          @doPost = lambda {post :create, :app => Factory.attributes_for(:app)}
          @doPost.call
        end

        it { should redirect_to(admin_apps_path) }

        it "creates an admin" do
          @doPost.should change(App, :count).by(1)
        end
      end

      context "invalid" do
        before do
          App.any_instance.stubs(:valid?).returns(false)
          @doPost = lambda {post :create, :app => {}}
          @doPost.call
        end

         it { should render_template("admin/apps/new") }
         
         it "doesn't create an admin" do
           @doPost.should change(App, :count).by(0)
         end
      end
    end
    
    describe "GET /index" do
      before do
        get :index
      end
      
      it { should respond_with :success }
      it { should assign_to :apps }
      it { should render_template :index }      
    end
    
    describe "GET /new" do
       before do
         get :new
       end

       it { should respond_with :success }
       it { should assign_to :app }
       it { should render_template :new }
     end
    
    describe "GET /edit" do
      before do
        get :edit, :id => 1
      end

      it { should respond_with :success }
      it { should assign_to :app }
      it { should render_template :edit }
    end
    
    describe "Put to /update" do
      describe "valid" do
        before do
          App.any_instance.stubs(:valid?).returns(true)
          put :update, :id => @app.id, :app => {:name => "goo@boo.com"}
        end
      
        it { should assign_to :app }
        it { should redirect_to(admin_apps_path) }

        it "updates the admin" do
          assigns(:app).name.should == "goo@boo.com"
        end
      end
      
      describe "invalid" do
        before do
          App.any_instance.stubs(:valid?).returns(false)
          put :update, :id => @app.id, :app => {}
        end
        
        it { should render_template(:edit) }
        
        it "doesn't update a admin" do
          assigns(:app).changed.should be_empty
        end
      end
    end
    
    describe "DELETE /destroy" do
      before do
        delete :destroy, :id => @app.id
      end
      
      it { should redirect_to(admin_apps_path) }
      
      it "destroys record" do
        lambda { @app.reload }.should raise_error(::ActiveRecord::RecordNotFound)
      end
    end
    
  end
end

end
