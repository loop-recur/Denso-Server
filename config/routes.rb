Denso::Application.routes.draw do
  devise_for :users

  namespace :admin do
    root :to => "apps#index"
    resources :apps
    resources :users
  end
  
  namespace :api do
    resources :apps
  end
  
  root :to => "admin/apps#index"

end
