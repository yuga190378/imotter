Rails.application.routes.draw do
  devise_for :users
  root "tweets#index"
  resources :tweets do
    resources :comments, only: [:new, :create]
  end
  namespace :api do
    resources :tweets, only: :index, defaults: { format: 'json' }
  end
  resources :users, only: [:show]
end
