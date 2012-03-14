Denso::Application.routes.draw do
  devise_for :users

  namespace :admin do
    root :to => "apps#index"
    resources :apps
    resources :users
  end
  
  match 'api/proxies.json' => 'api/proxies#index', :as => 'proxies', :via => :options
  match 'api/preferences.json' => 'api/preferences#index', :as => 'preferences', :via => :options
  match 'api/preferences/:id.json' => 'api/preferences#create', :as => 'preference_create', :via => :options
  match 'api/categories.json' => 'api/categories#index', :as => 'categories', :via => :options
  match 'api/searches.json' => 'api/searches#index', :as => 'searches', :via => :options
  match 'api/apps.json' => 'api/apps#index', :as => 'apps', :via => :options
  match 'api/apps/:id.json' => 'api/apps#show', :as => 'app_install', :via => :options
  match 'api/yelps.json' => 'api/yelps#index', :as => 'yelps', :via => :options
  match 'api/profiles.json' => 'api/profiles#index', :as => 'profiles', :via => :options
  match 'api/profile/:id.json' => 'api/profiles#update', :as => 'profile_update', :via => :options
  match 'api/purchases.json' => 'api/purchases#index', :as => 'purchases', :via => :options
  match 'api/purchases/destroy.json' => 'api/purchases#destroy', :as => 'purchases_destroy', :via => :options
  match 'api/favorites.json' => 'api/favorites#index', :as => 'favorites', :via => :options
  
  namespace :api do
    resources :apps
    resources :favorites
    resources :preferences
    resources :proxies
    resources :purchases
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
