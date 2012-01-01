Denso::Application.routes.draw do
  devise_for :users

  namespace :admin do
    root :to => "apps#index"
    resources :apps
    resources :users
  end
  
  match 'api/apps.json' => 'api/apps#index', :as => 'apps'
  match 'api/yelps.json' => 'api/yelps#index', :as => 'yelps'
  
  root :to => "admin/apps#index"
end
