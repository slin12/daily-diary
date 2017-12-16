Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/questions', to: 'questions#index'
  post '/entries', to: 'entries#create'
  get '/entries', to: 'entries#index'
  patch '/entries/:id', to: 'entries#update'
end
