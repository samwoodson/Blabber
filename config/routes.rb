Rails.application.routes.draw do
  resources :blabs, only: [:index]
end
