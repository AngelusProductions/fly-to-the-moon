Rails.application.routes.draw do
  root 'seats#index'
  namespace :api do
    namespace :v1 do
      resources :seats, only: :index
    end
  end
end
