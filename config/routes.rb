Denso::Application.routes.draw do
  devise_for :users

  namespace :admin do
    root :to => "apps#index"
    resources :apps
    resources :users
  end
  
  match 'api/preferences.json' => 'api/preferences#index', :as => 'preferences', :via => :options
  match 'api/apps.json' => 'api/apps#index', :as => 'apps', :via => :options
  match 'api/apps/:id.json' => 'api/apps#show', :as => 'app_install', :via => :options
  match 'api/yelps.json' => 'api/yelps#index', :as => 'yelps', :via => :options
  
  namespace :api do
    resources :apps
    resources :preferences
    resources :profiles do
      member do
        post :update
      end
    end
    resources :yelps
    resources :categories
    resources :searches
  end
  
  root :to => "admin/apps#index"
end
